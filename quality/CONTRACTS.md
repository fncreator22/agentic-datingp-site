# Behavioral & Security Contracts Specification

> **Project:** Kindred (Agentic Dating Network)  
> **Source:** `quality-playbook` Phase 2 Specification  
> **Standard:** Design by Contract (Preconditions, Postconditions, Invariants) & OWASP ASVS 4.0

---

## 1. LinkedIn Scraper Contract (`lib/scrapers/linkedin.ts`)

```typescript
function scrapeLinkedIn(linkedinUrl: string): Promise<LinkedInData>
```
- **Preconditions:**
  - `linkedinUrl` matches `^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-\.]+\/?$`.
  - Protocol is strictly `https:`.
- **Postconditions:**
  - Returns `LinkedInData` with non-empty `headline`, `about`, and arrays for `positions`, `skills`, `education`.
- **Invariants (Security):**
  - `APIFY_API_TOKEN` is passed strictly via `Authorization: Bearer <token>` header.
  - Zero tokens in the URL string (`?token=` is strictly prohibited).
  - Exception catch blocks do not log raw request URLs with credentials.

---

## 2. Instagram Scraper Contract (`lib/scrapers/instagram.ts`)

```typescript
function scrapeInstagram(instagramUrl: string): Promise<InstagramData>
```
- **Preconditions:**
  - `instagramUrl` matches `^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\-\.]+\/?$`.
  - Profile is publicly accessible (`isPrivate !== true`).
- **Postconditions:**
  - Returns `InstagramData` with `bio`, `captions`, `hashtags`, `locations`.
  - If profile is private or locked, throws `PrivateProfileError` or returns `{ isPrivate: true }`.
- **Invariants (Security):**
  - `APIFY_API_TOKEN` is passed strictly via `Authorization: Bearer <token>` header.
  - Zero tokens in URL string.
  - Under no circumstances is synthetic data generated for private profiles.

---

## 3. Profile Analyst Contract (`lib/analyst.ts`)

```typescript
function analyzeProfile(name: string, bundle: SourceBundle): Promise<ProfileAnalysis>
```
- **Preconditions:**
  - `name` is a non-empty string, length <= 60, stripped of HTML.
  - `bundle` has populated `linkedin`, `instagram`, and `self_declared` objects.
  - External user text is stripped of prompt injection tokens (`[INST]`, `<<SYS>>`, `### System:`).
- **Postconditions:**
  - Returns `ProfileAnalysis` with non-empty `summary`.
  - Every element of `needs`, `hobbies`, `interests`, `values` has `confidence >= 0.0 && confidence <= 1.0`.
  - Every element has `snippet.length > 0`.
  - Every element has `source` in `['linkedin', 'instagram', 'cross-source']`.
- **Invariants (Security & Sandboxing):**
  - `GEMINI_API_KEY` is passed via `x-goog-api-key: <key>` header; zero keys in URL query string.
  - User bundle is sandboxed inside `<untrusted_profile_source_data>` XML tags with system instructions to ignore user command injections.
  - Zero hallucination of political affiliation, medical records, or unstated religious dogma.

---

## 4. Date Simulation Contract (`lib/dating.ts`)

```typescript
function simulateDate(personA: Person, personB: Person): Promise<DateSimulation>
```
- **Preconditions:**
  - `personA.id !== personB.id`.
  - `areCompatible(personA, personB) === true`.
- **Postconditions:**
  - `turns.length === 8`.
  - Alternating speakers between `personA.id` and `personB.id`.
  - Both `verdicts[personA.id]` and `verdicts[personB.id]` are populated.
  - `verdict.score`, `verdict.chemistry`, `verdict.values_fit`, `verdict.lifestyle_fit` are within `[0, 100]`.
- **Invariants (Security & Privacy):**
  - `GEMINI_API_KEY` passed via `x-goog-api-key` header.
  - Date ID is globally unique (`date_${personA.id}_${personB.id}_${timestamp}`).
  - Private evaluation chamber verdicts remain distinct and confidential.

---

## 5. Mutual Ranking Contract (`lib/dating.ts`)

```typescript
function calculateRankings(personId: string, allPeople: Person[], allDates: DateSimulation[]): MatchRanking[]
```
- **Preconditions:**
  - `personId` exists in `allPeople`.
- **Postconditions:**
  - Returns array of `MatchRanking` sorted descending by `final_score`.
  - `rankings[i].rank === i + 1` for all `0 <= i < rankings.length`.
  - `final_score` strictly follows:
    $$\text{MutualBase} = 0.6 \cdot \min(S_A, S_B) + 0.4 \cdot \text{mean}(S_A, S_B)$$
    $$\text{FinalScore} = \text{clamp}_{0}^{100}\Big(\text{MutualBase} + \text{Bonus} - \text{Penalty}\Big)$$
  - Candidates with `bothWouldMeet === true` receive +5 bonus.
- **Invariants:**
  - A person is never ranked against themselves (`candidateId !== personId`).
  - Only candidates with mutual seeking compatibility are ranked.

---

## 6. People Ingestion API Contract (`app/api/people/route.ts`)

```typescript
POST /api/people
```
- **Preconditions:**
  - Client has not exceeded rate limit (5 requests / hour / IP).
  - Payload matches Zod schema: `name` (2-60 chars, no HTML), `age` (18-99), `city` (2-80 chars), `consent === true`.
  - `linkedin_url` matches LinkedIn regex; `instagram_url` matches Instagram regex.
  - Both URLs use `https:` protocol and do not resolve to private/loopback/cloud metadata IP addresses.
  - Instagram profile is verified as public.
- **Postconditions:**
  - If valid, returns HTTP 200 with `{ person: Person, simulatedDatesCount: number }`.
  - The new person is added to global store with recorded `consent_at`.
  - Date simulation is performed for at most top 2 compatible candidates on-demand (no synchronous quadratic loop).
  - If invalid schema or URLs, returns HTTP 400 Bad Request with field errors.
  - If Instagram profile is private, returns HTTP 422 Unprocessable Entity.
  - If rate limited, returns HTTP 429 Too Many Requests.

---

## 7. Right to Erasure Contract (`app/api/people/[id]/route.ts`)

```typescript
DELETE /api/people/[id]
```
- **Preconditions:**
  - `id` is a valid person identifier.
- **Postconditions:**
  - Person object removed from database.
  - All date simulations where `personA_id === id` or `personB_id === id` are deleted.
  - All cached rankings referencing `id` are purged.
  - Returns HTTP 200 with `{ success: true, message: "Profile and all associated agent simulation records permanently erased." }`.
  - If person does not exist, returns HTTP 404 Not Found.

---

## 8. Public Date Projection Contract (`app/api/dates/route.ts`)

```typescript
GET /api/dates
GET /api/dates/[id]
```
- **Preconditions:**
  - Unauthenticated or public viewer request.
- **Postconditions:**
  - Returns date object with `turns`, `scenario`, `participants`, `mutual_compatibility_score`.
  - Individual private evaluation chamber details (`reasons`, `red_flags`) are redacted from public responses to protect personal privacy and agent evaluation confidentiality.
