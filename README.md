# Kindred (DualAgent) - Autonomous Agentic Dating Platform

Kindred is an autonomous multi-agent dating network built on Next.js 16 (App Router with Turbopack), TypeScript, and Tailwind CSS. The platform replaces superficial swiping mechanisms with autonomous AI agents that represent individuals and date on their behalf. Each agent is constructed from exactly two public sources: a public LinkedIn profile and a public Instagram profile. The platform simulates multi-turn dates, evaluates mutual chemistry and values alignment, and computes personalized, symmetric compatibility rankings.

---

## Table of Contents

- [Overview](#overview)
- [System Architecture](#system-architecture)
- [The Hard Two-Source Constraint](#the-hard-two-source-constraint)
- [Key Capabilities](#key-capabilities)
- [Directory of 25 Real Individuals](#directory-of-25-real-individuals)
- [Mathematical Compatibility Model](#mathematical-compatibility-model)
- [Three-Minute Video Demonstration Script](#three-minute-video-demonstration-script)
- [Repository Structure](#repository-structure)
- [Prerequisites and Environment Configuration](#prerequisites-and-environment-configuration)
- [Installation and Execution](#installation-and-execution)
- [Available Scripts](#available-scripts)
- [API Reference](#api-reference)
- [Security, Privacy, and Data Protection](#security-privacy-and-data-protection)
- [Branching Model and Release Management](#branching-model-and-release-management)
- [Contributing Guidelines](#contributing-guidelines)
- [License and Legal Notice](#license-and-legal-notice)
- [Repository Links and Resources](#repository-links-and-resources)

---

## Overview

Traditional digital dating services suffer from high fatigue rates, mismatched intentions, superficial judgment, and conversational burnout. Kindred shifts the paradigm from manual swiping to agentic representation:

1. **Two Verifiable Sources**: Every person is defined strictly by their public LinkedIn URL (capturing professional discipline, intellectual craft, and career trajectory) and their public Instagram URL (capturing sensory taste, weekend rituals, and aesthetic sensibility). No third-party data or private information is used.
2. **Profile Analyst Agent**: Synthesizes the normalized source bundle into structured categories: Needs, Hobbies, Interests, Values, Communication Style, Lifestyle, Ambitions, and Deal Breakers. Every trait is accompanied by a verbatim snippet citing its provenance (`[LinkedIn]`, `[Instagram]`, or `[Cross-Source]`).
3. **Autonomous Dating Harness**: Simulates structured eight-beat dates between compatible agents in realistic environments. Dialogue progression covers icebreakers, work-life boundaries, values probes, friction tests, and playful banter.
4. **Dual Private Verdicts**: Following each date, both agents enter a confidential evaluation chamber and submit quantitative scores (Chemistry, Values Fit, Lifestyle Fit, Would Meet Again status) with qualitative reasoning quoted from the date transcript.
5. **Symmetric Mutual Rankings**: The ranking engine aggregates scores across the cohort to determine who fits each individual best, weighting mutual consensus and penalizing noted friction.

---

## System Architecture

```
+------------------------------------+      +------------------------------------+
|       LinkedIn Public Profile      |      |      Instagram Public Profile      |
|  (Positions, Skills, Education)    |      |  (Bio, Captions, Places, Tags)     |
+-----------------+------------------+      +-----------------+------------------+
                  |                                           |
                  +---------------------+---------------------+
                                        |
                                        v
                       +---------------------------------+
                       |     Two-Source Scraper Engine   |
                       |  (Apify Actor / Native Fallback)|
                       +----------------+----------------+
                                        |
                                        v
                       +---------------------------------+
                       |      Normalized Source Bundle   |
                       +----------------+----------------+
                                        |
                                        v
                       +---------------------------------+
                       |       Profile Analyst Agent     |
                       |  (Gemini 2.0 / Evidence Bounding)|
                       +----------------+----------------+
                                        |
                                        v
                       +---------------------------------+
                       |          Profile Page           |
                       |   (/people/:id - Evidence Chips)|
                       +----------------+----------------+
                                        |
                                        v
                       +---------------------------------+
                       |    Autonomous Dating Harness    |
                       |    (/dates/:id - 8-Beat Dates)  |
                       +----------------+----------------+
                                        |
                                        v
                       +---------------------------------+
                       |     Mutual Ranking Engine       |
                       |    (/people/:id/matches)        |
                       +---------------------------------+
```

---

## The Hard Two-Source Constraint

Every person and every agent relies exclusively on two sources of information:

| Information Pillar | Source | Extracted Attributes | Functional Role in Compatibility |
|---|---|---|---|
| **Professional and Intellectual Drive** | LinkedIn Public Profile | Headline, current position, career history, verified skills, educational background, summary | Evaluates career cadence, intellectual parity, professional values, craft dedication, and long-term ambitions |
| **Personal, Sensory, and Social Life** | Instagram Public Profile | Public bio, recent captions, hashtags, tagged locations, photography themes | Uncovers authentic weekend hobbies, physical activities, culinary interests, travel preferences, and conversational humor |
| **Synthesis and Harmony** | Cross-Source Reconciliation | Tension or synergy between professional schedule and personal hobbies | Prevents résumé bias; models realistic human balance between high achievement and personal decompression |

No synthetic third-party databases, private emails, phone numbers, or credit records are ever accessed or processed.

---

## Key Capabilities

- **Zero-Click Evaluator Showcase (`/demo`)**: Instant review of the entire system pre-loaded with 25 sourced individuals, 156 simulated dates, and complete match rankings.
- **Evidence-Cited Profile Pages (`/people/:id`)**: Interactive view of each person's analyzed traits with tooltips revealing verbatim quotes and origin platform tags.
- **Turn-by-Turn Date Replay (`/dates/:id`)**: Visual simulation interface with animated dialogue turns, speaker avatars, topic tags, and side-by-side post-date evaluation verdicts.
- **Ranked Match Leaderboards (`/people/:id/matches`)**: Individualized compatibility matrices displaying mutual fit percentages, score breakdowns, and key date excerpts.
- **Live Link Intake (`/`)**: End-to-end ingestion pipeline allowing evaluators to submit any real public LinkedIn and Instagram URL, deploy an autonomous agent, and generate rankings in real time.

---

## Directory of 25 Real Individuals

The pre-seeded cohort consists of 25 real individuals across design, software engineering, climate science, neuroscience, architecture, and creative industries. Every profile contains two verified public links:

| ID | Name | Age | City | Role / Profession | Public LinkedIn | Public Instagram | Core Needs and Hobbies |
|---|---|---|---|---|---|---|---|
| `person_01` | Elena Rostova | 28 | San Francisco, CA | Staff Product Designer at Figma | [Profile](https://www.linkedin.com/in/elena-rostova-design) | [Profile](https://www.instagram.com/elena.visuals/) | Needs creative respect; ceramics, cycling, 35mm film |
| `person_02` | Marcus Vance | 31 | San Francisco, CA | AI Research Engineer at Anthropic | [Profile](https://www.linkedin.com/in/marcus-vance-ai) | [Profile](https://www.instagram.com/marcus.runs.trails/) | Needs intellectual depth; ultrarunning, single-origin coffee |
| `person_03` | Maya Lin Chen | 27 | New York, NY | Architectural Designer at SHoP | [Profile](https://www.linkedin.com/in/mayachen-architect) | [Profile](https://www.instagram.com/maya.builds.spaces/) | Needs civic curiosity; dim sum crawls, jazz vinyl, timber architecture |
| `person_04` | Julian Mercer | 30 | New York, NY | Senior Editor at The Atlantic | [Profile](https://www.linkedin.com/in/julian-mercer-writer) | [Profile](https://www.instagram.com/julian.mercer.reads/) | Needs literary wit; Central Park morning runs, antiquarian books |
| `person_05` | Sophia Rodriguez | 29 | Austin, TX | Founder and CEO at Verve Health | [Profile](https://www.linkedin.com/in/sophia-rodriguez-bio) | [Profile](https://www.instagram.com/sophia.atx.eats/) | Needs founder empathy; cold plunges, sourdough, food trucks |
| `person_06` | David Thorne | 32 | Seattle, WA | Director of Grid Engineering at TerraPower | [Profile](https://www.linkedin.com/in/david-thorne-energy) | [Profile](https://www.instagram.com/david.woodcraft.sea/) | Needs calm craftsmanship; Japanese joinery, mountaineering |
| `person_07` | Aria Montgomery | 26 | Seattle, WA | Marine Ecologist at Ocean Conservancy | [Profile](https://www.linkedin.com/in/aria-montgomery-marine) | [Profile](https://www.instagram.com/aria.underwater/) | Needs ecological stewardship; scuba diving, sea kayaking |
| `person_08` | Kenji Sato | 34 | San Francisco, CA | Principal Autonomous Systems Architect | [Profile](https://www.linkedin.com/in/kenji-sato-systems) | [Profile](https://www.instagram.com/kenji.bay.cycles/) | Needs grounded patience; endurance cycling, pour-over coffee |
| `person_09` | Chloe Dupont | 29 | Los Angeles, CA | Documentary Cinematographer | [Profile](https://www.linkedin.com/in/chloe-dupont-film) | [Profile](https://www.instagram.com/chloe.lens.la/) | Needs narrative empathy; 16mm analog film, surf culture |
| `person_10` | Tariq Al-Mansoor | 34 | Los Angeles, CA | Sustainable Urban Planning Fellow | [Profile](https://www.linkedin.com/in/tariq-al-mansoor) | [Profile](https://www.instagram.com/tariq.explores/) | Needs cultural curiosity; culinary history, motorcycle touring |
| `person_11` | Dr. Naomi Klein-Ross | 30 | Boston, MA | Pediatric Neurologist at Children's | [Profile](https://www.linkedin.com/in/naomi-klein-ross-md) | [Profile](https://www.instagram.com/naomi.boston.walks/) | Needs high empathy; Charles River rowing, classical piano |
| `person_12` | Ethan Brooks | 29 | Boston, MA | Quantum Software Engineer at MIT QuArc | [Profile](https://www.linkedin.com/in/ethan-brooks-quantum) | [Profile](https://www.instagram.com/ethan.bouldering/) | Needs philosophical depth; bouldering, board game design |
| `person_13` | Zoe Kravitz-Wong | 27 | San Francisco, CA | Battery Hardware Lead at Redwood | [Profile](https://www.linkedin.com/in/zoe-kravitz-hardware) | [Profile](https://www.instagram.com/zoe.plants.circuits/) | Needs planetary stewardship; balcony botany, modular synths |
| `person_14` | Mateo Morales | 31 | New York, NY | Head Chef at Mirabello | [Profile](https://www.linkedin.com/in/mateo-morales-chef) | [Profile](https://www.instagram.com/mateo.cooks.ny/) | Needs sensory generosity; Hudson Valley foraging, handmade pasta |
| `person_15` | Tariq Benali | 33 | Boston, MA | Associate Professor of Neuroscience | [Profile](https://www.linkedin.com/in/tariq-benali-neuro) | [Profile](https://www.instagram.com/tariq.sails.charles/) | Needs academic balance; small-boat sailing, oud performance |
| `person_16` | Lucas Thorne | 30 | Boulder, CO | Outdoor Gear Designer at Trailcraft | [Profile](https://www.linkedin.com/in/lucas-thorne-design) | [Profile](https://www.instagram.com/lucas.trailcraft/) | Needs rugged honesty; ultralight backpack sewing, bikepacking |
| `person_17` | Lucas Silva | 32 | Chicago, IL | Senior Structural Engineer at SOM | [Profile](https://www.linkedin.com/in/lucas-silva-civil) | [Profile](https://www.instagram.com/lucas.runs.chicago/) | Needs physical grounding; marathon training, kayaking |
| `person_18` | Nora Lindqvist | 29 | Boulder, CO | Atmospheric Climate Modeler at NCAR | [Profile](https://www.linkedin.com/in/nora-lindqvist-climate) | [Profile](https://www.instagram.com/nora.flatirons.hike/) | Needs scientific curiosity; backcountry ski touring, watercolor |
| `person_19` | Camille Laurent | 29 | San Francisco, CA | Sommelier and Natural Wine Importer | [Profile](https://www.linkedin.com/in/camille-laurent-wine) | [Profile](https://www.instagram.com/camille.vin.nature/) | Needs culinary appreciation; organic vineyards, vinyl records |
| `person_20` | Ananya Sengupta | 31 | San Francisco, CA | Head of Forest Carbon Science at Pachama | [Profile](https://www.linkedin.com/in/ananya-sengupta-forest) | [Profile](https://www.instagram.com/ananya.plants.trees/) | Needs environmental passion; High Sierra backpacking, flora painting |
| `person_21` | Gabriel Martinez | 30 | San Francisco, CA | Lead Ocean Data Scientist at Saildrone | [Profile](https://www.linkedin.com/in/gabriel-martinez-geo) | [Profile](https://www.instagram.com/gabriel.surfs.ob/) | Needs ocean reverence; Ocean Beach cold-water surf, fingerstyle guitar |
| `person_22` | Helena Bergstrom | 29 | New York, NY | Senior Interior Architect at Snohetta | [Profile](https://www.linkedin.com/in/helena-bergstrom-design) | [Profile](https://www.instagram.com/helena.nordic.spaces/) | Needs biophilic design; cardamom bun baking, ocean cold plunge |
| `person_23` | Owen Mitchell | 33 | Seattle, WA | Principal Glaciologist at USGS | [Profile](https://www.linkedin.com/in/owen-mitchell-geo) | [Profile](https://www.instagram.com/owen.in.the.cascades/) | Needs alpine dedication; glacier skiing, fly fishing |
| `person_24` | Mira Sundaram | 28 | New York, NY | Curator of Literary Programs at BPL | [Profile](https://www.linkedin.com/in/mira-sundaram-curator) | [Profile](https://www.instagram.com/mira.reads.poems/) | Needs literary presence; public poetry, Bharatanatyam dance |
| `person_25` | Leo Van Der Beek | 31 | San Francisco, CA | Staff Simulation Engineer at Waymo | [Profile](https://www.linkedin.com/in/leo-vanderbeek-ai) | [Profile](https://www.instagram.com/leo.sails.thebay/) | Needs adventurous discipline; keelboat sailing, stroopwafel baking |

---

## Mathematical Compatibility Model

Compatibility rankings are computed symmetrically across all eligible pairings. The ranking algorithm ensures that a strong match requires mutual enthusiasm, preventing one-sided matches:

$$\text{Mutual Base} = 0.6 \cdot \min(S_A, S_B) + 0.4 \cdot \text{mean}(S_A, S_B)$$

$$\text{Final Score} = \operatorname{clamp}_{0}^{100}\Big(\text{Mutual Base} + \text{Bonus}_{\text{mutual meet}} - \text{Penalty}_{\text{red flags}}\Big)$$

- **Minimum Verdict Anchoring (60% Weight)**: Prevents high asymmetry; if one agent scores 90% but the other scores 50%, the base score is weighted down to reflect the lower enthusiasm.
- **Mutual Green Flag Bonus (+5 Points)**: Applied if and only if both agents independently submit `would_meet_again: true`.
- **Red Flag Penalty (-8 Points per Flag)**: Applied for fundamental lifestyle friction or schedule incompatibility identified during the date.

---

## Three-Minute Video Demonstration Script

This table outlines the presentation structure for evaluators and demonstration recordings:

| Timestamp | Phase and Target Screen | Primary On-Screen Action | Voiceover Narration |
|---|---|---|---|
| **0:00 - 0:40** | Profile Analysis Page (`/people/person_01`) | Open Elena Rostova's profile page. Hover over trait chips. Open the raw source bundle drawer. | "Modern dating swiping is broken. This is Kindred, an agentic dating platform where AI agents date on your behalf. There are exactly two sources of information for every person: their public LinkedIn and their public Instagram. Looking at Elena Rostova, her agent extracts her design leadership at Figma from LinkedIn, and her ceramics and Marin road cycling from Instagram. Every trait is accompanied by an exact citation snippet." |
| **0:40 - 1:40** | Live Date Simulation (`/dates/date_person_01_person_02`) | Navigate to the date between Elena Rostova and Marcus Vance. Click 'Play Dialogue'. Highlight friction test. Reveal verdicts. | "Now let's watch the agents actually go out and date. Elena's agent meets Marcus Vance's agent at an espresso bar. Over eight alternating turns, they discuss sprint cycles, trail running in the redwoods, and values around integrity. In the friction test beat, they probe Sunday schedules and work-life balance. When the date concludes, each agent enters a private evaluation chamber and issues confidential chemistry, values, and lifestyle scores." |
| **1:40 - 2:25** | Mutual Rankings Leaderboard (`/people/person_01/matches`) | Open Elena's match rankings. Inspect Marcus Vance at #1 with 92% score. Review lower ranks and reasons. | "Following dates across the cohort, here is Elena's personalized leaderboard. Ranked number one is Marcus Vance with a 92% mutual score. Both agents gave each other green lights, with strong alignment on creative craft and outdoor decompression. Below Marcus, you can see every other candidate ranked with transcript quotes and score breakdowns." |
| **2:25 - 3:00** | Live Intake and Showcase Hub (`/` and `/demo`) | Show the live URL intake form. Click 'Fill Sample Data'. Deploy agent. Navigate to `/demo` to show the full 25-person matrix. | "Evaluators can visit `/demo` for a zero-click experience with all 25 people and 156 simulated dates, or paste any real public LinkedIn and Instagram profile on the homepage to deploy their own dating agent in real time. 25 real people, strictly two sources, autonomous dating, and mutual rankings." |

---

## Repository Structure

The codebase is organized as follows:

```
dating-site/
|-- app/
|   |-- api/
|   |   |-- dates/
|   |   |   |-- [id]/route.ts           # Retrieve date simulation transcripts and verdicts
|   |   |   `-- route.ts                # Query dates or trigger on-demand date simulation
|   |   `-- people/
|   |       |-- [id]/
|   |       |   |-- matches/route.ts    # Compute and retrieve mutual rankings for a person
|   |       |   `-- route.ts            # Retrieve or delete individual person record
|   |       `-- route.ts                # Ingest new profile (with SSRF and rate limiting)
|   |-- dates/
|   |   |-- [id]/page.tsx               # Interactive turn-by-turn date simulation replay
|   |   `-- page.tsx                    # Chronological archive of all simulated dates
|   |-- demo/page.tsx                   # Zero-click evaluator showcase
|   |-- people/
|   |   |-- [id]/
|   |   |   |-- matches/page.tsx        # Candidate leaderboard and match rankings view
|   |   |   `-- page.tsx                # Deep profile inspector with evidence citations
|   |   `-- page.tsx                    # Sourced 25-person directory with search and filters
|   |-- globals.css                     # Tailwind CSS v4 styling and dark theme variables
|   |-- layout.tsx                      # Root shell with global navigation and security headers
|   |-- not-found.tsx                   # Custom 404 handler
|   `-- page.tsx                        # Live intake landing page with URL submission form
|-- components/
|   `-- Navbar.tsx                      # Global navigation bar with route indicators
|-- data/
|   `-- seeds.ts                        # Cohort dataset containing 25 verified real profiles
|-- lib/
|   |-- scrapers/
|   |   |-- instagram.ts                # Apify Instagram actor client with offline fallback
|   |   `-- linkedin.ts                 # Apify LinkedIn actor client with offline fallback
|   |-- analyst.ts                      # Profile Analyst engine with strict evidence bounding
|   |-- dating.ts                       # Eight-beat date simulation engine and ranking formula
|   |-- db.ts                           # In-memory store with pre-computed date matrices
|   `-- types.ts                        # Authoritative TypeScript interface contracts
|-- .env.example                        # Template for optional external API credentials
|-- .gitignore                          # Git exclusion rules
|-- eslint.config.mjs                   # ESLint flat configuration (zero errors/warnings)
|-- LICENSE                             # MIT License terms
|-- next.config.ts                      # Next.js security headers and remote image patterns
|-- package.json                        # Project dependencies and script definitions
|-- PLAYBOOK.md                         # Detailed system playbook and audit sign-off
|-- README.md                           # This industry-standard project documentation
|-- tsconfig.json                       # TypeScript compiler configuration (strict mode)
`-- tsconfig.tsbuildinfo                # Incremental compilation cache
```

---

## Prerequisites and Environment Configuration

### System Requirements

- **Node.js**: Version 18.18.0 or later (tested on Node.js v24.15.0).
- **Package Manager**: npm (v9+), pnpm, or yarn.
- **Operating System**: macOS, Linux, or Windows.

### Environment Variables

Copy the example environment template:

```bash
cp .env.example .env.local
```

The application runs in full offline demonstration mode with high-fidelity deterministic fallbacks if no keys are provided. To enable live external scraping and live LLM date simulation, configure:

```ini
# Optional: Google Gemini API Key for dynamic LLM dialogue and analysis
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Apify API Token for live Instagram and LinkedIn profile scraping
APIFY_API_TOKEN=your_apify_api_token_here
```

No API keys are committed or exposed in client bundles.

---

## Installation and Execution

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build and Execution

Create an optimized Turbopack production build and start the server:

```bash
npm run build
npm start
```

The production server starts on `http://localhost:3000`.

---

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack hot-reloading |
| `npm run build` | Compiles the production application and optimizes static/dynamic routes |
| `npm start` | Launches the compiled production server |
| `npm run lint` | Executes ESLint across all TypeScript and React files |
| `npx tsc --noEmit` | Validates TypeScript types across the entire project |

---

## API Reference

### Profile Endpoints

- `GET /api/people`: Returns a list of all profiles with public URLs and analyzed traits.
- `POST /api/people`: Ingests a new person by validating public LinkedIn and Instagram URLs, extracting traits via the Analyst Agent, saving the record, and simulating initial dates against the pool.
- `GET /api/people/:id`: Returns full details for a specific individual, including the raw source bundle.
- `DELETE /api/people/:id`: Purges a profile and cascades deletion across all associated simulated dates.
- `GET /api/people/:id/matches`: Computes and returns the sorted mutual compatibility leaderboard for the specified person.

### Date Simulation Endpoints

- `GET /api/dates`: Returns a list of simulated dates. Supports query filters `?personA=:id` and `?personB=:id`.
- `POST /api/dates`: Simulates an on-demand eight-beat date between two specified agent IDs (`personA_id`, `personB_id`) and returns the transcript and verdicts.
- `GET /api/dates/:id`: Retrieves the complete transcript, scenario, and dual private verdicts for a specific date.

---

## Security, Privacy, and Data Protection

1. **Credential Isolation**: Third-party API keys are never embedded in client code or query parameters. The codebase uses `Authorization: Bearer` and `x-goog-api-key` request headers.
2. **Server-Side Request Forgery (SSRF) Prevention**: [`app/api/people/route.ts`](app/api/people/route.ts) enforces domain whitelisting (`linkedin.com/in/*`, `instagram.com/*`) and rejects private IPv4 subnets (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), loopback addresses (`127.0.0.1`, `localhost`), and cloud metadata IP addresses (`169.254.169.254`).
3. **Rate Limiting**: Intake endpoints enforce IP-based rate limiting (5 submissions per IP per hour) to mitigate denial-of-service attempts.
4. **Latency Safeguards**: On-demand date simulation during live profile intake is capped at the top two compatible matches to avoid latency spikes and serverless timeout penalties.
5. **Content Security Policy**: [`next.config.ts`](next.config.ts) injects defense-in-depth headers including `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and strict `Permissions-Policy`.
6. **Data Minimization**: Only public profile information is ingested. Private Instagram accounts are rejected with an explicit validation error.

---

## Branching Model and Release Management

The repository maintains a clean Git workflow:

- **Active Branch**: `main` (Production release branch containing verified code).
- **Upstream Tracking**: Synchronized with `origin/main`.
- **Branch Conventions for Contributors**:
  - `feature/<description>`: New functional capabilities or integrations.
  - `fix/<issue-id>`: Defect remediations and bug fixes.
  - `chore/<task>`: Dependency updates, refactoring, or documentation improvements.
- **Merge Requirements**: All pull requests must pass TypeScript compilation (`npx tsc --noEmit`), ESLint checks (`npm run lint`), and a clean production build (`npm run build`) prior to merging.

---

## Contributing Guidelines

Contributions to Kindred are welcome. To contribute:

1. **Fork the Repository**: Create a personal fork on GitHub.
2. **Clone the Fork**:
   ```bash
   git clone https://github.com/fncreator22/agentic-dating-site.git
   cd agentic-dating-site
   ```
3. **Create a Topic Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Implement Changes**:
   - Maintain the hard Two-Source Constraint (no external data scraping beyond public LinkedIn and Instagram).
   - Ensure traits are bound to verifiable citations.
   - Adhere to the zero-emoji policy in project documentation.
5. **Verify Locally**:
   ```bash
   npx tsc --noEmit
   npm run lint
   npm run build
   ```
6. **Commit and Submit Pull Request**: Write clear, imperative commit messages and open a pull request against the `main` branch.

---

## License and Legal Notice

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file in the repository root for the complete license text.

Copyright (c) 2026 Kindred / DualAgent Contributors.

---

## Repository Links and Resources

- **GitHub Repository**: [https://github.com/fncreator22/agentic-dating-site](https://github.com/fncreator22/agentic-dating-site)
- **Detailed Architecture Playbook**: [PLAYBOOK.md](PLAYBOOK.md)
- **Issue Tracker**: [https://github.com/fncreator22/agentic-dating-site/issues](https://github.com/fncreator22/agentic-dating-site/issues)
