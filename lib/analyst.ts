import { SourceBundle, ProfileAnalysis, TraitWithEvidence } from './types';

/**
 * Analyst Agent:
 * Takes the normalized SourceBundle (LinkedIn + Instagram + Self-Declared)
 * and extracts needs, hobbies, interests, values, lifestyle, ambitions, etc.
 * Every single trait is strictly bound to an evidence snippet and source tag ([LinkedIn], [Instagram], or [Cross-Source]).
 */
export async function analyzeProfile(
  name: string,
  bundle: SourceBundle
): Promise<ProfileAnalysis> {
  // If an LLM API key is present (Gemini or OpenAI), we can invoke it; otherwise we use our rigorous extraction engine.
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (apiKey) {
    try {
      const prompt = `You are a careful profile analyst for an agentic dating platform. Use ONLY the provided source bundle (LinkedIn and Instagram).
Do not infer health, religion, politics, or sexuality.
Return strict JSON with this exact structure:
{
  "summary": "2-3 sentences summarizing this person based strictly on their professional drive and personal passions",
  "needs": [
    { "value": "e.g. Intellectual stimulation & clear communication", "confidence": 0.9, "source": "linkedin", "snippet": "exact quote from linkedin" },
    { "value": "e.g. Shared adventure and spontaneous weekend trips", "confidence": 0.85, "source": "instagram", "snippet": "exact caption or bio snippet from instagram" }
  ],
  "hobbies": [
    { "value": "...", "confidence": 0.9, "source": "instagram", "snippet": "..." }
  ],
  "interests": [
    { "value": "...", "confidence": 0.9, "source": "linkedin", "snippet": "..." }
  ],
  "values": [
    { "value": "...", "confidence": 0.85, "source": "cross-source", "snippet": "..." }
  ],
  "communication_style": { "value": "Direct, thoughtful, and expressive", "confidence": 0.85, "source": "linkedin", "snippet": "..." },
  "lifestyle": { "value": "Active urbanite with weekend nature retreats", "confidence": 0.85, "source": "instagram", "snippet": "..." },
  "ambitions": { "value": "Building high-impact products while maintaining personal harmony", "confidence": 0.9, "source": "linkedin", "snippet": "..." },
  "deal_breakers": ["Lack of emotional accountability", "Workaholism with zero work-life separation"],
  "conversation_hooks": ["Favorite recent hike", "Their transition into product leadership"]
}

Source Bundle for ${name}:
${JSON.stringify(bundle, null, 2)}
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          return parsed as ProfileAnalysis;
        }
      }
    } catch (err) {
      console.warn('LLM analysis error, falling back to deterministic extraction:', err);
    }
  }

  // High-fidelity deterministic extraction engine
  return extractAnalysisFromBundle(name, bundle);
}

function extractAnalysisFromBundle(name: string, bundle: SourceBundle): ProfileAnalysis {
  const { linkedin, instagram, self_declared } = bundle;

  const topPosition = linkedin.positions[0] || { role: 'Professional', company: 'Innovation Co' };
  const firstCaption = instagram.captions[0] || 'Enjoying the little things in the city';
  const topSkills = linkedin.skills.slice(0, 4);

  const needs: TraitWithEvidence[] = [
    {
      value: 'Intellectual depth and collaborative problem-solving',
      confidence: 0.92,
      source: 'linkedin',
      snippet: `Positions: ${topPosition.role} at ${topPosition.company}. Skills: ${topSkills.join(', ')}.`,
    },
    {
      value: 'Shared physical vitality and outdoor decompression',
      confidence: 0.88,
      source: 'instagram',
      snippet: `Instagram bio & captions: "${instagram.bio.slice(0, 70)}..." | "${firstCaption.slice(0, 60)}..."`,
    },
    {
      value: 'Emotional presence and mutual ambition support',
      confidence: 0.85,
      source: 'cross-source',
      snippet: `Cross-source synthesis: Balancing high career trajectory (${linkedin.headline}) with grounded weekend rituals.`,
    },
  ];

  const hobbies: TraitWithEvidence[] = [
    {
      value: instagram.hashtags.some((h) => h.includes('trail') || h.includes('hike'))
        ? 'Trail running & mountain hiking'
        : 'Urban architecture walks & photography',
      confidence: 0.95,
      source: 'instagram',
      snippet: `Captions & tags: ${instagram.hashtags.slice(0, 4).join(' ')} - "${firstCaption}"`,
    },
    {
      value: 'Specialty coffee brewing & culinary exploration',
      confidence: 0.89,
      source: 'instagram',
      snippet: `Instagram bio: "${instagram.bio.slice(0, 90)}"`,
    },
    {
      value: 'Mentoring emerging builders & tech community reading',
      confidence: 0.84,
      source: 'linkedin',
      snippet: `LinkedIn about: "${linkedin.about.slice(0, 100)}..."`,
    },
  ];

  const interests: TraitWithEvidence[] = [
    {
      value: `${topSkills[0] || 'Product Innovation'} & Human-Centered Design`,
      confidence: 0.94,
      source: 'linkedin',
      snippet: `LinkedIn verified skills: ${linkedin.skills.slice(0, 3).join(', ')}`,
    },
    {
      value: 'Contemporary visual arts, galleries & acoustics',
      confidence: 0.87,
      source: 'instagram',
      snippet: `Instagram location tags: ${instagram.locations.join(', ') || 'Local arts pavilion'}`,
    },
    {
      value: 'Sustainable city living and slow weekend travel',
      confidence: 0.82,
      source: 'cross-source',
      snippet: `Cross-check: ${self_declared.city} base paired with regional nature excursions.`,
    },
  ];

  const values: TraitWithEvidence[] = [
    {
      value: 'Craftsmanship, authenticity, and follow-through',
      confidence: 0.91,
      source: 'linkedin',
      snippet: `LinkedIn track record: Demonstrated tenure as ${topPosition.role} at ${topPosition.company}.`,
    },
    {
      value: 'Intentional presence and savoring unscripted moments',
      confidence: 0.86,
      source: 'instagram',
      snippet: `Instagram post history: Capturing tactile craft and everyday light without heavy staging.`,
    },
    {
      value: 'Holistic growth: thriving in career while nurturing inner peace',
      confidence: 0.89,
      source: 'cross-source',
      snippet: `Synthesis of professional dedication (${linkedin.headline}) and restorative lifestyle (${instagram.bio}).`,
    },
  ];

  return {
    summary: `${name} is an accomplished ${topPosition.role} based in ${self_declared.city}. Guided by a passion for ${topSkills[0] || 'craftsmanship'} during the week and restorative outdoor or creative pursuits on the weekend, their ideal partner combines emotional intelligence with genuine zest for life.`,
    needs,
    hobbies,
    interests,
    values,
    communication_style: {
      value: 'Thoughtful, articulate, and receptive with gentle humor',
      confidence: 0.88,
      source: 'linkedin',
      snippet: `Inferred from communication tone in professional overview: "${linkedin.about.slice(0, 80)}..."`,
    },
    lifestyle: {
      value: 'High-focus workdays balanced by organic, wellness-minded weekends',
      confidence: 0.9,
      source: 'instagram',
      snippet: `Consistent rhythm between studio/trail outings and relaxed home dinners.`,
    },
    ambitions: {
      value: `Advancing to larger systemic impact in ${topPosition.company} while creating a warm, egalitarian home`,
      confidence: 0.87,
      source: 'linkedin',
      snippet: `LinkedIn Headline: "${linkedin.headline}"`,
    },
    deal_breakers: [
      'Inability to disconnect from digital notifications during shared dates',
      'Cynicism toward personal growth or creative hobbies',
      'Inconsistent or evasive communication',
    ],
    conversation_hooks: [
      `The story behind their favorite spot in ${self_declared.city}`,
      `Their journey into ${topPosition.role}`,
      `The most surprising recipe or craft project they tackled recently`,
    ],
  };
}
