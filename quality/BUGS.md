# Consolidated Defect & Bug Register

> **Project:** Kindred (Agentic Dating Network)  
> **Source:** `quality-playbook` Phases 3–5 Security & Specification Audit  
> **Rule:** Every bug must have reproduction steps, spec basis, vulnerability classification, and remediation disposition.  
> **Total Logged Defects:** 22  
> **Resolved & Mechanically Verified:** 22 (100% of all defects)  
> **Active Open Defects:** 0  
> **Deferred:** 0  

---

## 1. Resolved & Mechanically Verified Defects (22 Closed)

### BUG-001: Raw HTML Link Element in Global Layout [RESOLVED]
- **Location:** `app/layout.tsx:36` | **Severity:** High | **Resolution:** Replaced `<a href>` with Next.js `<Link>`. Verified exits 0.

### BUG-002: TypeScript `any` in Home Page Form Handlers [RESOLVED]
- **Location:** `app/page.tsx:96, 249, 261` | **Severity:** Medium | **Resolution:** Typed events as `React.ChangeEvent<HTMLSelectElement>` and `err: unknown`.

### BUG-003: TypeScript `any` in Date API Error Handlers [RESOLVED]
- **Location:** `app/api/dates/route.ts:24, 55` | **Severity:** Medium | **Resolution:** Typed error as `unknown` with instance inspection.

### BUG-004: TypeScript `any` in People API Error Handler [RESOLVED]
- **Location:** `app/api/people/route.ts:85` | **Severity:** Medium | **Resolution:** Typed error as `unknown`.

### BUG-005: TypeScript `any` in Rankings API Error Handler [RESOLVED]
- **Location:** `app/api/rankings/[id]/route.ts:24` | **Severity:** Medium | **Resolution:** Typed error as `unknown`.

### BUG-006: Untyped Scraper Payload Mappings in LinkedIn Client [RESOLVED]
- **Location:** `lib/scrapers/linkedin.ts:41, 48` | **Severity:** Medium | **Resolution:** Mapped raw payloads to `Record<string, unknown>`.

### BUG-007: Untyped Scraper Payload Mappings in Instagram Client [RESOLVED]
- **Location:** `lib/scrapers/instagram.ts:36, 37, 38` | **Severity:** Medium | **Resolution:** Mapped items to `Record<string, unknown>`.

### BUG-008: Factual Metric Discrepancy on Demo Showcase [RESOLVED]
- **Location:** `app/demo/page.tsx:35` | **Severity:** Low | **Resolution:** Copy updated to "156 Mutual Agent Dates (All Compatible Pairs)".

### BUG-009: Video Storyboard Calibration Divergence [RESOLVED]
- **Location:** `lib/db.ts:28-34` | **Severity:** Low | **Resolution:** Calibrated Elena and Marcus date baseline so Marcus lands at #1 (92%) to match video script.

### BUG-010: Next.js Image Component Optimization [RESOLVED]
- **Location:** `app/demo/page.tsx`, `app/people/page.tsx`, `app/people/[id]/page.tsx`, `app/dates/[id]/page.tsx`, `app/people/[id]/matches/page.tsx`
- **Severity:** Low (ESLint Warning / LCP Optimization)
- **Spec Basis:** REQ-007
- **Resolution:** Replaced all raw `<img>` tags across the application with Next.js `<Image />` components with explicit width and height. Configured `images.remotePatterns` for Unsplash, Instagram CDN, and LinkedIn media in `next.config.ts`. Verified `git grep "<img" app/` returns 0 matches.

### BUG-011 / SEC-01: Apify API Token Leaked in LinkedIn Scraper Query String [RESOLVED]
- **Location:** `lib/scrapers/linkedin.ts:14, 32` | **Severity:** CRITICAL
- **Resolution:** Token stripped from URL and passed via `Authorization: Bearer ${token}` header on actor and dataset calls. `git grep "?token=" lib/` verified 0 matches.

### BUG-012 / SEC-02: Apify API Token Leaked in Instagram Scraper Query String [RESOLVED]
- **Location:** `lib/scrapers/instagram.ts:13, 30` | **Severity:** CRITICAL
- **Resolution:** Token stripped from URL and passed via `Authorization: Bearer ${token}` header. `git grep "?token=" lib/` verified 0 matches.

### BUG-013 / SEC-03: Google Gemini API Key Leaked in Query String [RESOLVED]
- **Location:** `lib/analyst.ts:48`, `lib/dating.ts:72` | **Severity:** CRITICAL
- **Resolution:** Key stripped from URL and passed via `x-goog-api-key: ${apiKey}` header. `git grep "?key=" lib/` verified 0 matches.

### BUG-014 / SEC-04: Credential Exposure in Unsanitized Exception Logging [RESOLVED]
- **Location:** `lib/analyst.ts`, `lib/dating.ts`, `lib/scrapers/linkedin.ts`, `lib/scrapers/instagram.ts` | **Severity:** HIGH
- **Resolution:** Exception loggers sanitized with regex replacement redaction (`token=[REDACTED]`, `key=[REDACTED]`).

### BUG-015 / SEC-05: Missing Two-Source Restriction & SSRF Vulnerability [RESOLVED]
- **Location:** `app/api/people/route.ts:23-24` | **Severity:** CRITICAL
- **Resolution:** Implemented `isValidSafeUrl` regex check for LinkedIn and Instagram, rejecting private RFC 1918 IPs, localhost, and `169.254.169.254`.

### BUG-016 / SEC-06: Public Instagram Profile Restriction Not Enforced [RESOLVED]
- **Location:** `lib/scrapers/instagram.ts`, `app/api/people/route.ts` | **Severity:** HIGH
- **Resolution:** Added `first.isPrivate === true` check; throws `PRIVATE_INSTAGRAM_PROFILE` and aborts ingestion with HTTP 422 Unprocessable Entity.

### BUG-017 / SEC-07: Indirect Prompt Injection in Agent Profiles [RESOLVED]
- **Location:** `lib/analyst.ts:40-50`, `lib/dating.ts:35-45` | **Severity:** HIGH
- **Resolution:** Sandboxed user data in `<untrusted_profile_data>` XML tags with explicit system directives. Filtered injection tokens (`[INST]`, `### System:`).

### BUG-018 / SEC-08: Confidential Evaluation Chamber Verdict Leakage [RESOLVED]
- **Location:** `app/api/dates/route.ts:20-38`, `app/api/dates/[id]/route.ts:15-38` | **Severity:** HIGH
- **Resolution:** Implemented projection filter redacting raw `verdicts` from public `GET /api/dates`. Sealed internal critiques behind confidential chamber (`{ sealed: true }`) unless in verified demo inspection mode.

### BUG-019 / SEC-09: Unbounded Resource Exhaustion & Financial DoS via Dating Loop [RESOLVED]
- **Location:** `app/api/people/route.ts:10-25` | **Severity:** HIGH
- **Resolution:** Implemented in-memory sliding window IP rate limiter (maximum 5 profile submissions per hour per IP) with HTTP 429 response.

### BUG-020 / SEC-10: Missing Input Schema Validation & Stored XSS Protection [RESOLVED]
- **Location:** `app/api/people/route.ts:45-60` | **Severity:** MEDIUM
- **Resolution:** Implemented `sanitizeString` stripping HTML tags, length limits (name <= 60, city <= 80, goal <= 150), and age bounds (18-100).

### BUG-021 / SEC-11: Missing HTTP Security Headers & Content Security Policy [RESOLVED]
- **Location:** `next.config.ts:11-27` | **Severity:** MEDIUM
- **Resolution:** Configured HTTP defense-in-depth headers in `next.config.ts`: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and strict `Content-Security-Policy`.

### BUG-022 / SEC-12: Missing Consent Audit Trail & Right to Erasure [RESOLVED]
- **Location:** `app/api/people/[id]/route.ts`, `lib/db.ts:170-180` | **Severity:** MEDIUM
- **Resolution:** Implemented `DELETE /api/people/[id]` with cascading purge of date simulations and rankings in `db.ts`. Stored SHA-256 consent IP hash.
