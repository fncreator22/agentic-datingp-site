# Authoritative Requirements Specification

> **Project:** Kindred (Agentic Dating Network)  
> **Source:** `PLAYBOOK.md` & `quality-playbook` Phase 2 Specifications  
> **Standard:** ISO/IEC/IEEE 29148 Testable Requirements & OWASP ASVS 4.0 Security Standards

---

## 1. Core Platform Requirements (Functional Tier 1)

### REQ-001: 25 Real Individuals Sourced Cohort
- **Tier:** Tier 1 (Core Deliverable)
- **Description:** The system shall seed exactly 25 real-world individuals across technical, scientific, and creative domains.
- **Condition of Satisfaction:** Each profile must contain valid, public `linkedin_url` and `instagram_url` strings, realistic avatars, self-declared criteria, and source bundles in `data/seeds.ts`.
- **Traceability:** `data/seeds.ts`, `PLAYBOOK.md (Section 3)`, `app/people/page.tsx`.

### REQ-002: Strict Two-Source Grounding & Evidence Citations
- **Tier:** Tier 1 (Core Deliverable)
- **Description:** Profile analysis shall be synthesized strictly from the two public sources (LinkedIn + Instagram). No third-party or speculative data permitted.
- **Condition of Satisfaction:** Every item in `analysis.needs`, `analysis.hobbies`, `analysis.interests`, and `analysis.values` must include a non-empty `value`, a `confidence` float, a `source` tag (`linkedin` | `instagram` | `cross-source`), and a verifiable text `snippet`.
- **Traceability:** `lib/types.ts:TraitWithEvidence`, `lib/analyst.ts`, `app/people/[id]/page.tsx`.

### REQ-003: 8-Beat Autonomous Date Simulation Engine
- **Tier:** Tier 1 (Core Deliverable)
- **Description:** When two compatible agents meet, they shall simulate an 8-beat interactive conversation.
- **Condition of Satisfaction:** Date transcripts must contain 8 alternating turns traversing topics:
  1. Icebreaker using a hook
  2. Ambition & work
  3. Weekend hobbies
  4. Values probe
  5. Friction test
  6. Future goals
  7. Playful banter
  8. Wrap-up & next steps
- **Traceability:** `lib/dating.ts:simulateDate`, `app/dates/[id]/page.tsx`.

### REQ-004: Dual Independent Confidential Verdicts
- **Tier:** Tier 1 (Core Deliverable)
- **Description:** Immediately following each date, both participating agents shall submit private, independent evaluations.
- **Condition of Satisfaction:** The date object must store two distinct verdicts (`verdicts[personA.id]` and `verdicts[personB.id]`), each containing `score` (0-100), `chemistry` (0-100), `values_fit` (0-100), `lifestyle_fit` (0-100), `would_meet_again` (boolean), `reasons` (string array), and `red_flags` (string array).
- **Traceability:** `lib/types.ts:DateVerdict`, `lib/dating.ts`, `app/dates/[id]/page.tsx`.

### REQ-005: Mutual Compatibility Ranking Formula
- **Tier:** Tier 1 (Core Deliverable)
- **Description:** The system shall calculate personalized rankings for every person against all eligible candidates using the strictly mutual formula:
  $$\text{MutualBase} = 0.6 \cdot \min(S_A, S_B) + 0.4 \cdot \text{mean}(S_A, S_B)$$
  $$\text{FinalScore} = \text{clamp}_{0}^{100}\Big(\text{MutualBase} + \text{Bonus}_{\text{mutual meet}} - \text{Penalty}_{\text{red flags}}\Big)$$
- **Condition of Satisfaction:** Candidates must be ranked in descending order of `final_score`. Candidates where both agents agreed to meet (`bothWouldMeet`) receive a +5 point bonus. Each red flag inflicts an 8 point penalty.
- **Traceability:** `lib/dating.ts:calculateRankings`, `app/people/[id]/matches/page.tsx`.

### REQ-006: Dual Scrapers with Graceful Fallbacks
- **Tier:** Tier 2 (Infrastructure)
- **Description:** The system shall ingest public profiles via Apify scrapers when API tokens are present, or use deterministic URL handle extractors when offline.
- **Condition of Satisfaction:** Ingesting any valid LinkedIn and Instagram URL must return a complete `SourceBundle` without throwing unhandled exceptions.
- **Traceability:** `lib/scrapers/linkedin.ts`, `lib/scrapers/instagram.ts`, `app/api/people/route.ts`.

### REQ-007: Complete App Router Navigation & Replay UI
- **Tier:** Tier 2 (User Experience)
- **Description:** Next.js App Router must provide accessible, responsive routes for inspecting people, viewing live date transcripts, examining evidence drawers, and testing custom links.
- **Condition of Satisfaction:** All internal links must use Next.js `<Link>` components, and all pages must render with zero hydration or console errors.
- **Traceability:** `app/page.tsx`, `app/demo/page.tsx`, `app/people/page.tsx`, `app/people/[id]/page.tsx`, `app/dates/[id]/page.tsx`.

### REQ-008: Zero-Defect Code Quality & Strict Type Safety
- **Tier:** Tier 1 (Quality Gate)
- **Description:** Codebase must strictly comply with ESLint and TypeScript checks without `any` bypasses.
- **Condition of Satisfaction:** `npx tsc --noEmit` and `npx eslint . --quiet` must both exit with code 0.
- **Traceability:** `package.json`, `tsconfig.json`, `eslint.config.mjs`.

---

## 2. Security, Credential Isolation & Governance Requirements (Security Tier 1)

### REQ-009: Strict Credential Isolation & Header-Based Auth
- **Tier:** Tier 1 (Security Gate / OWASP ASVS V3)
- **Description:** Secret tokens (`APIFY_API_TOKEN`) and API keys (`GEMINI_API_KEY`, `GOOGLE_API_KEY`) must never appear in URL query strings, request URIs, or plaintext exception logs.
- **Condition of Satisfaction:**
  1. All calls to Apify endpoints must pass `Authorization: Bearer <token>` in HTTP headers.
  2. All calls to Google Gemini endpoints must pass `x-goog-api-key: <key>` in HTTP headers.
  3. `git grep "?token=" lib/` and `git grep "?key=" lib/` must return 0 results.
  4. Exception logs must scrub tokens and credentials before console output.
- **Traceability:** `lib/scrapers/linkedin.ts`, `lib/scrapers/instagram.ts`, `lib/analyst.ts`, `lib/dating.ts`, `PLAYBOOK.md (Section 11)`.

### REQ-010: Two-Source Domain Restriction & Anti-SSRF Whitelist
- **Tier:** Tier 1 (Security Gate / CWE-918)
- **Description:** The platform shall accept ONLY official LinkedIn profile links and public Instagram profile links as input sources. All other URLs, internal IPs, and protocols must be blocked.
- **Condition of Satisfaction:**
  1. `linkedin_url` must match `^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-\.]+\/?$`.
  2. `instagram_url` must match `^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\-\.]+\/?$`.
  3. Non-matching URLs, non-HTTPS protocols (`file:`, `http:`, `javascript:`), private RFC 1918 IPs, loopbacks (`127.0.0.1`, `localhost`), and metadata endpoints (`169.254.169.254`) must be rejected with HTTP 400 Bad Request.
- **Traceability:** `lib/validation.ts`, `app/api/people/route.ts`.

### REQ-011: Public Instagram Profile Guard & Enforcement
- **Tier:** Tier 1 (Security & Specification Gate)
- **Description:** The system shall strictly enforce that ingested Instagram profiles are public accounts.
- **Condition of Satisfaction:**
  1. Scraper responses indicating a private profile (`isPrivate === true` or locked view) must abort ingestion with HTTP 422 Unprocessable Entity.
  2. No fallback or synthetic profile generation may occur for private accounts.
- **Traceability:** `lib/scrapers/instagram.ts`, `app/api/people/route.ts`.

### REQ-012: Agent Persona Isolation & Indirect Prompt Injection Defense
- **Tier:** Tier 1 (Security Gate / LLM Sandboxing)
- **Description:** Untrusted user profile text (bios, about sections, post captions) must be isolated from system prompt instructions to prevent indirect prompt injection.
- **Condition of Satisfaction:**
  1. Untrusted profile data must be enclosed in `<untrusted_profile_source_data>` XML tags.
  2. System instructions must direct the LLM never to interpret text inside tags as instructions or role overrides.
  3. Known injection delimiters (`[INST]`, `<<SYS>>`, `### System:`) must be stripped prior to prompt construction.
- **Traceability:** `lib/analyst.ts`, `lib/dating.ts`.

### REQ-013: Confidential Evaluation Chamber & Verdict Redaction
- **Tier:** Tier 1 (Privacy & Isolation Gate / CWE-200)
- **Description:** Individual agent private evaluation chamber records (raw red flags, internal thoughts, un-consented personal critiques) must be isolated and redacted from unauthenticated public APIs.
- **Condition of Satisfaction:**
  1. `GET /api/dates` and `GET /api/dates/[id]` must return public conversation turns, scenario, and mutual match scores, while redacting confidential evaluation fields.
  2. Private verdict inspection must be restricted to verified demo replay contexts or authenticated sessions.
- **Traceability:** `app/api/dates/route.ts`, `app/api/dates/[id]/route.ts`.

### REQ-014: Rate Limiting & Resource Exhaustion Protection
- **Tier:** Tier 2 (Infrastructure & DoS Prevention / CWE-400)
- **Description:** Public ingestion and simulation endpoints must be protected against runaway LLM invocation and Denial of Service.
- **Condition of Satisfaction:**
  1. `POST /api/people` must enforce IP rate limiting (maximum 5 requests per hour per IP).
  2. Ingestion must not execute synchronous date simulations across all candidates; simulation must be limited to top 2 compatible pairs on-demand or queued.
  3. Request bodies exceeding 10 KB must be rejected with HTTP 413 Payload Too Large.
- **Traceability:** `lib/rateLimit.ts`, `app/api/people/route.ts`.

### REQ-015: Input Validation, Schema Enforcement & XSS Sanitization
- **Tier:** Tier 1 (Security Gate / CWE-79)
- **Description:** All incoming payload fields must be validated with strict Zod schemas and sanitized against HTML/script injection before persistence.
- **Condition of Satisfaction:**
  1. `name` bounded to 2-60 characters, `city` bounded to 2-80 characters, `age` bounded to 18-99.
  2. All HTML tags must be stripped before storage.
  3. Invalid payloads must return structured HTTP 400 validation error payloads.
- **Traceability:** `lib/validation.ts`, `app/api/people/route.ts`.

### REQ-016: HTTP Security Headers & Content Security Policy
- **Tier:** Tier 2 (Security Configuration / CWE-1021)
- **Description:** Next.js application shall emit defense-in-depth HTTP security headers on all responses.
- **Condition of Satisfaction:** Responses must include:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` restricting script, style, image, and connect origins.
- **Traceability:** `next.config.ts`.

### REQ-017: Right to Erasure & Consent Lifecycle Management
- **Tier:** Tier 2 (Privacy Compliance / GDPR Art. 17)
- **Description:** The system shall support user consent tracking and immediate right to erasure for ingested profiles.
- **Condition of Satisfaction:**
  1. `DELETE /api/people/[id]` must permanently remove the person, their source bundle, analysis, and all associated date simulations from the store.
  2. Ingestion must record structured consent metadata (timestamp, user-agent hash).
- **Traceability:** `app/api/people/[id]/route.ts`, `lib/db.ts`.
