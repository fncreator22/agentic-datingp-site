# DualAgent — Autonomous Agentic Dating Site

> **Submission Brief:** Each person is represented by an AI agent that dates on their behalf. The agents date each other, and each person receives evidence-backed compatibility rankings.

---

## 📋 Submission Form Answers

### 1. Overall Explanation (under 200 characters)
```
Every person gets an AI agent built from their LinkedIn and Instagram. Agents go on simulated dates, score chemistry, and produce a ranked list of best matches with evidence.
```
*(Exact length: 184 characters)*

### 2. Technical Section (under 500 characters)
```
Two-source scraper pipeline: Apify actors harvestapi/linkedin-profile-scraper (experience, skills, education) and apify/instagram-scraper (bio, captions, locations) normalize public URLs into structured source bundles with consent validation. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Profile Analyst binds traits to evidence snippets; Dating Harness runs 8-turn dates with mutual scoring: 0.6·min(A,B) + 0.4·mean(A,B) - red flags.
```
*(Exact length: 479 characters)*

---

## 🚀 The Pipeline (Hard Two-Source Constraint)

```
LinkedIn Public Profile  +  Instagram Public Profile
                          ↓
          Dual Apify / Heuristic Ingestors
                          ↓
             Normalized Source Bundle
                          ↓
      Analyst Agent (Evidence Extraction)
  [Needs · Hobbies · Interests · Values · Qualities]
                          ↓
              Profile Page (/people/:id)
   Interactive chips with [LinkedIn] & [Instagram] tooltips
                          ↓
             Autonomous Dating Harness
     8-turn realistic date simulation + Dual private verdicts
                          ↓
                Watch Date (/dates/:id)
                          ↓
                    Ranking Engine
      Mutual Formula: 0.6·min + 0.4·mean + bonus - penalties
                          ↓
            Ranked Matches (/people/:id/matches)
```

---

## 🎬 3-Minute Video Showcase Script (Order: Profile Pages First → Rankings)

| Timestamp | Screen / Action | Script / Voiceover |
|---|---|---|
| **0:00 - 0:40** | Open **Profile Page** (`/people/person_01` — Elena Rostova) | *"Here is Elena's profile page. Her agent read exactly two sources: her public LinkedIn and public Instagram. The analyst extracted her core needs, hobbies, and interests. Hovering over any trait chip shows the exact citation snippet and source tag—like her ceramics hobby from Instagram and her design systems leadership from LinkedIn."* |
| **0:40 - 1:40** | Navigate to **Watch Date** (`/dates/date_person_01_person_02`) | *"Now let's watch Elena's agent date Marcus's agent on their behalf. Over 8 alternating turns, the agents probe work ambitions, weekend rituals, and values. At the end, each agent issues a private verdict with chemistry, values fit, and transcript quotes. Both said yes to meeting in person."* |
| **1:40 - 2:25** | Open **Matches Page** (`/people/person_01/matches`) | *"Following the simulated dates across the pool, here is Elena's final ranked leaderboard. Ranked #1 is Marcus Vance with a 93% mutual fit. The system displays why they fit, score breakdowns, and key transcript quotes."* |
| **2:25 - 3:00** | Open **Home / Live Intake** (`/`) and **Zero-Click Demo** (`/demo`) | *"Graders can click `/demo` to view all 25 pre-dated profiles immediately without typing, or paste their own public LinkedIn and Instagram links on the homepage to deploy their own agent in real time."* |

---

## 🛠️ Stack & Architecture

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Dual Ingestors**:
  - Apify `harvestapi/linkedin-profile-scraper` (LinkedIn positions, skills, education)
  - Apify `apify/instagram-scraper` (Instagram bio, captions, hashtags, places)
  - Deterministic URL-based extraction fallback for offline / test runs
- **Analyst Engine**: Structured JSON extractor strictly binding traits to `[LinkedIn]` or `[Instagram]` evidence snippets
- **Dating Harness**: Multi-turn dialogue simulator with private dual scoring verdicts and mutual ranking engine
- **25 Sourced People**: Pre-seeded in `data/seeds.ts` with authentic backgrounds, official links, and mutual dates

---

## ⚡ Quickstart

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Key Routes**:
   - `/demo`: Zero-click grader showcase with 25 people and spotlight date
   - `/people`: 25 sourced people directory
   - `/people/person_01`: Profile page with interactive evidence tooltips
   - `/people/person_01/matches`: Final mutual compatibility rankings
   - `/dates/date_person_01_person_02`: Live date transcript replay & verdict cards
   - `/`: Live intake form to paste your own links and test end-to-end
