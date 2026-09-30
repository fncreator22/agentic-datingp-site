export interface TraitWithEvidence {
  value: string;
  confidence: number; // 0.0 to 1.0
  source: 'linkedin' | 'instagram' | 'cross-source';
  snippet: string;
}

export interface LinkedInData {
  headline: string;
  about: string;
  positions: Array<{
    role: string;
    company: string;
    duration?: string;
    description?: string;
  }>;
  skills: string[];
  education: Array<{
    school: string;
    degree?: string;
  }>;
}

export interface InstagramData {
  bio: string;
  postsCount?: number;
  followersCount?: number;
  captions: string[];
  hashtags: string[];
  locations: string[];
}

export interface SelfDeclaredData {
  gender: string;
  seeking: string;
  age_range?: string;
  city: string;
  relationship_goal: string;
}

export interface SourceBundle {
  linkedin: LinkedInData;
  instagram: InstagramData;
  self_declared: SelfDeclaredData;
}

export interface ProfileAnalysis {
  summary: string;
  needs: TraitWithEvidence[];
  hobbies: TraitWithEvidence[];
  interests: TraitWithEvidence[];
  values: TraitWithEvidence[];
  communication_style: TraitWithEvidence;
  lifestyle: TraitWithEvidence;
  ambitions: TraitWithEvidence;
  deal_breakers: string[];
  conversation_hooks: string[];
}

export interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  avatar: string;
  gender: 'man' | 'woman' | 'non-binary';
  seeking: 'man' | 'woman' | 'everyone';
  relationship_goal: string;
  linkedin_url: string;
  instagram_url: string;
  is_synthetic: boolean;
  consent_at: string;
  source_bundle: SourceBundle;
  analysis?: ProfileAnalysis;
  created_at: string;
}

export interface DateTurn {
  speakerId: string;
  speakerName: string;
  text: string;
  topic: string; // e.g. "Icebreaker", "Ambitions", "Hobbies", "Values", "Friction", "Future", "Playful", "Wrap-up"
}

export interface DateVerdict {
  fromId: string;
  toId: string;
  score: number; // 0 - 100
  chemistry: number; // 0 - 100
  values_fit: number; // 0 - 100
  lifestyle_fit: number; // 0 - 100
  would_meet_again: boolean;
  reasons: string[];
  red_flags: string[];
}

export interface DateSimulation {
  id: string;
  personA_id: string;
  personB_id: string;
  personA_name: string;
  personB_name: string;
  personA_avatar: string;
  personB_avatar: string;
  scenario: string;
  turns: DateTurn[];
  verdicts: {
    [personId: string]: DateVerdict;
  };
  created_at: string;
}

export interface MatchRanking {
  personId: string;
  candidateId: string;
  candidateName: string;
  candidateAvatar: string;
  candidateCity: string;
  candidateHeadline: string;
  final_score: number;
  rank: number;
  dateId: string;
  bothWouldMeet: boolean;
  scoreA: number;
  scoreB: number;
  mutualScore: number;
  topReasons: string[];
  redFlags: string[];
  bestExcerpt: string;
}
