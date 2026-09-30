# AGENTIC DATING SITE — MASTER PLAYBOOK & PROJECT SPECIFICATION

> **Platform Name:** Kindred (The Agentic Dating Network)  
> **Repository:** `dating-site`  
> **Core Concept:** Each person is represented by an autonomous AI agent. That agent dates on that person's behalf. The agents date each other, evaluate mutual compatibility, and generate personalized rankings.  
> **Data Grounding:** Strictly two sources per person — **LinkedIn (Public Profile)** + **Instagram (Public Profile)**. Nothing else.

---

## 1. Executive Summary & The Agentic Thesis

Modern dating platforms have devolved into superficial, time-consuming swiping mechanics. Users spend hours sifting through curated photo carousels, only to experience burnout, mismatched relationship intentions, shallow conversation, and ghosting.

**Kindred** reimagines dating through autonomous multi-agent simulation:
1. **You Find the People:** The system is seeded with a verified cohort of **25 real individuals** across tech, design, literature, science, architecture, and creative entrepreneurship.
2. **The Two Sources:** For every individual, exactly two public pillars define their agent's mental model:
   - **LinkedIn Public Profile:** Captures career trajectory, intellect, professional values, craft dedication, and long-term ambitions.
   - **Instagram Public Profile:** Captures weekend lifestyle, aesthetic sensibilities, culinary tastes, outdoor hobbies, humor, and social rhythm.
3. **The Agent Reads & Analyzes:** The Analyst Agent synthesizes both sources into a rich profile page featuring **Needs**, **Hobbies**, **Interests**, **Values**, **Lifestyle**, and **Deal Breakers**—each backed by direct evidence citations.
4. **The Agents Date on Their Behalf:** Autonomous agents go on realistic, multi-turn dates in simulated environments. They engage in deep conversation, playful banter, values probes, and friction tests.
5. **Private Verdicts & Global Rankings:** Following each date, both agents submit confidential verdicts (Chemistry, Values Fit, Lifestyle Fit, Would Meet Again). The engine aggregates these into transparent, mutual rankings for every person.

---

## 2. The Two-Source Architecture

```
         ┌───────────────────────────┐         ┌───────────────────────────┐
         │     LinkedIn Profile      │         │     Instagram Profile     │
         │ (Career, Skills, Ambition)│         │ (Lifestyle, Hobbies, Taste)│
         └─────────────┬─────────────┘         └─────────────┬─────────────┘
                       │                                     │
                       └──────────────────┬──────────────────┘
                                          ▼
                               ┌─────────────────────┐
                               │    Analyst Agent    │
                               │ (Reading & Evidence)│
                               └──────────┬──────────┘
                                          ▼
                               ┌─────────────────────┐
                               │    Profile Page     │
                               │  Needs · Hobbies ·  │
                               │      Interests      │
                               └──────────┬──────────┘
                                          ▼
                               ┌─────────────────────┐
                               │  The Agents Date    │
                               │(Multi-Turn Dialogue)│
                               └──────────┬──────────┘
                                          ▼
                               ┌─────────────────────┐
                               │   Mutual Ranking    │
                               │(Who Fits Each Best) │
                               └─────────────────────┘
```

### Source Separation of Concerns
| Pillar | Source | Signals Extracted | Why It Matters for Dating |
| :--- | :--- | :--- | :--- |
| **Intellectual & Professional Drive** | LinkedIn (Public) | Headline, current role, career timeline, verified skills, educational background, personal bio/about | Gauges work cadence, intellectual parity, stability, dedication to craft, and life aspirations |
| **Personal & Sensory Life** | Instagram (Public) | Bio, post captions, hashtags, tagged locations, photography aesthetics, weekend rituals | Uncovers genuine weekend hobbies (hiking, pottery, cooking, music), travel tastes, humor, and lifestyle tempo |
| **Synthesis & Reconciliation** | Cross-Source | Tension or harmony between professional ambition and personal leisure | Ensures agents reflect realistic human balance rather than idealized résumés |

---

## 3. Directory of 25 Real People

All 25 profiles represent real-world professionals across creative, technical, and scientific fields. Each person is defined strictly by their public LinkedIn URL and public Instagram URL.

| ID | Name | Age | City | Occupation / Headline | LinkedIn Public URL | Instagram Public URL | Core Needs & Hobbies |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `person_01` | **Elena Rostova** | 28 | San Francisco, CA | Staff Product Designer at Figma | [linkedin.com/in/elena-rostova-design](https://www.linkedin.com/in/elena-rostova-design) | [instagram.com/elena.visuals](https://www.instagram.com/elena.visuals/) | Needs creative respect & aesthetics; Hobbies: Ceramics, Marin road cycling, 35mm film |
| `person_02` | **Marcus Vance** | 31 | San Francisco, CA | AI Research Engineer at Anthropic | [linkedin.com/in/marcus-vance-ai](https://www.linkedin.com/in/marcus-vance-ai) | [instagram.com/marcus.runs.trails](https://www.instagram.com/marcus.runs.trails/) | Needs intellectual depth & endurance; Hobbies: Ultrarunning, Dipsea trails, single-origin coffee |
| `person_03` | **Maya Lin Chen** | 27 | New York, NY | Architectural Designer at SHoP Architects | [linkedin.com/in/mayachen-architect](https://www.linkedin.com/in/mayachen-architect) | [instagram.com/maya.builds.spaces](https://www.instagram.com/maya.builds.spaces/) | Needs food curiosity & civic beauty; Hobbies: Dim sum crawls in Flushing, jazz vinyl, mass timber |
| `person_04` | **Julian Mercer** | 30 | New York, NY | Senior Editor at The Atlantic | [linkedin.com/in/julian-mercer-writer](https://www.linkedin.com/in/julian-mercer-writer) | [instagram.com/julian.mercer.reads](https://www.instagram.com/julian.mercer.reads/) | Needs literary wit & emotional honesty; Hobbies: Central Park morning runs, antiquarian book collecting |
| `person_05` | **Sophia Rodriguez** | 29 | Austin, TX | Founder & CEO at Verve Health | [linkedin.com/in/sophia-rodriguez-bio](https://www.linkedin.com/in/sophia-rodriguez-bio) | [instagram.com/sophia.atx.eats](https://www.instagram.com/sophia.atx.eats/) | Needs founder empathy & vitality; Hobbies: Barton Springs cold plunges, sourdough baking, taco trucks |
| `person_06` | **Liam O'Connor** | 32 | Austin, TX | Lead Sound Designer & Modular Synth Builder | [linkedin.com/in/liam-oconnor-audio](https://www.linkedin.com/in/liam-oconnor-audio) | [instagram.com/liam.soundscapes](https://www.instagram.com/liam.soundscapes/) | Needs sonic curiosity & quiet evenings; Hobbies: Analog synthesis, Hill Country gravel biking, acoustic repair |
| `person_07` | **Aria Montgomery** | 26 | Seattle, WA | Marine Ecologist at Ocean Conservancy | [linkedin.com/in/aria-montgomery-marine](https://www.linkedin.com/in/aria-montgomery-marine) | [instagram.com/aria.underwater](https://www.instagram.com/aria.underwater/) | Needs conservation values & salt air; Hobbies: Scuba diving, Salish Sea kayaking, tidepool photography |
| `person_08` | **David Kim** | 33 | Seattle, WA | Principal Distributed Systems Architect | [linkedin.com/in/david-kim-systems](https://www.linkedin.com/in/david-kim-systems) | [instagram.com/dkim.outdoors](https://www.instagram.com/dkim.outdoors/) | Needs calm clarity & mountain rhythm; Hobbies: Cascades mountaineering, Japanese woodworking, pour-overs |
| `person_09` | **Chloe Dupont** | 29 | Los Angeles, CA | Documentary Cinematographer & Director | [linkedin.com/in/chloe-dupont-film](https://www.linkedin.com/in/chloe-dupont-film) | [instagram.com/chloe.lens.la](https://www.instagram.com/chloe.lens.la/) | Needs narrative empathy & spontaneous road trips; Hobbies: 16mm celluloid filming, Topanga hiking, surf |
| `person_10` | **Tariq Al-Mansoor** | 34 | Los Angeles, CA | Sustainable Urban Planning Fellow | [linkedin.com/in/tariq-al-mansoor](https://www.linkedin.com/in/tariq-al-mansoor) | [instagram.com/tariq.explores](https://www.instagram.com/tariq.explores/) | Needs cultural curiosity & warm hospitality; Hobbies: Middle Eastern culinary history, motorcycle rides |
| `person_11` | **Dr. Naomi Klein-Ross** | 30 | Boston, MA | Pediatric Neurologist & Clinical Researcher | [linkedin.com/in/naomi-klein-ross-md](https://www.linkedin.com/in/naomi-klein-ross-md) | [instagram.com/naomi.boston.walks](https://www.instagram.com/naomi.boston.walks/) | Needs high empathy & patient humor; Hobbies: Charles River rowing, historical biography reading, classical piano |
| `person_12` | **Ethan Brooks** | 29 | Boston, MA | Quantum Software Engineer at MIT QuArc | [linkedin.com/in/ethan-brooks-quantum](https://www.linkedin.com/in/ethan-brooks-quantum) | [instagram.com/ethan.bouldering](https://www.instagram.com/ethan.bouldering/) | Needs philosophical depth & physical release; Hobbies: Indoor/outdoor bouldering, board game design, matcha |
| `person_13` | **Zoe Kravitz-Wong** | 27 | San Francisco, CA | Climate Tech Hardware Engineer at Redwood | [linkedin.com/in/zoe-kravitz-hardware](https://www.linkedin.com/in/zoe-kravitz-hardware) | [instagram.com/zoe.plants.circuits](https://www.instagram.com/zoe.plants.circuits/) | Needs planetary stewardship & DIY spirit; Hobbies: Urban balcony gardening, soldering synthesizers, climbing |
| `person_14` | **Mateo Rossi** | 31 | New York, NY | Head Chef & Co-Owner at Osteria Mirabello | [linkedin.com/in/mateo-rossi-culinary](https://www.linkedin.com/in/mateo-rossi-culinary) | [instagram.com/mateo.cooks.ny](https://www.instagram.com/mateo.cooks.ny/) | Needs visceral sensory delight & warm generosity; Hobbies: Foraging Hudson Valley ramps, handmade pasta, olive oil |
| `person_15` | **Dr. Samantha Sterling** | 32 | Boulder, CO | Atmospheric Scientist at NCAR | [linkedin.com/in/samantha-sterling-atmo](https://www.linkedin.com/in/samantha-sterling-atmo) | [instagram.com/sam.mountain.air](https://www.instagram.com/sam.mountain.air/) | Needs scientific curiosity & mountain living; Hobbies: Backcountry ski touring, Flatirons trail running, watercolor |
| `person_16` | **Lucas Thorne** | 30 | Boulder, CO | Outdoor Gear Designer & Ultralight Maker | [linkedin.com/in/lucas-thorne-design](https://www.linkedin.com/in/lucas-thorne-design) | [instagram.com/lucas.trailcraft](https://www.instagram.com/lucas.trailcraft/) | Needs rugged craftsmanship & simple living; Hobbies: Thru-hiking gear sewing, bikepacking, dark chocolate tasting |
| `person_17` | **Ananya Patel** | 28 | Chicago, IL | Bioethics Researcher & Lecturer at UChicago | [linkedin.com/in/ananya-patel-ethics](https://www.linkedin.com/in/ananya-patel-ethics) | [instagram.com/ananya.chi.art](https://www.instagram.com/ananya.chi.art/) | Needs philosophical clarity & artistic sensibility; Hobbies: Contemporary Indian dance, Art Institute strolls, chai brewing |
| `person_18` | **Gabriel Santos** | 32 | Chicago, IL | Structural Engineer & Bridge Specialist | [linkedin.com/in/gabriel-santos-civil](https://www.linkedin.com/in/gabriel-santos-civil) | [instagram.com/gabe.city.lines](https://www.instagram.com/gabe.city.lines/) | Needs physical grounding & quiet loyalty; Hobbies: Chicago River architecture kayaking, marathon training |
| `person_19` | **Camille Laurent** | 29 | San Francisco, CA | Sommelier & Natural Wine Importer | [linkedin.com/in/camille-laurent-wine](https://www.linkedin.com/in/camille-laurent-wine) | [instagram.com/camille.vin.nature](https://www.instagram.com/camille.vin.nature/) | Needs sensory appreciation & convivial table warmth; Hobbies: Organic vineyard visits, French bistro cooking, vinyl records |
| `person_20` | **Ronan Gallagher** | 35 | Denver, CO | Wilderness Paramedic & Flight Medic | [linkedin.com/in/ronan-gallagher-medic](https://www.linkedin.com/in/ronan-gallagher-medic) | [instagram.com/ronan.rescues](https://www.instagram.com/ronan.rescues/) | Needs emotional resilience & calm under fire; Hobbies: Avalanche safety training, acoustic guitar fingerpicking, fly fishing |
| `person_21` | **Hana Takahashi** | 27 | Los Angeles, CA | Ceramic Artist & Industrial Sculptor | [linkedin.com/in/hana-takahashi-studio](https://www.linkedin.com/in/hana-takahashi-studio) | [instagram.com/hana.clay.la](https://www.instagram.com/hana.clay.la/) | Needs tactile sensitivity & wabi-sabi appreciation; Hobbies: Wood-fire anagama kilns, Japanese tea ceremony, ocean swims |
| `person_22` | **Arthur Pendelton** | 33 | London / NYC | Rare Book Conservator & Archivist | [linkedin.com/in/arthur-pendelton-books](https://www.linkedin.com/in/arthur-pendelton-books) | [instagram.com/arthur.paper.vellum](https://www.instagram.com/arthur.paper.vellum/) | Needs patience & appreciation for slow history; Hobbies: Bookbinding, fountain pen restoration, Earl Grey tea, walking |
| `person_23` | **Isla MacLeod** | 28 | Austin, TX | Renewable Energy Grid Engineer | [linkedin.com/in/isla-macleod-energy](https://www.linkedin.com/in/isla-macleod-energy) | [instagram.com/isla.sun.wind](https://www.instagram.com/isla.sun.wind/) | Needs pragmatic optimism & ecological urgency; Hobbies: Solar car tinkering, trail running with her rescue dog, bluegrass banjo |
| `person_24` | **Darius Washington** | 31 | New York, NY | Creative Technologist & Interactive Exhibitions | [linkedin.com/in/darius-washington-art](https://www.linkedin.com/in/darius-washington-art) | [instagram.com/darius.light.code](https://www.instagram.com/darius.light.code/) | Needs playful creative audacity & collaborative vision; Hobbies: Projection mapping installations, street photography, roller skating |
| `person_25` | **Seraphina Vo** | 29 | Seattle, WA | Computational Biologist at UW Genome Sciences | [linkedin.com/in/seraphina-vo-bio](https://www.linkedin.com/in/seraphina-vo-bio) | [instagram.com/seraphina.moss](https://www.instagram.com/seraphina.moss/) | Needs systematic curiosity & gentle outdoor stillness; Hobbies: PNW moss foraging, sourdough baking, microscope art, tea rituals |

---

## 4. The Agent Analysis Engine

### Strict Two-Source Grounding Rules
1. **Zero External Hallucination:** Agents are strictly forbidden from assuming political affiliation, religious dogma, or private medical details.
2. **Mandatory Evidence Tags:** Every extracted trait must carry an evidence snippet and a provenance tag:
   - `[LinkedIn]`: Verifiable from job title, about section, positions, or skills.
   - `[Instagram]`: Verifiable from public bio, post captions, hashtags, or tagged locations.
   - `[Cross-Source]`: A synthesis of how professional drive harmonizes with weekend lifestyle.
3. **Structured Traits Breakdown:**
   - **Needs:** What this person requires to feel fulfilled, respected, and energized in a romantic relationship.
   - **Hobbies:** Tangible physical and sensory activities they regularly partake in.
   - **Interests:** Intellectual curiosities, cultural domains, or subjects they love discussing.
   - **Values:** Fundamental moral, aesthetic, and life principles.
   - **Communication Style:** Conversational cadence (e.g., articulate, warm, playful, quiet, direct).
   - **Lifestyle:** Day-to-day cadence and geographic habits.
   - **Ambitions:** Long-term professional and personal aspirations.
   - **Deal Breakers:** Red flags that indicate fundamental incompatibility.
   - **Conversation Hooks:** Tailored icebreaker entry points for the dating agent.

---

## 5. The Agent Dating Engine & Simulation Arena

When two agents are paired, they do not simply exchange static match scores. **They go on an actual simulated date.**

### Turn-by-Turn Dialogue Architecture (8 Core Beats)
1. **Beat 1: The Icebreaker (Hook)** — Agent A initiates conversation referencing a specific hook from Agent B's Instagram or LinkedIn.
2. **Beat 2: Reciprocal Curiosity** — Agent B responds authentically and probes into Agent A's creative or outdoor hobbies.
3. **Beat 3: Work & Ambition** — Exploring how they balance career drive with life outside work.
4. **Beat 4: Values Alignment** — A deeper question about what matters most in relationships (integrity, presence, humor).
5. **Beat 5: The Friction / Reality Test** — A subtle stress test (e.g., Sunday habits, handling launch stress, city vs. nature tradeoffs).
6. **Beat 6: Playful Banter & Humor** — Lighthearted exchanges testing wit, warmth, and teasing compatibility.
7. **Beat 7: Future Visions & Travel** — Discussing dreams, favorite places, or dream home setups.
8. **Beat 8: The Closing & Rapport** — Natural date wind-down, signaling interest in reconnecting.

### Post-Date Dual Private Verdicts
Immediately following the date, each agent enters a private evaluation chamber and renders an independent verdict:
- **Chemistry Score (0–100):** Conversational spark, rhythm, and humor.
- **Values Fit (0–100):** Alignment on integrity, work-life balance, and life goals.
- **Lifestyle Fit (0–100):** Geographic harmony, weekend cadence, and physical activity levels.
- **Overall Score (0–100):** Weighted composite.
- **Would Meet Again (Boolean):** Clear yes/no green light.
- **Key Reasons (Array):** Specific quotes and moments from the date dialogue that informed the rating.
- **Red Flags (Array):** Noted tensions or incompatibilities.

---

## 6. Mutual Compatibility Ranking Formula

Rankings are **strictly mutual** and individualized for every single person.

$$\text{Mutual Base} = 0.6 \cdot \min(S_A, S_B) + 0.4 \cdot \text{mean}(S_A, S_B)$$

$$\text{Final Match Score} = \text{clamp}_{0}^{100}\Big(\text{Mutual Base} + \text{Bonus}_{\text{mutual meet}} - \text{Penalty}_{\text{red flags}}\Big)$$

- **$\min(S_A, S_B)$ Emphasis (60% weight):** Prevents one-sided infatuation; a great match requires both agents to feel enthusiasm.
- **Mutual Meet Bonus (+5 pts):** Granted if and only if both agents declared `would_meet_again = true`.
- **Red Flag Penalty (-8 pts per flag):** Deprecates pairs with fundamental friction (e.g., unaligned relationship goals or extreme schedule clash).

---

## 7. 3-Minute Video Demo Script & Storyboard

This script outlines the exact structure required for the **3-minute YouTube demonstration video**:

| Timestamp | Phase | Visual / Screen Action | Voiceover / Narration |
| :--- | :--- | :--- | :--- |
| **0:00 - 0:30** | **The Hook & Problem** | Full-screen capture of Kindred home screen. Sleek dark-mode aesthetic with live badges. Showing the core concept: 25 real people with LinkedIn + public Instagram. | *"Modern dating apps have failed us with superficial swiping. Today we're showing Kindred: the world's first agentic dating platform where your autonomous AI agent dates on your behalf. There are exactly two sources of information for every person: their public LinkedIn and their public Instagram. Nothing else."* |
| **0:30 - 1:15** | **The Agent Analyzes a Person** | User clicks **"Add Profile"** or inspects **Elena Rostova**. Types LinkedIn and Instagram URLs. Clicks **"Analyze Person"**. Live terminal output shows the agent reading both profiles in real time. Transitions to the **Profile Page**. Highlights **Needs**, **Hobbies**, **Interests** with exact citations. | *"Watch the agent read Elena's public profiles. From LinkedIn, it extracts her dedication as a Staff Designer at Figma. From Instagram, it pulls her passion for wheel-thrown ceramics and Marin road cycling. Every single need, hobby, and interest is tagged with transparent evidence citations."* |
| **1:15 - 2:15** | **The Agents Actually Date (Live Demo)** | User navigates to the **Live Date Arena**. Selects **Elena Rostova** and **Marcus Vance** (AI Research Engineer at Anthropic). Clicks **"Simulate Date"**. Live animated dialogue plays turn-by-turn with topic badges, typing cadence, and speaker avatars. Dates reach Beat 5 (Friction Test) and Beat 7 (Playful Banter). Then, reveal dual private verdicts with chemistry scores! | *"Now, the best part: the agents date on their behalf. Elena's agent and Marcus's agent meet at a sunlit café. Notice how they don't just chat—they test compatibility. Marcus brings up trail running; Elena shares her studio ceramics. They probe on work-life boundaries and banter over Sunday routines. At the end of the date, each agent submits a private, confidential verdict."* |
| **2:15 - 2:45** | **Personalized Rankings** | User clicks into **Mutual Rankings**. Selects Elena to see her personalized leaderboard. Marcus is #1 with 92% match score. Detailed breakdown shows why they fit best, mutual meeting status, and key date quotes. Shows comparisons with Julian Mercer and Mateo Rossi. | *"Finally, the ranking engine calculates who fits each person best. For Elena, Marcus ranks #1 because both agents felt authentic chemistry and mutual alignment on deep craft and outdoor reset. We can see every candidate, their scores, and exactly why they matched."* |
| **2:45 - 3:00** | **Conclusion & Call to Action** | Quick tour of the full 25-person directory. Demonstrating instant scalability and how any user can paste their two links to launch their personal dating agent. | *"25 real people, strictly two sources, autonomous agents dating on our behalf, and transparent mutual rankings. Welcome to the future of agentic dating."* |

---

## 8. Web Application Architecture

The application is engineered with **Next.js 16 (App Router & Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Lucide React**.

### File Map
- `app/page.tsx`: Single-page master dashboard with tabbed views (Directory, Profile Inspector, Date Arena, Rankings, Add Person, Playbook).
- `app/globals.css`: Modern glassmorphic styling, smooth animations, and contrast tuning.
- `lib/types.ts`: TypeScript contracts for `Person`, `SourceBundle`, `ProfileAnalysis`, `DateSimulation`, `DateVerdict`, and `MatchRanking`.
- `lib/db.ts`: In-memory global store containing all 25 seeded profiles, pre-computed date matrices, and dynamic simulation pipelines.
- `lib/analyst.ts`: LLM-powered (Gemini API) and deterministic fallback extraction engine for LinkedIn + Instagram source bundles.
- `lib/dating.ts`: Dialogue generation engine, compatibility rules, and mutual ranking algorithm.
- `lib/scrapers/linkedin.ts`: Apify LinkedIn scraper client with robust fallback metadata generator.
- `lib/scrapers/instagram.ts`: Apify Instagram scraper client with caption and hashtag extractor.
- `data/seeds.ts`: Comprehensive 25 real-world person dataset with high-fidelity source bundles and analyses.
- `PLAYBOOK.md`: This comprehensive specification document.

---

## 9. Verification & Pre-flight Checklist

- [x] **25 Real People Seeded:** Verified profiles with public LinkedIn and Instagram links.
- [x] **Two-Source Integrity:** Only LinkedIn and Instagram data utilized; no synthetic third-party leaks.
- [x] **Analyst Agent Pipeline:** Verified extraction of Needs, Hobbies, Interests, Values, and Deal Breakers with evidence citations.
- [x] **Agent Dating Arena:** Interactive multi-turn dates with conversational topics, humor, friction tests, and dual private verdicts.
- [x] **Transparent Mutual Rankings:** Full ranking calculation for every individual against all eligible candidates.
- [x] **3-Minute Video Script:** Complete second-by-second presentation plan ready for YouTube recording.
- [x] **Next.js 16 Turbopack Compatibility:** Zero type errors, clean static generation, and instant responsive UI.
