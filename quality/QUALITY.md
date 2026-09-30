# Kindred Quality & Security Constitution

> **Standard:** Quality Engineering Audit Specification v1.5.6 (`quality-playbook`)  
> **Security Baseline:** OWASP Top 10 API Security, ASVS 4.0, CWE/SANS Top 25  
> **Philosophy:** Deming / Juran / Crosby — Zero Defect Tolerance, Fitness for Purpose, Prevention over Inspection.

---

## 1. Core Quality & Fitness for Purpose Principles

1. **Fitness for Purpose:** The platform's primary purpose is authentic romantic matching between autonomous AI agents operating strictly on two public pillars: LinkedIn and Instagram. Any feature, scraper, or algorithm that deviates from this purpose or hallucinates outside these two pillars fails fitness for purpose.
2. **Zero-Slop Rule:** No placeholder text, unverified data, generic AI tropes, low-contrast UI, or dead imports are permitted. Every UI state must have real data, real citations, and authentic conversational cadence.
3. **Evidence Grounding Invariant:** Every extracted trait (Need, Hobby, Interest, Value, Lifestyle) in a person's analysis must carry a non-empty `snippet` and a provenance tag (`[LinkedIn]`, `[Instagram]`, or `[Cross-Source]`). Unverifiable traits are classified as hallucination bugs.
4. **Mutual Ranking Symmetry:** No person may be ranked on one-sided admiration. The ranking algorithm is strictly mutual:
   $$\text{Score} = 0.6 \cdot \min(S_A, S_B) + 0.4 \cdot \text{mean}(S_A, S_B) + \text{Bonus}_{\text{meet}} - \text{Penalty}_{\text{flags}}$$

---

## 2. Core Security & Isolation Invariants (MANDATORY ENFORCEMENT)

1. **Zero Credential Leaking in URLs (CWE-598 / CWE-200):**
   - API tokens (`APIFY_API_TOKEN`) and API keys (`GEMINI_API_KEY`, `GOOGLE_API_KEY`) must NEVER appear in URL query strings, request URIs, or error messages.
   - All external calls must pass tokens strictly via HTTP request headers (`Authorization: Bearer <token>` or `x-goog-api-key: <key>`).
2. **Strict Two-Source Grounding & Anti-SSRF Whitelist (CWE-918):**
   - In accordance with the main project premise: "For every person, and for every agent, there are exactly two sources of information: the person's LinkedIn and the person's Instagram. Nothing else."
   - The system shall reject any input URL not strictly matching the official LinkedIn regex (`^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-\.]+\/?$`) or Instagram regex (`^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\-\.]+\/?$`).
   - Private IP addresses (RFC 1918), link-local addresses (`169.254.169.254`), loopbacks (`127.0.0.1`, `localhost`), and non-HTTPS protocols (`file:`, `http:`, `javascript:`) must be blocked.
3. **Public Instagram Profile Restriction:**
   - In accordance with the core requirement: "Only public Instagram profiles."
   - Ingestion of private or restricted Instagram accounts is strictly prohibited. Private accounts must be rejected with HTTP 422 Unprocessable Entity. Under no circumstances may synthetic data be fabricated to bypass private profile locks.
4. **Agent Persona Isolation & Indirect Prompt Injection Defense (CWE-77):**
   - User-supplied profile text (bios, headlines, captions) must be treated as untrusted data.
   - All profile text inserted into LLM prompts must be sandboxed inside `<untrusted_profile_source_data>` XML tags with explicit system directives forbidding the LLM from executing commands inside user data.
5. **Confidentiality of Evaluation Chamber (CWE-200):**
   - In the agentic dating simulation, each agent enters a private evaluation chamber to render an independent verdict.
   - Private agent thoughts, internal critiques, and raw red flags must remain confidential. Public APIs must redact raw verdicts and only expose mutual compatibility rankings and consensual dialogue.
6. **Denial of Service & Rate Limiting (CWE-400):**
   - Profile ingestion and simulation endpoints must enforce IP-based rate limiting. Synchronous quadratic date simulation loops across all cohort candidates are prohibited on ingestion.
7. **Defense-in-Depth HTTP Headers & CSP (CWE-1021 / CWE-693):**
   - Every HTTP response must enforce `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Content-Security-Policy`.
8. **Right to Erasure & Consent Lifecycle (GDPR Art. 17):**
   - The platform must provide `DELETE /api/people/[id]` to immediately erase a person, their source bundle, analysis, and all associated date simulations upon request.

---

## 3. Universal Verification Gates (DeepSeek Harness)

All implementations by terminal agents must pass the five universal verification gates:
- **Gate 1 (Syntax / Compile):** `npx tsc --noEmit` must exit 0 with 0 errors.
- **Gate 2 (Static Analysis & Type Safety):** `npx eslint . --quiet` must exit 0 with 0 errors.
- **Gate 3 (Production Build):** `npm run build` must compile all routes with Turbopack and generate static pages without hydration warnings.
- **Gate 4 (Credential Isolation Scan):**
  ```bash
  git grep "?token=" lib/
  git grep "?key=" lib/
  ```
  Both commands MUST return ZERO matches.
- **Gate 5 (Data Truthfulness & Mechanical Consistency):**
  [`quality/verify_system.ts`](file:///c:/Users/sr2ma/Documents/github-connectors/dating-site/quality/verify_system.ts) must pass 100% of checks.

---

## 4. Coverage Targets & Anti-Theater Rules

- **Coverage Theater Prohibited:** Assertions must evaluate real behavioral paths and real inputs.
- **Mechanical Consistency:** All 25 seeded profiles must have verified two-source provenance, valid public links, and non-empty evidence citations.
