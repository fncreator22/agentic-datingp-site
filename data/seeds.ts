import { Person } from '@/lib/types';

export const SEEDED_PEOPLE: Person[] = [
  {
    "id": "person_01",
    "name": "Elena Verna",
    "age": 36,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Committed partnership with an ambitious builder and outdoor adventurer",
    "linkedin_url": "https://www.linkedin.com/in/elenaverna/",
    "instagram_url": "https://www.instagram.com/elenaverna/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Head of Growth at Lovable | Growth Advisor & Board Member",
        "about": "Product-Led Growth executive and advisor. Passionate about empowering high-velocity SaaS teams with AI. Previously Head of Growth at Amplitude, Miro, Dropbox, and SurveyMonkey.",
        "positions": [
          {
            "role": "Head of Growth",
            "company": "Lovable",
            "duration": "2024 - Present",
            "description": "Driving global self-serve adoption and viral developer engagement."
          },
          {
            "role": "Interim Head of Growth",
            "company": "Dropbox",
            "duration": "2023 - 2024",
            "description": "Spearheaded self-serve monetization and PLG acceleration."
          },
          {
            "role": "Growth Advisor",
            "company": "Miro",
            "duration": "2020 - 2023",
            "description": "Advised executive team on product-led flywheel expansion."
          }
        ],
        "skills": [
          "Product-Led Growth",
          "SaaS Monetization",
          "Data Analytics",
          "Executive Mentorship",
          "AI Strategy"
        ],
        "education": [
          {
            "school": "UC Berkeley",
            "degree": "BS in Statistics"
          }
        ]
      },
      "instagram": {
        "bio": "B2B SaaS Growth · Mom of 2 · Trail runner & wine enthusiast · SF & Bay Area 🏃‍♀️🍷",
        "postsCount": 312,
        "followersCount": 14200,
        "captions": [
          "Sunrise trail run across Mount Tamalpais ridge. Nothing resets perspective like cool coastal mist and mountain air 🌄🌲",
          "Keynote at SaaSOpen: the future of software development is intuitive and product-driven ✨🎤",
          "Saturday family dinner: homemade pasta, natural wine, and deep conversation around the kitchen counter 🍝🍷"
        ],
        "hashtags": [
          "#trailrunning",
          "#saasgrowth",
          "#bayareahikes",
          "#weekendrituals"
        ],
        "locations": [
          "Mount Tamalpais",
          "Mission District, SF",
          "Napa Valley"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "age_range": "32-44",
        "city": "San Francisco, CA",
        "relationship_goal": "Long-term partnership with mutual ambition and grounding warmth"
      }
    },
    "analysis": {
      "summary": "Elena is a premier B2B SaaS growth leader and advisor based in San Francisco, pairing high-impact intellectual drive with a grounded weekend life centered on trail running, family pasta nights, and natural wine.",
      "needs": [
        {
          "value": "Intellectual parity and shared drive for high-impact innovation",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Head of Growth at Lovable; executive advisor across Dropbox, Miro, Amplitude"
        },
        {
          "value": "Active weekend rhythm and outdoor trail immersion",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Sunrise trail run across Mount Tamalpais ridge"
        },
        {
          "value": "Emotional presence and unpretentious warmth over dinner",
          "confidence": 0.89,
          "source": "cross-source",
          "snippet": "Saturday family pasta rituals balanced with executive leadership"
        }
      ],
      "hobbies": [
        {
          "value": "Long-distance trail running in Marin County",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Mount Tamalpais sunrise ridge running"
        },
        {
          "value": "Italian cooking & natural wine tasting",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Homemade pasta and natural wine evenings"
        },
        {
          "value": "Tech writing & podcast interviewing",
          "confidence": 0.88,
          "source": "linkedin",
          "snippet": "Growth Scoop newsletter and industry speaking"
        }
      ],
      "interests": [
        {
          "value": "Product-led growth systems and AI interfaces",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Driving global self-serve adoption at Lovable"
        },
        {
          "value": "High-performance team coaching & mentorship",
          "confidence": 0.9,
          "source": "linkedin",
          "snippet": "Advising executive teams on organizational growth flywheels"
        }
      ],
      "values": [
        {
          "value": "Authentic accountability and direct communication",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Public data-driven leadership combined with grounded family lifestyle"
        },
        {
          "value": "Continuous learning through craft mastery",
          "confidence": 0.91,
          "source": "linkedin",
          "snippet": "UC Berkeley Statistics background and continuous innovation in AI"
        }
      ],
      "communication_style": {
        "value": "High energy, candid, sharp, and encouraging",
        "confidence": 0.92,
        "source": "linkedin",
        "snippet": "Direct, clear keynote delivery and analytical growth essays"
      },
      "lifestyle": {
        "value": "Executive tech pace weekdays balanced with screen-free ridge hikes and family dinners",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Contrast between tech board advisory and Mount Tamalpais trail runs"
      },
      "ambitions": {
        "value": "Building category-defining AI platforms while living an intentional, healthy personal life",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Championing Lovable growth while prioritizing wellness and family"
      },
      "deal_breakers": [
        "Passive cynicism",
        "Disregard for health and physical vitality",
        "Lack of emotional transparency"
      ],
      "conversation_hooks": [
        "Her favorite Mount Tam ridge trail",
        "Transitioning from statistics to venture growth leadership"
      ]
    }
  },
  {
    "id": "person_02",
    "name": "Marcus Andrews",
    "age": 37,
    "city": "Boston, MA",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Long-term partnership built on mutual creativity, shared values, and humor",
    "linkedin_url": "https://www.linkedin.com/in/marcusandrews/",
    "instagram_url": "https://www.instagram.com/marcusandrews/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Director of Product Marketing at Pendo | Author & Podcaster",
        "about": "Author of \"The Narrative Playbook\". Product marketing leader obsessed with category creation, authentic narratives, and memorable storytelling. Ex-HubSpot and Google.",
        "positions": [
          {
            "role": "Director of Product Marketing",
            "company": "Pendo.io",
            "duration": "2021 - Present",
            "description": "Leading brand positioning, product launches, and narrative design."
          },
          {
            "role": "Principal Product Marketer",
            "company": "HubSpot",
            "duration": "2016 - 2021",
            "description": "Architected Service Hub launch and conversational marketing narratives."
          }
        ],
        "skills": [
          "Narrative Design",
          "Product Marketing",
          "Brand Storytelling",
          "Category Creation",
          "Public Speaking"
        ],
        "education": [
          {
            "school": "Boston University",
            "degree": "BS in Communications & Journalism"
          }
        ]
      },
      "instagram": {
        "bio": "Storyteller · Product Marketing · Marathon runner & vinyl collector · Boston 🏃‍♂️📻",
        "postsCount": 245,
        "followersCount": 8900,
        "captions": [
          "20 miles along the Charles River at sunrise. Marathon training is just moving meditation with better sneakers 🏃‍♂️🍂",
          "Flipping through classic jazz vinyl at Stereo Jack’s in Cambridge. Warm brass through analog tubes hits different 🎷🎶",
          "Sunday espresso and galley proofs for the upcoming book chapter. Good words take time ☕📖"
        ],
        "hashtags": [
          "#marathontraining",
          "#vinylrecords",
          "#bostonrunner",
          "#narrativedesign"
        ],
        "locations": [
          "Charles River Esplanade",
          "Cambridge, MA",
          "Back Bay Boston"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "age_range": "30-40",
        "city": "Boston, MA",
        "relationship_goal": "Committed life partner who values ambition, deep kindness, and active weekends"
      }
    },
    "analysis": {
      "summary": "Marcus is a renowned product marketing director and author in Boston who blends sharp narrative design with marathon endurance, jazz vinyl collecting, and grounded humor.",
      "needs": [
        {
          "value": "Creative respect and shared passion for expressive storytelling",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Author of The Narrative Playbook; Director of Product Marketing at Pendo"
        },
        {
          "value": "Active running and morning outdoor consistency",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "20 miles along the Charles River at sunrise"
        },
        {
          "value": "Thoughtful domestic warmth and artistic curiosity",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "Jazz vinyl listening and analog book writing rituals"
        }
      ],
      "hobbies": [
        {
          "value": "Marathon distance running along the Charles River",
          "confidence": 0.97,
          "source": "instagram",
          "snippet": "20 miles along the Charles River marathon training"
        },
        {
          "value": "Vintage vinyl collecting (jazz & soul)",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Stereo Jacks Cambridge analog record browsing"
        },
        {
          "value": "Book writing and literary journalism",
          "confidence": 0.9,
          "source": "linkedin",
          "snippet": "Published narrative design books and essays"
        }
      ],
      "interests": [
        {
          "value": "Category creation and messaging psychology",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Product launches and brand positioning architecture at Pendo and HubSpot"
        },
        {
          "value": "Specialty pour-overs and independent bookstores",
          "confidence": 0.88,
          "source": "instagram",
          "snippet": "Sunday espresso and galley proof editing"
        }
      ],
      "values": [
        {
          "value": "Authentic substance over superficial buzzwords",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Championing honest narrative craft against generic marketing hype"
        },
        {
          "value": "Grounded discipline and long-term perseverance",
          "confidence": 0.92,
          "source": "cross-source",
          "snippet": "Marathon training milestones combined with sustained publishing output"
        }
      ],
      "communication_style": {
        "value": "Engaging, witty, articulate, and empathetic",
        "confidence": 0.92,
        "source": "linkedin",
        "snippet": "Journalism degree and acclaimed public keynote style"
      },
      "lifestyle": {
        "value": "Product marketing leadership balanced with morning runs and evening vinyl spins",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Tech leadership balanced with endurance sports and music appreciation"
      },
      "ambitions": {
        "value": "Authoring influential literature on brand craft while maintaining a joyful, connected home",
        "confidence": 0.91,
        "source": "cross-source",
        "snippet": "Expanding narrative leadership while pursuing marathon personal bests"
      },
      "deal_breakers": [
        "Ego-driven posturing",
        "Sedentary inertia with no interest in movement",
        "Inability to laugh at oneself"
      ],
      "conversation_hooks": [
        "His favorite jazz record find in Cambridge",
        "How marathon training shapes creative narrative writing"
      ]
    }
  },
  {
    "id": "person_03",
    "name": "Sara Du",
    "age": 26,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Thoughtful partnership with an entrepreneurial mindset and artistic curiosity",
    "linkedin_url": "https://www.linkedin.com/in/sara-du/",
    "instagram_url": "https://www.instagram.com/saraduh/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Alloy Automation | Forbes 30 Under 30",
        "about": "Building modern connectivity infrastructure for modern e-commerce and SaaS. YC alumna, angel investor, and passionate design advocate. Former Harvard drop-out to build Alloy.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Alloy Automation",
            "duration": "2020 - Present",
            "description": "Built enterprise workflow automation platform backed by a16z and Bain Capital."
          }
        ],
        "skills": [
          "Automation Infrastructure",
          "SaaS Architecture",
          "Early-Stage Scaling",
          "Product Design"
        ],
        "education": [
          {
            "school": "Harvard University",
            "degree": "Computer Science (Thiel Fellowship)"
          }
        ]
      },
      "instagram": {
        "bio": "Building Alloy Automation · Ceramics & cafe hopping in Hayes Valley · SF ☕🏺",
        "postsCount": 180,
        "followersCount": 16500,
        "captions": [
          "Wheel throwing on Sunday afternoon. Finding balance when the glaze melts into something unexpected ✨🏺",
          "Hayes Valley matcha morning walk before deep focus engineering sprints 🍵🏙️",
          "Contemporary museum visits inspire the best user experience workflows 🎨📐"
        ],
        "hashtags": [
          "#potterystudio",
          "#ceramics",
          "#hayesvalley",
          "#techfounder"
        ],
        "locations": [
          "Hayes Valley, SF",
          "Clay & Craft Studio",
          "SFMOMA"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "San Francisco, CA",
        "relationship_goal": "Meaningful, collaborative connection with mutual respect for creative ambition"
      }
    },
    "analysis": {
      "summary": "Sara is an acclaimed young founder and CEO in San Francisco who pairs deep technical and enterprise automation acumen with wheel-thrown ceramics and architecture appreciation.",
      "needs": [
        {
          "value": "Supportive peer understanding of early-stage startup intensity",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Alloy Automation CEO backed by leading venture firms"
        },
        {
          "value": "Tactile, screen-free weekend exploration",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Wheel throwing and pottery studio sessions on Sundays"
        },
        {
          "value": "High design aesthetics and curiosity",
          "confidence": 0.88,
          "source": "cross-source",
          "snippet": "SFMOMA visits and user experience workflow inspiration"
        }
      ],
      "hobbies": [
        {
          "value": "Ceramics and pottery wheel crafting",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Finding balance when the glaze melts unexpectedly"
        },
        {
          "value": "Neighborhood matcha and architecture walks",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Hayes Valley matcha walks before focus sprints"
        }
      ],
      "interests": [
        {
          "value": "Workflow automation and API infrastructure",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Building modern connectivity infrastructure at Alloy"
        },
        {
          "value": "Modern art and museum curation",
          "confidence": 0.87,
          "source": "instagram",
          "snippet": "Contemporary museum visits inspiring digital design"
        }
      ],
      "values": [
        {
          "value": "Audacity paired with humble craft",
          "confidence": 0.92,
          "source": "cross-source",
          "snippet": "Harvard drop-out building enterprise tech while practicing mindful pottery"
        }
      ],
      "communication_style": {
        "value": "Concise, observant, reflective, and genuine",
        "confidence": 0.89,
        "source": "linkedin",
        "snippet": "Focus on clear product architecture and team clarity"
      },
      "lifestyle": {
        "value": "High-leverage founder execution balanced by quiet studio craft",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Enterprise SaaS weekdays and Sunday studio ceramics"
      },
      "ambitions": {
        "value": "Scaling Alloy into a generational infrastructure company while staying grounded in creative art",
        "confidence": 0.91,
        "source": "cross-source",
        "snippet": "Enterprise founder track coupled with artistic pursuits"
      },
      "deal_breakers": [
        "Complacency",
        "Lack of curiosity",
        "Performative busyness"
      ],
      "conversation_hooks": [
        "Her pottery glaze experiments",
        "Building enterprise software at age 22"
      ]
    }
  },
  {
    "id": "person_04",
    "name": "Marques Brownlee",
    "age": 31,
    "city": "New York, NY",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Committed relationship grounded in mutual respect, active athleticism, and quiet private joy",
    "linkedin_url": "https://www.linkedin.com/in/marquesbrownlee/",
    "instagram_url": "https://www.instagram.com/mkbhd/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Producer & Tech Creator at MKBHD | Professional Ultimate Frisbee Player",
        "about": "Quality tech videos for 15+ years. Host of Waveform Podcast. Professional athlete with New York Empire (AUDL). Stevens Institute of Technology graduate.",
        "positions": [
          {
            "role": "Creator & Executive Producer",
            "company": "MKBHD Studios",
            "duration": "2008 - Present",
            "description": "Directing consumer electronics journalism reaching 19M+ subscribers."
          },
          {
            "role": "Professional Athlete",
            "company": "New York Empire",
            "duration": "2019 - Present",
            "description": "AUDL Champion handler and elite ultimate frisbee competitor."
          }
        ],
        "skills": [
          "Video Production",
          "Consumer Tech Analysis",
          "Professional Athletics",
          "Studio Engineering"
        ],
        "education": [
          {
            "school": "Stevens Institute of Technology",
            "degree": "BS in Business & Information Systems"
          }
        ]
      },
      "instagram": {
        "bio": "Tech videos · Pro Ultimate Frisbee player (NY Empire) · Car enthusiast · NYC / NJ 🥏🏎️",
        "postsCount": 1420,
        "followersCount": 4700000,
        "captions": [
          "Golden hour on the ultimate field. Wind was calm and the layout disc held its line perfectly 🥏🌅",
          "Studio lighting overhaul complete. Attention to the tiny shadow details makes the whole frame sing 🎬💡",
          "Weekend road trip in the retro EV. Quiet backroads and good playlists 🛣️⚡"
        ],
        "hashtags": [
          "#ultimatefrisbee",
          "#audiomix",
          "#filmmaking",
          "#gearheads"
        ],
        "locations": [
          "MetLife Stadium",
          "MKBHD Studios, NJ",
          "Manhattan, NYC"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "New York, NY",
        "relationship_goal": "Long-term partnership with warmth, shared physical activity, and unpretentious values"
      }
    },
    "analysis": {
      "summary": "Marques is a world-class technology creator and championship professional athlete who combines uncompromising production craft with genuine humility and disciplined athletic focus.",
      "needs": [
        {
          "value": "Authentic intimacy and grounded privacy away from public scrutiny",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "15-year creator career strictly maintaining professional personal boundaries"
        },
        {
          "value": "Shared athletic lifestyle and outdoor movement",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Professional Ultimate frisbee training and competitive tournaments"
        },
        {
          "value": "Calm, patient emotional cadence",
          "confidence": 0.91,
          "source": "linkedin",
          "snippet": "Meticulous 15-year studio discipline and deliberate content standards"
        }
      ],
      "hobbies": [
        {
          "value": "Competitive Ultimate Frisbee (NY Empire)",
          "confidence": 0.98,
          "source": "instagram",
          "snippet": "Golden hour ultimate layout disc training"
        },
        {
          "value": "Automotive design and performance driving",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "EV road trips along quiet backroads"
        },
        {
          "value": "Studio lighting and camera optics experimentation",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Studio lighting overhaul and frame composition"
        }
      ],
      "interests": [
        {
          "value": "Consumer electronics and industrial ergonomics",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "15+ years analyzing consumer hardware and product design"
        },
        {
          "value": "High-end audio recording and acoustic engineering",
          "confidence": 0.91,
          "source": "linkedin",
          "snippet": "Waveform podcast production and studio sound engineering"
        }
      ],
      "values": [
        {
          "value": "Perseverance and relentless consistency over viral hype",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Continuous weekly publishing since 2008 without sensationalism"
        },
        {
          "value": "Humility and team loyalty",
          "confidence": 0.93,
          "source": "cross-source",
          "snippet": "Crediting his studio team and athletic teammates across every milestone"
        }
      ],
      "communication_style": {
        "value": "Clear, relaxed, articulate, and completely grounded",
        "confidence": 0.95,
        "source": "linkedin",
        "snippet": "Acclaimed calm, objective video reviews and conversational podcasting"
      },
      "lifestyle": {
        "value": "High-output studio filming weeks balanced with rigorous athletic workouts and road trips",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Rigorous studio shooting schedule matched by professional AUDL training"
      },
      "ambitions": {
        "value": "Setting the gold standard for independent media while winning championships and living quietly",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Studio expansion paired with athletic excellence"
      },
      "deal_breakers": [
        "Superficial social-climbing",
        "Inability to enjoy peaceful downtime",
        "Lack of personal passions"
      ],
      "conversation_hooks": [
        "His favorite throw on the ultimate field",
        "The hardest camera shot he ever engineered"
      ]
    }
  },
  {
    "id": "person_05",
    "name": "Cat Noone",
    "age": 34,
    "city": "New York, NY",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Deeply bonded life partnership founded on empathy, artistic discernment, and mutual support",
    "linkedin_url": "https://www.linkedin.com/in/catnoone/",
    "instagram_url": "https://www.instagram.com/imcatnoone/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at Stark | Accessibility & Humane Software Design",
        "about": "Empowering designers and engineers to make software accessible to all. Architectural thinker, designer, speaker, and writer. Advocate for inclusive digital spaces.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Stark",
            "duration": "2017 - Present",
            "description": "Built the industry standard accessibility suite used by thousands of product teams."
          }
        ],
        "skills": [
          "Accessibility (a11y)",
          "Inclusive Design",
          "Design Systems",
          "Leadership",
          "Creative Direction"
        ],
        "education": [
          {
            "school": "School of Visual Arts (SVA)",
            "degree": "BFA in Design"
          }
        ]
      },
      "instagram": {
        "bio": "Accessibility first · Designer & Architect · Matcha explorer & architectural photography · NYC 🍵🏛️",
        "postsCount": 420,
        "followersCount": 22000,
        "captions": [
          "Morning walk through SoHo studying cast-iron facades and early autumn light 🏛️🍂",
          "Whisking ceremonial grade Uji matcha at home. A quiet moment before leading design reviews 🍵✨",
          "Good design is not decorative; it is the bridge between human dignity and digital tools 💡🤍"
        ],
        "hashtags": [
          "#accessibility",
          "#architecturelovers",
          "#matcharitual",
          "#designmatters"
        ],
        "locations": [
          "SoHo, New York",
          "West Village, NYC",
          "SVA NYC"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "New York, NY",
        "relationship_goal": "Compassionate partnership with someone who loves deep talks, walks, and building things of lasting beauty"
      }
    },
    "analysis": {
      "summary": "Cat is a pioneer in digital accessibility and design leadership, combining deep moral conviction with architectural photography, matcha rituals, and empathetic connection.",
      "needs": [
        {
          "value": "Deep emotional empathy and social conscientiousness",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Dedicated career to universal software accessibility at Stark"
        },
        {
          "value": "Visual and architectural appreciation in daily life",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Studying cast-iron facades and urban architecture"
        },
        {
          "value": "Calm, intentional home environment",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Quiet ceremonial matcha whisking rituals"
        }
      ],
      "hobbies": [
        {
          "value": "Architectural photography in NYC neighborhoods",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "SoHo cast-iron facade and morning light photography"
        },
        {
          "value": "Ceremonial matcha preparation and tea ceremonies",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Whisking ceremonial grade Uji matcha at home"
        }
      ],
      "interests": [
        {
          "value": "Inclusive design systems and cognitive ergonomics",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Building industry standard accessibility suite at Stark"
        },
        {
          "value": "Urban history and historic restoration",
          "confidence": 0.88,
          "source": "instagram",
          "snippet": "Historic building preservation and human-scale architecture"
        }
      ],
      "values": [
        {
          "value": "Human dignity as the core of technology",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Design as a bridge between human dignity and digital tools"
        },
        {
          "value": "Integrity and deliberate living",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Quiet intentional mornings and focused work ethics"
        }
      ],
      "communication_style": {
        "value": "Poetic, direct, warm, and deeply principled",
        "confidence": 0.93,
        "source": "linkedin",
        "snippet": "Authoritative keynote presentations and thoughtful design essays"
      },
      "lifestyle": {
        "value": "Mission-driven company leadership paired with peaceful walking and cultural immersion",
        "confidence": 0.91,
        "source": "cross-source",
        "snippet": "Leading Stark team while nurturing daily artistic rituals"
      },
      "ambitions": {
        "value": "Making the entire digital world inherently accessible while building a warm, loving home",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Universal accessibility advocacy and personal wellness"
      },
      "deal_breakers": [
        "Lack of empathy for marginalized communities",
        "Cynical apathy",
        "Chaotic living spaces"
      ],
      "conversation_hooks": [
        "Her favorite cast-iron building in SoHo",
        "How tea rituals cultivate clarity in high-pressure leadership"
      ]
    }
  },
  {
    "id": "person_06",
    "name": "Brian Chesky",
    "age": 43,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Meaningful, lasting partnership centered on shared adventures, design, and authenticity",
    "linkedin_url": "https://www.linkedin.com/in/brianchesky/",
    "instagram_url": "https://www.instagram.com/brianchesky/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Airbnb | Industrial Designer",
        "about": "Co-founder and CEO of Airbnb. Passionate about design, hospitality, and creating belonging anywhere in the world. RISD Industrial Design graduate.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Airbnb",
            "duration": "2008 - Present",
            "description": "Leading global travel marketplace operating in 220+ countries."
          }
        ],
        "skills": [
          "Design Leadership",
          "Product Vision",
          "Global Strategy",
          "Brand Architecture",
          "Hospitality Design"
        ],
        "education": [
          {
            "school": "Rhode Island School of Design (RISD)",
            "degree": "BFA in Industrial Design"
          }
        ]
      },
      "instagram": {
        "bio": "Designer · Co-founder & CEO at Airbnb · Passionate about architecture, hospitality, and design 🏡✨",
        "postsCount": 520,
        "followersCount": 540000,
        "captions": [
          "Golden hour sketches of mid-century architectural pavilions. Designing spaces that bring people together 🏛️✍️",
          "Morning run up the hills of San Francisco with my golden retriever. Best city in the world when the sun breaks through 🐕🌉",
          "Hosted guests at my home this weekend. Hospitality begins with listening and welcoming someone into your story 🗝️🤍"
        ],
        "hashtags": [
          "#airbnbdesign",
          "#hospitality",
          "#sanfrancisco",
          "#architecturedesign"
        ],
        "locations": [
          "San Francisco, CA",
          "RISD Providence",
          "Big Sur, CA"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Genuine, grounded companionship with an adventurous and kind-hearted partner"
      }
    },
    "analysis": {
      "summary": "Brian is an iconic design-led founder and CEO who views hospitality and architecture through the lens of human connection, paired with fitness, dog walks, and mid-century sketching.",
      "needs": [
        {
          "value": "Authentic warmth without celebrity pretension",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Hosting travelers in his own home and seeking genuine human connection"
        },
        {
          "value": "Shared passion for travel, architecture, and aesthetics",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Mid-century sketches and architectural travel exploration"
        },
        {
          "value": "Dog lover and active outdoor partner",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Morning hill runs with golden retriever across SF"
        }
      ],
      "hobbies": [
        {
          "value": "Architectural sketching and industrial model drawing",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Golden hour sketches of mid-century architectural pavilions"
        },
        {
          "value": "Hill running and functional fitness",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Morning runs up the hills of San Francisco"
        },
        {
          "value": "Mid-century modern furniture collecting",
          "confidence": 0.89,
          "source": "linkedin",
          "snippet": "RISD Industrial design foundation"
        }
      ],
      "interests": [
        {
          "value": "Hospitality design and community psychology",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Creating belonging anywhere in 220+ countries"
        },
        {
          "value": "Art school history and physical manufacturing",
          "confidence": 0.9,
          "source": "linkedin",
          "snippet": "RISD alumni network and industrial design craftsmanship"
        }
      ],
      "values": [
        {
          "value": "Human connection and belonging as life purpose",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Core mission of building belonging anywhere in the world"
        },
        {
          "value": "Craft and taste over institutional bureaucratization",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Design-led management and personal attention to UI and host craft"
        }
      ],
      "communication_style": {
        "value": "Story-driven, reflective, energetic, and candid",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Personal storytelling style in shareholder letters and design reviews"
      },
      "lifestyle": {
        "value": "Global leadership grounded by dog walks, sketching, and hosting rituals",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Leading global company while personally welcoming guests and sketching"
      },
      "ambitions": {
        "value": "Transforming global travel into meaningful connection while finding enduring personal love",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Pioneering community-first travel while seeking an authentic life partner"
      },
      "deal_breakers": [
        "Superficial materialism",
        "Aloofness towards strangers",
        "Dislike of dogs"
      ],
      "conversation_hooks": [
        "His first week at RISD",
        "The most unusual architecture he stayed at in Big Sur"
      ]
    }
  },
  {
    "id": "person_07",
    "name": "Grace Beverley",
    "age": 27,
    "city": "London, UK",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Equitable partnership with shared ambition, humor, and work-life intentionality",
    "linkedin_url": "https://www.linkedin.com/in/grace-beverley-227749132/",
    "instagram_url": "https://www.instagram.com/gracebeverley/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at TALA & Shreddy | Author & Podcaster",
        "about": "Founder of sustainable activewear brand TALA and fitness tech app Shreddy. Sunday Times bestselling author of \"Working Hard, Hardly Working\". Oxford University graduate in Music.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "TALA",
            "duration": "2019 - Present",
            "description": "Disrupting fast-fashion with ethically produced, high-performance activewear."
          },
          {
            "role": "Founder & CEO",
            "company": "Shreddy",
            "duration": "2019 - Present",
            "description": "Fitness app delivering guided strength training and community workouts."
          }
        ],
        "skills": [
          "Sustainable Retail",
          "Brand Growth",
          "Product Strategy",
          "Media Production",
          "Fitness Tech"
        ],
        "education": [
          {
            "school": "University of Oxford",
            "degree": "BA in Music"
          }
        ]
      },
      "instagram": {
        "bio": "Sustainable activewear founder · Podcaster & Author · Oxford grad · Pilates & matcha lover · London 🏋️‍♀️☕",
        "postsCount": 1680,
        "followersCount": 1100000,
        "captions": [
          "Saturday morning reformer pilates session followed by oat flat whites in Marylebone 🧘‍♀️☕",
          "Designing the autumn sustainable collection. Upcycled textiles and high-support fits 👗🌿",
          "Recording season 5 of the podcast. Honest discussions on productivity, rest, and avoiding burnout 🎙️✨"
        ],
        "hashtags": [
          "#wearetala",
          "#pilateslovers",
          "#productivityhabits",
          "#londonlife"
        ],
        "locations": [
          "Marylebone, London",
          "Soho Farmhouse",
          "Oxford, UK"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "London, UK",
        "relationship_goal": "Equal partnership with mutual emotional intelligence and grounded humor"
      }
    },
    "analysis": {
      "summary": "Grace is a leading British direct-to-consumer entrepreneur and author who balances dual venture leadership with reformer pilates, classical music training, and work-life balance advocacy.",
      "needs": [
        {
          "value": "Respect for female entrepreneurship and demanding executive schedules",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Dual venture CEO building TALA and Shreddy"
        },
        {
          "value": "Healthy physical wellness and active lifestyle",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Daily reformer pilates and functional fitness workouts"
        },
        {
          "value": "Vulnerability and honest conversations around rest",
          "confidence": 0.91,
          "source": "cross-source",
          "snippet": "Author of Working Hard Hardly Working on anti-burnout principles"
        }
      ],
      "hobbies": [
        {
          "value": "Reformer pilates and strength training",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Saturday morning reformer pilates in Marylebone"
        },
        {
          "value": "Classical music and piano playing",
          "confidence": 0.89,
          "source": "linkedin",
          "snippet": "Oxford University Music degree background"
        },
        {
          "value": "Podcast interviewing on business and lifestyle",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Recording season 5 of the podcast on productivity and rest"
        }
      ],
      "interests": [
        {
          "value": "Circular fashion and sustainable textile manufacturing",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Upcycled performance activewear at TALA"
        },
        {
          "value": "Independent London cafes and country weekend retreats",
          "confidence": 0.88,
          "source": "instagram",
          "snippet": "Marylebone coffee and Soho Farmhouse escapes"
        }
      ],
      "values": [
        {
          "value": "Sustainability without greenwashing",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Transparent supply chains and verified ethical production"
        },
        {
          "value": "Productivity grounded in intentional rest",
          "confidence": 0.93,
          "source": "cross-source",
          "snippet": "Championing anti-burnout workplace culture"
        }
      ],
      "communication_style": {
        "value": "Fast-paced, articulate, funny, and transparent",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Bestselling author and energetic podcast interviewer"
      },
      "lifestyle": {
        "value": "High-speed retail leadership balanced by weekend countryside retreats and pilates",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Managing headquarters while taking screen breaks in the Cotswolds"
      },
      "ambitions": {
        "value": "Redefining fashion sustainability globally while cultivating meaningful personal happiness",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Scaling TALA internationally while maintaining health and relationships"
      },
      "deal_breakers": [
        "Condescending attitudes towards businesswomen",
        "Obsessive workaholism without boundaries",
        "Smoking"
      ],
      "conversation_hooks": [
        "Her Oxford music thesis",
        "The reality of sustainable activewear supply chains in Europe"
      ]
    }
  },
  {
    "id": "person_08",
    "name": "Guillermo Rauch",
    "age": 34,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Long-term partnership with a kind, curious, and creative woman",
    "linkedin_url": "https://www.linkedin.com/in/rauchg/",
    "instagram_url": "https://www.instagram.com/rauchg/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at Vercel | Creator of Next.js & Socket.io",
        "about": "Founder and CEO of Vercel. Creator of Next.js and open source developer tools empowering millions of web developers. Dedicated to making the web faster and more collaborative.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Vercel",
            "duration": "2015 - Present",
            "description": "Building the Frontend Cloud platform powering the modern web."
          }
        ],
        "skills": [
          "Web Architecture",
          "Developer Experience",
          "Open Source",
          "Distributed Systems",
          "Frontend Innovation"
        ],
        "education": [
          {
            "school": "Self-taught Engineer",
            "degree": "Open Source Systems Pioneer"
          }
        ]
      },
      "instagram": {
        "bio": "Making the Web Faster · Open Source Creator · Specialty espresso & Buenos Aires roots · SF ⚡☕",
        "postsCount": 380,
        "followersCount": 38000,
        "captions": [
          "Sunrise pour over with freshly roasted geisha beans. Precision in brewing mirrors precision in software engineering ☕🔬",
          "Next.js Conf stage moments. The energy of hundreds of creators building together is unmatched 🌐✨",
          "Sunday evening asado with close friends. Slow embers, rich wine, and timeless stories 🥩🍷"
        ],
        "hashtags": [
          "#vercel",
          "#specialtycoffee",
          "#nextjs",
          "#asadoargentino"
        ],
        "locations": [
          "San Francisco, CA",
          "Buenos Aires, Argentina",
          "Silicon Valley"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Loving, supportive partnership with mutual depth, shared laughter, and warmth"
      }
    },
    "analysis": {
      "summary": "Guillermo is the visionary founder and CEO of Vercel and creator of Next.js, blending intense technical mastery with Argentine asado traditions, specialty espresso, and generous mentorship.",
      "needs": [
        {
          "value": "Appreciation for craft excellence and deep focus",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Creator of Next.js and open source infrastructure powering global web"
        },
        {
          "value": "Warm cultural hospitality and community gathering",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Sunday evening asado rituals and shared wine evenings"
        },
        {
          "value": "Calm, thoughtful presence amid fast-paced technology",
          "confidence": 0.91,
          "source": "cross-source",
          "snippet": "Precision espresso brewing and deliberate leadership cadence"
        }
      ],
      "hobbies": [
        {
          "value": "Specialty coffee extraction and brewing science",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Sunrise geisha coffee brewing with precision"
        },
        {
          "value": "Argentine asado cooking over open embers",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Sunday evening slow-cooked asado with friends"
        },
        {
          "value": "Open source software architecture",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Creating developer tools and distributed platforms"
        }
      ],
      "interests": [
        {
          "value": "Frontend cloud computing and edge latency optimization",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Making the web faster at Vercel"
        },
        {
          "value": "Latin American literature and tango history",
          "confidence": 0.87,
          "source": "instagram",
          "snippet": "Buenos Aires roots and cultural appreciation"
        }
      ],
      "values": [
        {
          "value": "Democratizing developer capability across the world",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Self-taught background and global open source tool creation"
        },
        {
          "value": "Generosity and warm hospitality",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Bringing friends together around the dinner table"
        }
      ],
      "communication_style": {
        "value": "Insightful, succinct, warm, and uplifting",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Famous clear aphorisms on web performance and gracious public speaking"
      },
      "lifestyle": {
        "value": "High-growth technology executive who protects intentional family traditions and espresso rituals",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Global Vercel platform governance paired with slow weekend cooking"
      },
      "ambitions": {
        "value": "Empowering the next billion software creators while building an enduring, joyful personal partnership",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Advancing the web while investing in deep personal relationships"
      },
      "deal_breakers": [
        "Arrogance",
        "Disrespect for service staff or peers",
        "Indifference to quality"
      ],
      "conversation_hooks": [
        "His favorite coffee processing method",
        "Learning to code in Buenos Aires as a teenager"
      ]
    }
  },
  {
    "id": "person_09",
    "name": "Codie Sanchez",
    "age": 37,
    "city": "Austin, TX",
    "avatar": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "High-trust, equal partnership with a grounded, hardworking man who loves the outdoors",
    "linkedin_url": "https://www.linkedin.com/in/codiesanchez/",
    "instagram_url": "https://www.instagram.com/codiesanchez/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & Managing Director at Contrarian Thinking | Investor & Author",
        "about": "Empowering people to achieve financial freedom through main street business ownership. Former Wall Street institutional investor (Goldman Sachs, State Street). Author and podcast host.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Contrarian Thinking",
            "duration": "2020 - Present",
            "description": "Financial education and holding company investing in cash-flowing small businesses."
          },
          {
            "role": "Partner",
            "company": "EEC Ventures",
            "duration": "2017 - 2020",
            "description": "Institutional venture capital and private equity investing across the Americas."
          }
        ],
        "skills": [
          "Private Equity",
          "Small Business Acquisition",
          "Financial Literacy",
          "Media Publishing",
          "Capital Allocation"
        ],
        "education": [
          {
            "school": "Georgetown University",
            "degree": "MBA in Global Business"
          }
        ]
      },
      "instagram": {
        "bio": "Small business owner & investor · Ex-private equity · Ranch life & weightlifting in Austin 🤠🏋️‍♀️",
        "postsCount": 1950,
        "followersCount": 1800000,
        "captions": [
          "Morning deadlifts at the ranch gym before inspecting local manufacturing facilities 🏋️‍♀️🚜",
          "Main street businesses are the backbone of human community. Plumbers, car washes, laundromats—real businesses for real people 🛠️💵",
          "Saturday trail ride through the Texas hill country. Big sky, quiet horse, zero phone notifications 🐴🌄"
        ],
        "hashtags": [
          "#smallbiz",
          "#contrarianthinking",
          "#ranchlife",
          "#austintx"
        ],
        "locations": [
          "Austin, TX",
          "Texas Hill Country",
          "Scottsdale, AZ"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "Austin, TX",
        "relationship_goal": "Direct, honest, masculine partnership with shared family values and active outdoor grit"
      }
    },
    "analysis": {
      "summary": "Codie is an investor, author, and ranch owner in Texas who pairs Wall Street financial rigor with a passion for small business ownership, heavy weightlifting, and horseback trail riding.",
      "needs": [
        {
          "value": "Unshakeable confidence and emotional stability",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "High-conviction financial holding company leadership and outspoken views"
        },
        {
          "value": "Outdoor grit and physical capability",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Ranch maintenance, deadlifts, and horseback trail riding"
        },
        {
          "value": "Straightforward honesty without passive-aggressive games",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Pragmatic, direct small business financial advice"
        }
      ],
      "hobbies": [
        {
          "value": "Heavy barbell strength training (deadlifts & squats)",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Morning deadlifts at the ranch gym"
        },
        {
          "value": "Horseback riding across Texas Hill Country",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Trail rides with horses under Texas big skies"
        },
        {
          "value": "Clay shooting and ranch management",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "Hands-on ranch stewardship and outdoor sports"
        }
      ],
      "interests": [
        {
          "value": "Small business acquisition and micro-private equity",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Main street cash-flowing enterprise acquisition"
        },
        {
          "value": "Financial independence and self-reliance education",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Contrarian Thinking newsletter and holding company operations"
        }
      ],
      "values": [
        {
          "value": "Self-sovereignty and practical craftsmanship",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Prioritizing tangible small businesses over speculative froth"
        },
        {
          "value": "Physical and mental resilience",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Daily hard training and screen-free outdoor disconnection"
        }
      ],
      "communication_style": {
        "value": "Direct, bold, charismatic, and pragmatic",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "High-energy, punchy video essays and straightforward business writing"
      },
      "lifestyle": {
        "value": "Investment empire building combined with rustic ranch living and morning gym sessions",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Managing investments alongside tractor driving and horse care"
      },
      "ambitions": {
        "value": "Building an enduring multi-generational small-business holding company and strong family unit",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Creating community wealth while living intentionally on the ranch"
      },
      "deal_breakers": [
        "Helplessness or victim mentalities",
        "Fear of hard work or getting dirt on hands",
        "Financial irresponsibility"
      ],
      "conversation_hooks": [
        "Her first small business acquisition",
        "The best sunset riding spot in the Texas Hill Country"
      ]
    }
  },
  {
    "id": "person_10",
    "name": "Garry Tan",
    "age": 43,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Deep, joyful partnership centered on creative curiosity, family warmth, and public service",
    "linkedin_url": "https://www.linkedin.com/in/garrytan/",
    "instagram_url": "https://www.instagram.com/garrytan/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "President & CEO at Y Combinator | Founder at Initialized Capital",
        "about": "President and CEO of Y Combinator. Early backer of Coinbase, Instacart, and Flexport. Engineer and designer passionate about civic flourishing and empowering builders. Stanford CS graduate.",
        "positions": [
          {
            "role": "President & CEO",
            "company": "Y Combinator",
            "duration": "2023 - Present",
            "description": "Directing the world leading startup accelerator and founder community."
          },
          {
            "role": "Managing Partner",
            "company": "Initialized Capital",
            "duration": "2012 - 2022",
            "description": "Early-stage venture fund with $3.2B in assets under management."
          }
        ],
        "skills": [
          "Venture Capital",
          "Startup Incubation",
          "Product Design",
          "Civic Advocacy",
          "Full-Stack Engineering"
        ],
        "education": [
          {
            "school": "Stanford University",
            "degree": "BS in Computer Science"
          }
        ]
      },
      "instagram": {
        "bio": "Helping founders build the future · Engineer & designer · Film photographer & coffee explorer · SF ☕📷",
        "postsCount": 1450,
        "followersCount": 110000,
        "captions": [
          "Leica 35mm street shots along Chinatown and North Beach. Light cutting through morning alleyways 📷🏙️",
          "Pour-over espresso flight at Saint Frank on Polk Street. San Francisco coffee culture is truly second to none ☕✨",
          "Saturday family park afternoon in the Presidio. Grateful for our community and clean public spaces 🌳☀️"
        ],
        "hashtags": [
          "#leicafilm",
          "#sanfranciscotech",
          "#presidiosf",
          "#saintfrankcoffee"
        ],
        "locations": [
          "San Francisco, CA",
          "Y Combinator Mountain View",
          "Presidio of San Francisco"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Warm, committed relationship with mutual emotional maturity and shared creative values"
      }
    },
    "analysis": {
      "summary": "Garry is the President and CEO of Y Combinator, combining foundational engineering and design chops with Leica film street photography, San Francisco civic optimism, and family values.",
      "needs": [
        {
          "value": "Shared civic optimism and belief in human progress",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "YC leadership and public advocacy for San Francisco revitalization"
        },
        {
          "value": "Creative artistic sensibility and visual eye",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Leica 35mm street photography and typography appreciation"
        },
        {
          "value": "Warm family orientation and supportive domestic presence",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Presidio family park afternoons and quiet community meals"
        }
      ],
      "hobbies": [
        {
          "value": "Leica 35mm analog street photography",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Chinatown and North Beach morning street photography with Leica"
        },
        {
          "value": "Specialty coffee exploration across San Francisco",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Saint Frank Polk Street espresso tasting flights"
        },
        {
          "value": "UI illustration and front-end coding",
          "confidence": 0.89,
          "source": "linkedin",
          "snippet": "Stanford CS and early Posterous design/engineering roots"
        }
      ],
      "interests": [
        {
          "value": "Early-stage startup mentorship and company formation",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Leading Y Combinator accelerator programs"
        },
        {
          "value": "Civic policy and urban vibrancy in San Francisco",
          "confidence": 0.92,
          "source": "cross-source",
          "snippet": "Advocacy for clean, safe, and innovative city governance"
        }
      ],
      "values": [
        {
          "value": "Empowering ambitious underdogs to build generational technology",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Backing early non-traditional founders who change the world"
        },
        {
          "value": "Community gratitude and stewardship",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Active dedication to public parks, schools, and civic health"
        }
      ],
      "communication_style": {
        "value": "Thoughtful, inspiring, transparent, and approachable",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Popular YouTube vlogs and empathetic founder coaching"
      },
      "lifestyle": {
        "value": "High-responsibility accelerator leadership balanced with daily street photography walks and coffee",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Managing YC batches while enjoying quiet neighborhood walks"
      },
      "ambitions": {
        "value": "Catalyzing the next golden age of technology and human flourishing while nurturing a happy family",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Expanding global founder ecosystem while remaining deeply present at home"
      },
      "deal_breakers": [
        "Nihilistic pessimism",
        "Elitism that looks down on beginners",
        "Unkindness towards working families"
      ],
      "conversation_hooks": [
        "His favorite Leica lens for San Francisco fog",
        "The early days of backing Coinbase in 2012"
      ]
    }
  },
  {
    "id": "person_11",
    "name": "Shriya Nevatia",
    "age": 32,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Deeply supportive partnership grounded in intellectual honesty, mutual kindness, and art",
    "linkedin_url": "https://www.linkedin.com/in/shriyanevatia/",
    "instagram_url": "https://www.instagram.com/shriyanevatia/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder at The Close | Community Architect & Tech Investor",
        "about": "Building curated communities and networks that connect world-class tech founders and leaders. Former Director of Community at Pioneer. Tufts Computer Science alum.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "The Close",
            "duration": "2022 - Present",
            "description": "Curating executive masterminds and founder retreats across North America."
          },
          {
            "role": "Director of Community",
            "company": "Pioneer",
            "duration": "2019 - 2022",
            "description": "Built global tournament engine discovering lost prodigies in tech."
          }
        ],
        "skills": [
          "Community Architecture",
          "Executive Curation",
          "Venture Partnerships",
          "Writing",
          "Event Design"
        ],
        "education": [
          {
            "school": "Tufts University",
            "degree": "BS in Computer Science"
          }
        ]
      },
      "instagram": {
        "bio": "Connecting extraordinary people · Tufts CS alum · Contemporary art & sourdough baking · SF 🎨🥖",
        "postsCount": 310,
        "followersCount": 9400,
        "captions": [
          "Baked a country sourdough loaf with 85% hydration. The blistered crust crackle is pure music 🥖🔥",
          "Hosted a salon dinner in Cole Valley discussing artificial intelligence, human intimacy, and ethics 🍷🕯️",
          "Gallery opening at Minnesota Street Project. Contemporary textiles and geometric abstractions 🎨✨"
        ],
        "hashtags": [
          "#sourdoughbaking",
          "#salonconversations",
          "#minnesotastreetproject",
          "#sfcreatives"
        ],
        "locations": [
          "Cole Valley, SF",
          "Minnesota Street Project",
          "Tufts Boston"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "San Francisco, CA",
        "relationship_goal": "Committed relationship with a warm, thoughtful partner who values deep conversation and good food"
      }
    },
    "analysis": {
      "summary": "Shriya is a community architect and investor who brings brilliant minds together, blending computer science foundations with sourdough baking, salon dinners, and contemporary art.",
      "needs": [
        {
          "value": "Warm emotional reciprocity and authentic presence",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Host of salon dinners and curated founder communities"
        },
        {
          "value": "Intellectual curiosity across technology, art, and philosophy",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Tufts CS background paired with humanist event architecture"
        },
        {
          "value": "Love of domestic cooking and shared meals",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "High-hydration sourdough baking and dinner hosting"
        }
      ],
      "hobbies": [
        {
          "value": "Artisan sourdough bread baking",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "85% hydration country sourdough loaves and crust crackling"
        },
        {
          "value": "Hosting salon dinners and intellectual salons",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Cole Valley dinner discussions on tech ethics and intimacy"
        },
        {
          "value": "Contemporary gallery visiting (Minnesota Street Project)",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "Textile art and geometric abstraction openings"
        }
      ],
      "interests": [
        {
          "value": "Human network graph dynamics and social capital",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Designing high-leverage peer masterminds at The Close"
        },
        {
          "value": "AI ethics and human-computer connection",
          "confidence": 0.88,
          "source": "cross-source",
          "snippet": "Salon discussions on AI and intimacy"
        }
      ],
      "values": [
        {
          "value": "Generosity and intentional connection",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Connecting people selflessly to open life-changing opportunities"
        },
        {
          "value": "Mindful hospitality",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Creating warm, candle-lit environments for honest conversation"
        }
      ],
      "communication_style": {
        "value": "Warm, perceptive, attentive, and articulately curious",
        "confidence": 0.93,
        "source": "linkedin",
        "snippet": "Skilled community moderator and essayist"
      },
      "lifestyle": {
        "value": "Connecting founders by day and nurturing bread starters and books by night",
        "confidence": 0.91,
        "source": "cross-source",
        "snippet": "Active tech events balanced with quiet home baking"
      },
      "ambitions": {
        "value": "Building enduring cultural and business networks while maintaining a deeply rooted, joyful home",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Expanding The Close while cultivating meaningful personal bonds"
      },
      "deal_breakers": [
        "Emotional unavailability",
        "Arrogant monologue conversationalists",
        "Lack of curiosity about others"
      ],
      "conversation_hooks": [
        "Her sourdough starter lineage",
        "The most memorable insight from her Cole Valley salon dinners"
      ]
    }
  },
  {
    "id": "person_12",
    "name": "Alexis Ohanian",
    "age": 41,
    "city": "Los Angeles, CA",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Lifelong partnership centered on shared family devotion, creative ambition, and playfulness",
    "linkedin_url": "https://www.linkedin.com/in/alexisohanian/",
    "instagram_url": "https://www.instagram.com/alexisohanian/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder at Seven Seven Six | Co-founder at Reddit",
        "about": "Founder of venture capital firm Seven Seven Six. Co-founder of Reddit. Advocate for paid family leave, women's sports, and technology that serves humanity. UVA graduate.",
        "positions": [
          {
            "role": "Founder & General Partner",
            "company": "Seven Seven Six (776)",
            "duration": "2020 - Present",
            "description": "Early-stage tech investment firm deploying software-driven venture capital."
          },
          {
            "role": "Co-founder & Executive Chairman",
            "company": "Reddit",
            "duration": "2005 - 2020",
            "description": "Co-founded the front page of the internet, scaling to hundreds of millions of users."
          }
        ],
        "skills": [
          "Venture Capital",
          "Community Platforms",
          "Consumer Technology",
          "Public Advocacy",
          "Family Leave Policy"
        ],
        "education": [
          {
            "school": "University of Virginia",
            "degree": "BA in History & Commerce"
          }
        ]
      },
      "instagram": {
        "bio": "Business dad · 776 venture fund · Women's sports advocate · Trading card collector · LA 🃏🏆",
        "postsCount": 1890,
        "followersCount": 820000,
        "captions": [
          "Sunday morning waffle art with the girls. Getting better at making chocolate chip dinosaurs 🥞🦕",
          "Courtside cheering on Angel City FC. Women's sports is the greatest undervalued asset in entertainment ⚽🔥",
          "Grading vintage 1999 Pokémon booster packs. Nostalgia meets disciplined market investing 🃏✨"
        ],
        "hashtags": [
          "#businessdad",
          "#angelcityfc",
          "#776investments",
          "#waffleart"
        ],
        "locations": [
          "Los Angeles, CA",
          "BMO Stadium LA",
          "Miami, FL"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "Los Angeles, CA",
        "relationship_goal": "Deep, loving partnership with shared family values, active laughter, and loyalty"
      }
    },
    "analysis": {
      "summary": "Alexis is the co-founder of Reddit and founder of Seven Seven Six, known as an unapologetic \"business dad\" who balances venture investing with pancake art, women's soccer advocacy, and trading cards.",
      "needs": [
        {
          "value": "Fierce family loyalty and deep maternal/paternal values",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Proud public identity as an active, devoted \"business dad\""
        },
        {
          "value": "Playful humor and lighthearted silliness at home",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Sunday dinosaur waffle art and cartoon sketching"
        },
        {
          "value": "Shared passion for equity and supporting women in business/sports",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Leading investor in Angel City FC and champion for paid family leave"
        }
      ],
      "hobbies": [
        {
          "value": "Pancake and waffle art cooking",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Chocolate chip dinosaur waffle breakfasts"
        },
        {
          "value": "Vintage sports and gaming card collecting",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Collecting and grading vintage Pokémon and athletic cards"
        },
        {
          "value": "Supporting women's professional soccer (Angel City FC)",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Courtside attendance and ownership of Angel City FC"
        }
      ],
      "interests": [
        {
          "value": "Software-driven venture capital and seed tech investing",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Deploying capital at Seven Seven Six across frontier tech"
        },
        {
          "value": "Public policy for paid parental leave",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "National advocacy for paid paternity and maternity leave"
        }
      ],
      "values": [
        {
          "value": "Showing up for family first before all business prestige",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Stepping down from board seats to prioritize family and equality"
        },
        {
          "value": "Championing overlooked potential in society",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Investing in women's sports and underrepresented founders"
        }
      ],
      "communication_style": {
        "value": "Warm, candid, enthusiastic, and grounded",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Down-to-earth social media voice and passionate public advocacy"
      },
      "lifestyle": {
        "value": "High-power venture capital investing balanced with school runs and weekend soccer matches",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Venture meetings paired with family breakfasts and sports games"
      },
      "ambitions": {
        "value": "Building an enduring venture firm that changes the world while being the world's best dad and partner",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "776 growth matched by dedicated family presence"
      },
      "deal_breakers": [
        "Coldness towards children",
        "Cynicism about family",
        "Snobbish elitism"
      ],
      "conversation_hooks": [
        "His technique for chocolate chip pancake dinosaurs",
        "Why women's sports is the best entertainment investment"
      ]
    }
  },
  {
    "id": "person_13",
    "name": "Dylan Field",
    "age": 32,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Thoughtful, long-term relationship with someone who loves art, design, and continuous learning",
    "linkedin_url": "https://www.linkedin.com/in/dylanfield/",
    "instagram_url": "https://www.instagram.com/dylanfield/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Figma | Thiel Fellow",
        "about": "Co-founder and CEO of Figma. Working to make design accessible to everyone on the web. Passionate about creative tools, computer graphics, and generative art.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Figma",
            "duration": "2012 - Present",
            "description": "Built collaborative canvas software used by millions of digital creators."
          }
        ],
        "skills": [
          "Computer Graphics",
          "Product Vision",
          "Design Systems",
          "WebAssembly",
          "Creative Tools"
        ],
        "education": [
          {
            "school": "Brown University",
            "degree": "Computer Science (Thiel Fellowship leave)"
          }
        ]
      },
      "instagram": {
        "bio": "Building Figma · Designing on the web · Contemporary sculpture & generative art enthusiast · SF 🎨🖥️",
        "postsCount": 220,
        "followersCount": 42000,
        "captions": [
          "Visiting the Dia Beacon sculpture installations. The way Richard Serra works steel changes how you perceive weight and space 🏛️✨",
          "Configuring the new Figma Config stage. Celebrating the craft of our community 🎨💻",
          "Sunday evening reading on early computer graphics history and Sutherland's Sketchpad 📖🖥️"
        ],
        "hashtags": [
          "#figmaconfig",
          "#diabeacon",
          "#computergraphics",
          "#designcraft"
        ],
        "locations": [
          "San Francisco, CA",
          "Dia Beacon, NY",
          "Brown University"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Warm, intellectual, and creative partnership with deep mutual affection"
      }
    },
    "analysis": {
      "summary": "Dylan is the co-founder and CEO of Figma, combining computer graphics genius with a deep love for monumental sculpture, browser standards, and quiet intellectual curiosity.",
      "needs": [
        {
          "value": "Deep appreciation for visual art and design aesthetics",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Figma CEO and contemporary art museum patron"
        },
        {
          "value": "Calm, thoughtful, non-dramatic personal demeanor",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Patient, long-term 12-year execution building collaborative web tools"
        },
        {
          "value": "Curiosity about ideas and history",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Reading Sutherland's Sketchpad and computer graphics history"
        }
      ],
      "hobbies": [
        {
          "value": "Contemporary art museum and sculpture park visits (Dia Beacon)",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Studying Richard Serra steel sculptures at Dia Beacon"
        },
        {
          "value": "Reading historical computing and design literature",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Study of early computer graphics breakthroughs"
        },
        {
          "value": "Exploring San Francisco contemporary galleries",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "SF gallery visits and local art patronage"
        }
      ],
      "interests": [
        {
          "value": "WebAssembly, WebGL, and browser-native graphics pipelines",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Pioneered WebGL in-browser collaborative design at Figma"
        },
        {
          "value": "Creative empowerment and multiplayer tools",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Making design accessible to every team on the web"
        }
      ],
      "values": [
        {
          "value": "Patience and long-term craftsmanship over quick shortcuts",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Spending four silent years building Figma engine before public launch"
        },
        {
          "value": "Democratizing creativity",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Belief that anyone can learn to design given intuitive web tools"
        }
      ],
      "communication_style": {
        "value": "Humble, articulate, observant, and reflective",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Low-ego leadership style and thoughtful community presentations"
      },
      "lifestyle": {
        "value": "Focus on product vision and team mentorship balanced with quiet art museum weekends",
        "confidence": 0.91,
        "source": "cross-source",
        "snippet": "Figma executive leadership paired with sculpture study"
      },
      "ambitions": {
        "value": "Pushing the boundaries of the digital canvas while living a rich, cultured, and peaceful personal life",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Expanding Figma ecosystem while supporting contemporary artists"
      },
      "deal_breakers": [
        "Superficial materialism",
        "Lack of curiosity for artistic culture",
        "Arrogant posturing"
      ],
      "conversation_hooks": [
        "His favorite Richard Serra sculpture at Dia Beacon",
        "Why in-browser graphics felt impossible in 2012"
      ]
    }
  },
  {
    "id": "person_14",
    "name": "Mathilde Collin",
    "age": 35,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Deep, joyful partnership grounded in emotional honesty, mindfulness, and French warmth",
    "linkedin_url": "https://www.linkedin.com/in/mathildecollin/",
    "instagram_url": "https://www.instagram.com/collinmathilde/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & Executive Chair at Front | YC Alum",
        "about": "Co-founder and Executive Chair of Front. Champion of customer-centric culture, workplace mindfulness, and transparent leadership. HEC Paris graduate.",
        "positions": [
          {
            "role": "Co-founder & Executive Chair",
            "company": "Front",
            "duration": "2014 - Present",
            "description": "Built collaborative customer communication hub valued at over $1.7B."
          }
        ],
        "skills": [
          "Executive Leadership",
          "Product Culture",
          "Mindful Management",
          "SaaS Scaling",
          "Customer Experience"
        ],
        "education": [
          {
            "school": "HEC Paris",
            "degree": "Master in Management & Entrepreneurship"
          }
        ]
      },
      "instagram": {
        "bio": "Making work more human · Meditation & mental health advocate · French gastronomy in SF · Mom 🧘‍♀️🥐",
        "postsCount": 410,
        "followersCount": 18500,
        "captions": [
          "Morning meditation on the balcony overlooking the bay. Silence before the day begins is non-negotiable 🧘‍♀️🌅",
          "Sunday farmers market in the Ferry Building: heirloom tomatoes, fresh sourdough, and French cheeses 🧀🍅",
          "Ten years building Front taught me that true leadership is being fully present with your team and your family 🤍✨"
        ],
        "hashtags": [
          "#mindfulleadership",
          "#frenchinfoc",
          "#meditationpractice",
          "#sfbay"
        ],
        "locations": [
          "San Francisco, CA",
          "Paris, France",
          "Napa Valley, CA"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "San Francisco, CA",
        "relationship_goal": "Warm, open-hearted partnership with an emotionally mature partner who loves good food and mindfulness"
      }
    },
    "analysis": {
      "summary": "Mathilde is the co-founder and Executive Chair of Front, known for pioneering transparent and mindful tech leadership while cherishing daily meditation and French gastronomy.",
      "needs": [
        {
          "value": "Emotional maturity and genuine vulnerability",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Outspoken advocate for mental health and transparent leadership"
        },
        {
          "value": "Commitment to daily mindfulness or presence practices",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Non-negotiable daily morning meditation on the balcony"
        },
        {
          "value": "Love of culinary culture and slow meals together",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Ferry Building farmers market and French cheese/wine rituals"
        }
      ],
      "hobbies": [
        {
          "value": "Daily silent mindfulness meditation",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Morning balcony meditation before tech work"
        },
        {
          "value": "French cooking and farmers market sourcing",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Heirloom tomato and cheese selection at Ferry Building"
        },
        {
          "value": "Mental health and executive coaching writing",
          "confidence": 0.9,
          "source": "linkedin",
          "snippet": "Public sharing of founder stress management playbooks"
        }
      ],
      "interests": [
        {
          "value": "Humane software interfaces and async communication",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Building Front customer communication platform"
        },
        {
          "value": "Venture wellness and founder resilience ecosystems",
          "confidence": 0.91,
          "source": "cross-source",
          "snippet": "Investing in and mentoring founders on sustainable performance"
        }
      ],
      "values": [
        {
          "value": "Authenticity and work-life harmony",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Disciplined disconnection: no email apps on personal phone during vacations"
        },
        {
          "value": "Courageous transparency",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Pioneered publicly sharing Front internal all-hands presentations"
        }
      ],
      "communication_style": {
        "value": "Warm, direct, serene, and deeply encouraging",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Calm executive presence and honest reflections on leadership"
      },
      "lifestyle": {
        "value": "High-level chairwoman duties balanced by dedicated meditation, family time, and slow cooking",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Executive advisory combined with serene domestic life"
      },
      "ambitions": {
        "value": "Proving that world-class billion-dollar companies can be led with humanity, joy, and peace",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "Championing humane business culture globally"
      },
      "deal_breakers": [
        "Toxic competitiveness",
        "Addiction to frantic distraction",
        "Inability to enjoy quiet moments"
      ],
      "conversation_hooks": [
        "How she unplugs completely from technology on weekends",
        "Her favorite hidden cheese shop in Paris"
      ]
    }
  },
  {
    "id": "person_15",
    "name": "Pieter Levels",
    "age": 38,
    "city": "Amsterdam, Netherlands",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Down-to-earth partnership with a creative, independent, and travel-loving woman",
    "linkedin_url": "https://www.linkedin.com/in/pieter-levels/",
    "instagram_url": "https://www.instagram.com/levelsio/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder at Nomad List & Remote OK | Solo Indie Hacker",
        "about": "Bootstrapping profitable internet companies as a solo developer and digital nomad. Creator of Nomad List, Remote OK, Interior AI, and Photo AI. University of Amsterdam graduate.",
        "positions": [
          {
            "role": "Solo Founder",
            "company": "Nomad List & Remote OK",
            "duration": "2014 - Present",
            "description": "Built global platforms enabling millions of professionals to work remotely."
          }
        ],
        "skills": [
          "Full-Stack Prototyping",
          "Solo Bootstrapping",
          "AI Generative Models",
          "Remote Work Infrastructure",
          "PHP/JS Craft"
        ],
        "education": [
          {
            "school": "University of Amsterdam",
            "degree": "BS in Business Administration"
          }
        ]
      },
      "instagram": {
        "bio": "Bootstrapped founder · 100% remote work advocate · Electronic music synthesis & backpacking · Amsterdam 🎒🎹",
        "postsCount": 780,
        "followersCount": 160000,
        "captions": [
          "Working from a seaside wooden bench in Portugal. Single laptop, mobile hotspot, and complete creative freedom 🌊💻",
          "Modular synthesizer jam on a rainy Amsterdam evening. Patching analog oscillators to clear the mind 🎹🌧️",
          "Shipped another feature in 45 minutes with vanilla JS. Simplicity always beats over-engineering 🚀✨"
        ],
        "hashtags": [
          "#digitalnomad",
          "#indiehacker",
          "#modularsynth",
          "#remotework"
        ],
        "locations": [
          "Amsterdam, Netherlands",
          "Lisbon, Portugal",
          "Tokyo, Japan"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "Amsterdam, Netherlands",
        "relationship_goal": "Adventurous, independent partnership with deep affection, shared exploration, and simple living"
      }
    },
    "analysis": {
      "summary": "Pieter is the legendary solo indie hacker behind Nomad List and Remote OK, who lives simply with a laptop, modular synthesizers, and global remote work freedom.",
      "needs": [
        {
          "value": "Independence and shared love of global exploration",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Pioneered digital nomad lifestyle living across continents"
        },
        {
          "value": "Simplicity and avoidance of corporate theater",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Solo bootstrapped business model with zero employees or venture funding"
        },
        {
          "value": "Creative artistic curiosity in music or design",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Modular synthesizer jamming and music production"
        }
      ],
      "hobbies": [
        {
          "value": "Modular analog synthesizer patching and electronic music",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Modular synthesizer jams in Amsterdam studio"
        },
        {
          "value": "Backpacking and scouting coastal seaside towns",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Working from seaside wooden benches across Portugal and Japan"
        },
        {
          "value": "Rapid solo web development hacking",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Shipping web and AI tools with minimal code"
        }
      ],
      "interests": [
        {
          "value": "Remote work dynamics and digital nomad cities",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Nomad List global index and community platform"
        },
        {
          "value": "Consumer generative AI tools for everyday creativity",
          "confidence": 0.91,
          "source": "linkedin",
          "snippet": "Creator of Interior AI and Photo AI"
        }
      ],
      "values": [
        {
          "value": "Ultimate personal freedom and self-determination",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Rejecting corporate hierarchy to live and build autonomously"
        },
        {
          "value": "Pragmatic minimalism and shipping fast",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Belief that simple working code beats complex corporate engineering"
        }
      ],
      "communication_style": {
        "value": "Unfiltered, hilarious, direct, and radically transparent",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "Famous public revenue dashboards and candid social commentary"
      },
      "lifestyle": {
        "value": "Minimalist backpack lifestyle with periods of deep coding flow and seaside exploration",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Nomadic laptop setups balanced with quiet modular synth sessions"
      },
      "ambitions": {
        "value": "Proving that a solo human can build world-scale technology while maintaining full personal freedom and finding a fellow free spirit",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Expanding indie software while traveling meaningfully"
      },
      "deal_breakers": [
        "Need for corporate bureaucracy",
        "Materialistic need for status symbols",
        "Inflexibility with travel"
      ],
      "conversation_hooks": [
        "His favorite modular synthesizer patch",
        "The strangest seaside town he ever launched a company from"
      ]
    }
  },
  {
    "id": "person_16",
    "name": "Laura Behrens Wu",
    "age": 34,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Loving, grounded partnership with shared curiosity, outdoor road trips, and mutual respect",
    "linkedin_url": "https://www.linkedin.com/in/laurabehrenswu/",
    "instagram_url": "https://www.instagram.com/laurabehrenswu/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at Shippo | YC W14 Alum",
        "about": "Founder and CEO of Shippo. Empowering e-commerce merchants of all sizes to compete with global supply chains. University of St. Gallen graduate.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Shippo",
            "duration": "2013 - Present",
            "description": "Built e-commerce shipping platform powering over 100,000 merchants."
          }
        ],
        "skills": [
          "Logistics Infrastructure",
          "E-commerce Platforms",
          "Startup Scaling",
          "Team Culture",
          "Executive Leadership"
        ],
        "education": [
          {
            "school": "University of St. Gallen",
            "degree": "BA in Business Administration"
          }
        ]
      },
      "instagram": {
        "bio": "Logistics tech pioneer · Passionate about small businesses · Road trips along Highway 1 · SF 🛣️🌊",
        "postsCount": 340,
        "followersCount": 8800,
        "captions": [
          "Weekend escape down Highway 1 to Big Sur. Coastal redwoods meeting the Pacific surf is magic 🌲🌊",
          "Shippo company offsite: celebrating ten years of shipping billions of packages for small shops 📦✨",
          "Morning espresso and neighborhood flower market walk in the Marina ☕🌸"
        ],
        "hashtags": [
          "#highway1",
          "#bigsur",
          "#shippoculture",
          "#womenintech"
        ],
        "locations": [
          "Big Sur, CA",
          "Marina District, SF",
          "San Francisco, CA"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "San Francisco, CA",
        "relationship_goal": "Committed, warm partnership with an adventurous spirit and grounded emotional maturity"
      }
    },
    "analysis": {
      "summary": "Laura is the founder and CEO of Shippo, combining deep German engineering discipline in logistics with coastal California road trips, flower market strolls, and small business advocacy.",
      "needs": [
        {
          "value": "Appreciation for resilient, long-term leadership",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "10+ years building Shippo into an e-commerce infrastructure backbone"
        },
        {
          "value": "Love of nature and coastal weekend road trips",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Highway 1 and Big Sur redwood road trips"
        },
        {
          "value": "Unpretentious warmth and loyalty",
          "confidence": 0.9,
          "source": "cross-source",
          "snippet": "Down-to-earth leadership supporting everyday small merchant businesses"
        }
      ],
      "hobbies": [
        {
          "value": "Pacific Coast Highway 1 road trips",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Big Sur coastal drives and redwood forest hiking"
        },
        {
          "value": "Marina neighborhood flower market exploration",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Sunday flower markets and morning walks"
        },
        {
          "value": "Mentoring immigrant and women founders",
          "confidence": 0.9,
          "source": "linkedin",
          "snippet": "Active guidance for early-stage YC founders"
        }
      ],
      "interests": [
        {
          "value": "Supply chain automation and physical retail empowerment",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "Leveling the playing field for independent e-commerce brands"
        },
        {
          "value": "California coastal architecture and history",
          "confidence": 0.88,
          "source": "instagram",
          "snippet": "Historic coastal highway landmarks and photography"
        }
      ],
      "values": [
        {
          "value": "Tenacity and humble perseverance",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Navigating early venture skepticism to build a billion-dollar platform"
        },
        {
          "value": "Supporting main street livelihoods",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Dedicated service to hundreds of thousands of small merchants"
        }
      ],
      "communication_style": {
        "value": "Gentle, clear, highly structured, and grounded",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Thoughtful keynote delivery and approachable team leadership"
      },
      "lifestyle": {
        "value": "Silicon Valley executive pace balanced with peaceful ocean coastline weekends",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Logistics scaling paired with Big Sur coastal retreats"
      },
      "ambitions": {
        "value": "Building an enduring global logistics infrastructure while nurturing a loving, grounded personal life",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Shippo global scaling matched with personal happiness"
      },
      "deal_breakers": [
        "Arrogant entitlement",
        "Lack of follow-through on commitments",
        "Dislike of outdoor travel"
      ],
      "conversation_hooks": [
        "Her favorite secret vista along Highway 1",
        "The early days of shipping packages from her own apartment in SF"
      ]
    }
  },
  {
    "id": "person_17",
    "name": "Amjad Masad",
    "age": 36,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Committed, loving partnership with shared intellectual curiosity, warmth, and family loyalty",
    "linkedin_url": "https://www.linkedin.com/in/amjadmasad/",
    "instagram_url": "https://www.instagram.com/amasad/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Replit | Former Engineer at Facebook",
        "about": "Co-founder and CEO of Replit. Empowering the next billion software creators through AI and cloud computing environments. Born in Amman, Jordan. Pioneer of in-browser IDEs.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Replit",
            "duration": "2016 - Present",
            "description": "Building the world collaborative AI development environment used by 25M+ developers."
          },
          {
            "role": "Software Engineer",
            "company": "Facebook",
            "duration": "2013 - 2016",
            "description": "Early engineer on React Native and JavaScript toolchains."
          }
        ],
        "skills": [
          "Cloud Computing",
          "AI Code Generation",
          "Developer Ecosystems",
          "In-Browser Runtimes",
          "Philosophical Debate"
        ],
        "education": [
          {
            "school": "Princess Sumaya University for Technology",
            "degree": "BS in Computer Science"
          }
        ]
      },
      "instagram": {
        "bio": "Democratizing software creation · Amman to SF · Heavy reading & philosophical debates · SF 📚💻",
        "postsCount": 460,
        "followersCount": 28000,
        "captions": [
          "Stack of weekend reading: ancient Greek philosophy, history of printing presses, and AI agent architectures 📚🏛️",
          "San Francisco sunset walk through Buena Vista Park. The city is alive with energy and builders 🌉✨",
          "Baking flatbread with family on Sunday afternoon. Roots keep you grounded no matter how high tech moves 🫓🤍"
        ],
        "hashtags": [
          "#replit",
          "#historyofideas",
          "#sanfrancisco",
          "#buenavista"
        ],
        "locations": [
          "San Francisco, CA",
          "Amman, Jordan",
          "Silicon Valley"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Long-term partnership with a kind, intellectually curious, and grounded woman"
      }
    },
    "analysis": {
      "summary": "Amjad is the co-founder and CEO of Replit, blending pioneering AI coding infrastructure with ancient philosophical reading, Middle Eastern family flatbread baking, and deep civic optimism.",
      "needs": [
        {
          "value": "Intellectual depth and enthusiasm for philosophical debate",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Avid reader of ancient Greek philosophy and computing history"
        },
        {
          "value": "Family loyalty and cultural appreciation",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Traditional flatbread baking and honoring family roots"
        },
        {
          "value": "Shared optimism about human potential",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Mission to empower the next billion software developers"
        }
      ],
      "hobbies": [
        {
          "value": "Reading history of ideas and classical philosophy",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Weekend reading stacks spanning philosophy to computing"
        },
        {
          "value": "Baking traditional Levantine flatbreads",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Sunday afternoon family flatbread baking"
        },
        {
          "value": "Sunset walks through Buena Vista and Corona Heights",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "San Francisco ridge walking and city contemplation"
        }
      ],
      "interests": [
        {
          "value": "Autonomous software agents and in-browser computing",
          "confidence": 0.98,
          "source": "linkedin",
          "snippet": "Building Replit AI collaborative environments"
        },
        {
          "value": "History of democratization of communication technologies",
          "confidence": 0.92,
          "source": "cross-source",
          "snippet": "Comparing AI software tools to the invention of the printing press"
        }
      ],
      "values": [
        {
          "value": "Democratizing creation for everyone regardless of background",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Personal journey from Amman to Silicon Valley fueling mission for access"
        },
        {
          "value": "Truth-seeking through rigorous, open debate",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Encouraging civil intellectual discourse and free inquiry"
        }
      ],
      "communication_style": {
        "value": "Philosophical, articulate, passionate, and warm",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Thoughtful essays and podcast interviews on the future of programming"
      },
      "lifestyle": {
        "value": "High-focus AI leadership balanced by heavy reading, park walks, and family dinners",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Directing Replit while preserving space for deep study and heritage"
      },
      "ambitions": {
        "value": "Enabling any human on Earth to create software with words while building a rich family life",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "Scaling Replit to 100M creators and nurturing personal relationships"
      },
      "deal_breakers": [
        "Anti-intellectualism",
        "Cynical fatalism",
        "Lack of respect for family traditions"
      ],
      "conversation_hooks": [
        "Why the printing press is the closest analogy to AI code generation",
        "His secret technique for crispy Levantine flatbread"
      ]
    }
  },
  {
    "id": "person_18",
    "name": "Melanie Perkins",
    "age": 37,
    "city": "Sydney, Australia",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Loving, collaborative life partnership grounded in kindness, adventure, and global philanthropy",
    "linkedin_url": "https://www.linkedin.com/in/melanieperkins/",
    "instagram_url": "https://www.instagram.com/melanieperkins/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Canva | Empowering the World to Design",
        "about": "Co-founder and CEO of Canva. On a mission to empower everyone in the world to design anything and publish anywhere. Committed to using Canva profits for profound global good.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Canva",
            "duration": "2012 - Present",
            "description": "Built visual communication platform used by over 170M active monthly users globally."
          }
        ],
        "skills": [
          "Visual Communication",
          "Product Scaling",
          "Global Team Culture",
          "Philanthropic Design",
          "Mission-Driven Growth"
        ],
        "education": [
          {
            "school": "University of Western Australia",
            "degree": "Communications & Psychology"
          }
        ]
      },
      "instagram": {
        "bio": "Empowering every person to design · Kitesurfing enthusiast & philanthropic builder · Sydney 🪁🌏",
        "postsCount": 490,
        "followersCount": 195000,
        "captions": [
          "Kitesurfing in Western Australia over the break. High winds, ocean spray, and total focus 🪁🌊",
          "Canva Create stage celebrating our global creator community! Millions of people finding their creative voice 🎨✨",
          "Quiet Sunday morning sketch walk along Bondi coastal paths ☕🌅"
        ],
        "hashtags": [
          "#canvadesign",
          "#kitesurfing",
          "#sydneylife",
          "#empoweringcreativity"
        ],
        "locations": [
          "Sydney, Australia",
          "Perth, Australia",
          "Bondi Beach"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "Sydney, Australia",
        "relationship_goal": "Equitable partnership filled with outdoor joy, philanthropic purpose, and mutual laughter"
      }
    },
    "analysis": {
      "summary": "Melanie is the co-founder and CEO of Canva, pairing global visual empowerment and multi-billion-dollar philanthropy with ocean kitesurfing and coastal walks in Sydney.",
      "needs": [
        {
          "value": "Authentic humility and shared philanthropic purpose",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Pledged majority of equity to eliminate extreme global poverty"
        },
        {
          "value": "High outdoor energy and adventurous spirit",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Kitesurfing in Western Australia and ocean coastal hiking"
        },
        {
          "value": "Kindness and positive team culture",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Canva core value: \"Be a good human\" and empower others"
        }
      ],
      "hobbies": [
        {
          "value": "Kitesurfing across Western Australia coastline",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "High winds and ocean spray kitesurfing sessions"
        },
        {
          "value": "Bondi coastal trail walks and sketch journaling",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Quiet Sunday morning sketch walks in Sydney"
        },
        {
          "value": "Philanthropic impact program design",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Canva Foundation initiatives across developing nations"
        }
      ],
      "interests": [
        {
          "value": "Democratizing visual communication and creative software",
          "confidence": 0.98,
          "source": "linkedin",
          "snippet": "Empowering 170M+ people worldwide to design"
        },
        {
          "value": "Marine conservation and ocean stewardship",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "Ocean preservation and Australian coastline ecology"
        }
      ],
      "values": [
        {
          "value": "Using wealth and influence for radical global good",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Canva two-step plan: build one of the world's most valuable companies, then do the most good possible"
        },
        {
          "value": "Relentless persistence against all odds",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Rejected by over 100 investors before building Canva into a global giant"
        }
      ],
      "communication_style": {
        "value": "Inspirational, warm, humble, and vision-driven",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Visionary community speeches and compassionate company letters"
      },
      "lifestyle": {
        "value": "Directing a global tech platform while staying connected to ocean wind and humble roots",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Executive leadership balanced with kitesurfing and beach walks"
      },
      "ambitions": {
        "value": "Eliminating extreme global poverty through Canva's foundation while living a joyful, grounded life",
        "confidence": 0.96,
        "source": "cross-source",
        "snippet": "Fulfilling the two-step plan for global human good"
      },
      "deal_breakers": [
        "Greed and ostentatious flashiness",
        "Pessimism towards human progress",
        "Self-absorbed vanity"
      ],
      "conversation_hooks": [
        "How learning to kitesurf helped her raise Canva's seed round",
        "Her favorite beach in Western Australia"
      ]
    }
  },
  {
    "id": "person_19",
    "name": "Sahil Lavingia",
    "age": 32,
    "city": "Portland, OR",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Thoughtful, artistic partnership with an authentic woman who loves nature and creative expression",
    "linkedin_url": "https://www.linkedin.com/in/sahillavingia/",
    "instagram_url": "https://www.instagram.com/shl/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at Gumroad | Author of The Minimalist Entrepreneur",
        "about": "Founder of Gumroad. Helping creators earn over $1B selling digital products. Painter, writer, and investor. Early engineer at Pinterest. Advocate for sustainable, profitable business.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Gumroad",
            "duration": "2011 - Present",
            "description": "Empowering independent authors, artists, and creators worldwide."
          }
        ],
        "skills": [
          "Creator Economy",
          "Oil Painting",
          "Minimalist Entrepreneurship",
          "Writing",
          "Bootstrapping"
        ],
        "education": [
          {
            "school": "USC",
            "degree": "Computer Science (left early to build Pinterest)"
          }
        ]
      },
      "instagram": {
        "bio": "Oil painter & writer · Bootstrapping advocate · Pacific Northwest trail hiking & coffee · Portland 🌲🎨",
        "postsCount": 520,
        "followersCount": 78000,
        "captions": [
          "Finished this large figurative oil painting in the studio. Glazing takes weeks of patience but gives luminosity 🎨✨",
          "Morning run in Forest Park through damp moss and Douglas firs. Pacific Northwest air is restorative 🌲🌧️",
          "Writing chapter notes at Coava Coffee. The best businesses are built for freedom, not valuation headlines ☕📖"
        ],
        "hashtags": [
          "#oilpainting",
          "#forestpark",
          "#minimalistentrepreneur",
          "#portlandarts"
        ],
        "locations": [
          "Portland, OR",
          "Forest Park Portland",
          "San Francisco, CA"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "Portland, OR",
        "relationship_goal": "Meaningful, quiet, and deeply loving partnership with space for art, books, and nature"
      }
    },
    "analysis": {
      "summary": "Sahil is the founder of Gumroad, author of The Minimalist Entrepreneur, and an accomplished figurative oil painter who traded Silicon Valley hype for forest trail runs and studio painting in Portland.",
      "needs": [
        {
          "value": "Appreciation for fine art and creative solitude",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Daily oil painter maintaining rigorous studio artistic practice"
        },
        {
          "value": "Freedom over status and vanity metrics",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Author of The Minimalist Entrepreneur advocating sustainable autonomy"
        },
        {
          "value": "Love of Pacific Northwest rain and quiet woods",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Forest Park trail runs and quiet coffee shop writing"
        }
      ],
      "hobbies": [
        {
          "value": "Figurative oil painting and portraiture",
          "confidence": 0.97,
          "source": "instagram",
          "snippet": "Large figurative oil painting with layered glazing techniques"
        },
        {
          "value": "Trail running through Forest Park",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Running through damp moss and Douglas fir trees in Portland"
        },
        {
          "value": "Essay writing on economics and philosophy",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Author of bestselling business and lifestyle books"
        }
      ],
      "interests": [
        {
          "value": "Independent creator monetization systems",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Paying out over $1B to indie creators on Gumroad"
        },
        {
          "value": "Classical art academy painting methods",
          "confidence": 0.9,
          "source": "instagram",
          "snippet": "Classical glazing, anatomy, and studio lighting"
        }
      ],
      "values": [
        {
          "value": "Freedom, sustainability, and personal sovereignty",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Pioneered building profitable, calm companies without venture treadmill"
        },
        {
          "value": "Unflinching honesty about success and failure",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Wrote famously vulnerable essays on failure and redefining happiness"
        }
      ],
      "communication_style": {
        "value": "Reflective, concise, poetic, and transparent",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Minimalist prose style and thoughtful artistic reflections"
      },
      "lifestyle": {
        "value": "Calm studio life alternating between painting, remote Gumroad governance, and forest runs",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Remote CEO running company in minimal hours to paint full-time"
      },
      "ambitions": {
        "value": "Creating museum-caliber paintings and empowering millions of creators while sharing a peaceful life",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Balancing art and business mastery with domestic joy"
      },
      "deal_breakers": [
        "Addiction to social media clout",
        "Materialistic consumption",
        "Disregard for quiet creative work"
      ],
      "conversation_hooks": [
        "Why oil paint requires weeks of patience",
        "What he learned from leaving Silicon Valley for Portland"
      ]
    }
  },
  {
    "id": "person_20",
    "name": "Whitney Wolfe Herd",
    "age": 35,
    "city": "Austin, TX",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Loving, equal partnership with deep mutual support, shared family values, and outdoor life",
    "linkedin_url": "https://www.linkedin.com/in/whitney-wolfe-herd-8b9a2442/",
    "instagram_url": "https://www.instagram.com/whitney/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & Executive Chair at Bumble | Entrepreneur & Investor",
        "about": "Founder and Executive Chair of Bumble. Youngest female founder to take a company public. Committed to resetting dating norms, ending digital harassment, and empowering women. SMU graduate.",
        "positions": [
          {
            "role": "Founder & Executive Chair",
            "company": "Bumble",
            "duration": "2014 - Present",
            "description": "Created women-first dating and networking platform with over 100M users."
          }
        ],
        "skills": [
          "Consumer Networks",
          "Social Psychology",
          "Brand Building",
          "Public Company Governance",
          "Dating Dynamics"
        ],
        "education": [
          {
            "school": "Southern Methodist University (SMU)",
            "degree": "BA in International Studies"
          }
        ]
      },
      "instagram": {
        "bio": "Empowering healthy connections · Modern romance pioneer · Equestrian riding & Texas outdoors · Austin 🐴🌻",
        "postsCount": 680,
        "followersCount": 1200000,
        "captions": [
          "Early morning at the stables. Horseback riding connects you to rhythm and quiet instincts like nothing else 🐴🌅",
          "Honored to speak on the future of healthy human connection and mutual respect in modern relationships 💛✨",
          "Sunday barbecue with family in the backyard. The best moments are always the simplest 🥩🌻"
        ],
        "hashtags": [
          "#makefirstmove",
          "#bumblelife",
          "#equestrian",
          "#austinliving"
        ],
        "locations": [
          "Austin, TX",
          "New York, NY",
          "Yellowstone, WY"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "Austin, TX",
        "relationship_goal": "Equitable, warm partnership with a kind, grounded, and emotionally secure man"
      }
    },
    "analysis": {
      "summary": "Whitney is the founder of Bumble and youngest woman to take an American company public, known for redefining modern dating around women making the first move, paired with equestrian riding and Texas warmth.",
      "needs": [
        {
          "value": "Unquestioned respect for women's agency and leadership",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Founded Bumble with the core premise of women making the first move"
        },
        {
          "value": "Warm family orientation and domestic grounding",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Backyard barbecues and family grounding moments in Texas"
        },
        {
          "value": "Love of animals and outdoor equestrian lifestyle",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Morning horseback riding and connection to horses"
        }
      ],
      "hobbies": [
        {
          "value": "Equestrian horseback riding",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Early morning stable sessions and horseback trail riding"
        },
        {
          "value": "Family outdoor barbecuing and cooking",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Sunday backyard Texas barbecue meals"
        },
        {
          "value": "Civic policy advocacy for online safety",
          "confidence": 0.92,
          "source": "linkedin",
          "snippet": "Passed anti-cyberflashing legislation in Texas and California"
        }
      ],
      "interests": [
        {
          "value": "Social dynamics and digital relationship psychology",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Pioneered behavioral architecture for 100M+ daters"
        },
        {
          "value": "Texas ranch land conservation",
          "confidence": 0.88,
          "source": "instagram",
          "snippet": "Appreciation for open space and hill country wildlife"
        }
      ],
      "values": [
        {
          "value": "Kindness and accountability as relationship non-negotiables",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Built Bumble on zero tolerance for harassment and misogyny"
        },
        {
          "value": "Courage to rebuild after adversity",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Transformed early tech industry friction into an iconic global company"
        }
      ],
      "communication_style": {
        "value": "Warm, empathetic, articulate, and magnetic",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Empowering keynote speaker and authentic interviewer"
      },
      "lifestyle": {
        "value": "Global company governance balanced by early morning riding and quiet family evenings in Austin",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Executive boardroom meetings paired with country riding"
      },
      "ambitions": {
        "value": "Making the entire internet and physical world safer for equitable love while nurturing a happy family",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "Leading dating revolution while living intentionally in Austin"
      },
      "deal_breakers": [
        "Misogyny or casual sexism",
        "Disrespectful digital communication",
        "Arrogant entitlement"
      ],
      "conversation_hooks": [
        "What horses teach you about human leadership",
        "Why she insisted on women making the first move in 2014"
      ]
    }
  },
  {
    "id": "person_21",
    "name": "Nikita Bier",
    "age": 34,
    "city": "Miami, FL",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Fun, loyal, and loving relationship with an intelligent woman who loves laughs and sunshine",
    "linkedin_url": "https://www.linkedin.com/in/nikitabier/",
    "instagram_url": "https://www.instagram.com/nikitabier/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Product Architect | Founder at tbh & Gas (Acquired by Meta & Discord)",
        "about": "Consumer app viral growth specialist. Founded tbh (acquired by Meta) and Gas (acquired by Discord), both reaching #1 on the App Store. UC Berkeley Haas graduate.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Gas App",
            "duration": "2022 - 2023",
            "description": "Built viral positivity app that reached #1 on App Store; acquired by Discord."
          },
          {
            "role": "Product Manager",
            "company": "Meta",
            "duration": "2017 - 2021",
            "description": "Led growth and experimentation initiatives across youth consumer apps."
          }
        ],
        "skills": [
          "Viral Consumer Growth",
          "Product Psychology",
          "Mobile UX",
          "App Store Optimization",
          "Humor"
        ],
        "education": [
          {
            "school": "UC Berkeley (Haas School of Business)",
            "degree": "BS in Business Administration"
          }
        ]
      },
      "instagram": {
        "bio": "Consumer app viral growth · Miami sunshine · Tennis player & espresso connoisseur · Miami 🎾☕",
        "postsCount": 380,
        "followersCount": 45000,
        "captions": [
          "Sunday morning tennis drill session in Key Biscayne. Getting that topspin backhand dialed in 🎾🌴",
          "Cortado on the patio in South Beach before testing new consumer mobile prototypes ☕☀️",
          "Best lesson from shipping 14 failed apps before 2 hit #1: persistence and humor are your best friends 🚀😄"
        ],
        "hashtags": [
          "#tennisdrill",
          "#miamilife",
          "#keybiscayne",
          "#productgrowth"
        ],
        "locations": [
          "Miami, FL",
          "Key Biscayne, FL",
          "South Beach"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "Miami, FL",
        "relationship_goal": "Long-term relationship with someone who is warm, sharp, playful, and emotionally genuine"
      }
    },
    "analysis": {
      "summary": "Nikita is the consumer mobile mastermind behind tbh and Gas (acquired by Meta and Discord), pairing unrivaled viral product psychology with Key Biscayne tennis and playful humor.",
      "needs": [
        {
          "value": "Quick wit and shared sense of playful humor",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Known for sharp comedic timing and uplifting positive apps"
        },
        {
          "value": "Active sunny outdoor lifestyle",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Key Biscayne tennis drills and South Beach walks"
        },
        {
          "value": "Grounded authenticity away from tech hype",
          "confidence": 0.9,
          "source": "cross-source",
          "snippet": "Relentless persistence over 14 failures before success"
        }
      ],
      "hobbies": [
        {
          "value": "Tennis training and matches in Key Biscayne",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Topspin backhand training and Sunday tennis sets"
        },
        {
          "value": "Espresso tasting and Miami cafe hopping",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "South Beach cortados and outdoor patio working"
        },
        {
          "value": "Rapid mobile UI prototyping",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Rapidly creating consumer micro-interactions that go viral"
        }
      ],
      "interests": [
        {
          "value": "Adolescent and consumer social psychology",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Designed positive peer affirmation mechanics in tbh and Gas"
        },
        {
          "value": "App Store algorithm dynamics and viral distribution loops",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Reached #1 on iOS App Store across multiple distinct apps"
        }
      ],
      "values": [
        {
          "value": "Spreading genuine positivity and anti-bullying culture",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Both hit apps built around anonymous compliments and uplifting peers"
        },
        {
          "value": "Resilience and self-deprecating optimism",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Openly talking about failing dozens of times before hitting gold"
        }
      ],
      "communication_style": {
        "value": "Humorous, sharp, candid, and self-aware",
        "confidence": 0.95,
        "source": "cross-source",
        "snippet": "Famous witty social posts and insightful product teardowns"
      },
      "lifestyle": {
        "value": "Miami coastal living alternating between intense prototyping sprints and tennis sets",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Building apps while enjoying Florida sunshine and ocean air"
      },
      "ambitions": {
        "value": "Inventing social products that bring genuine joy to millions while building a loving, joyful home",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Consumer innovation combined with personal life fulfillment"
      },
      "deal_breakers": [
        "Lack of humor or taking oneself too seriously",
        "Manipulative mind games",
        "Dislike of sunshine/outdoor sports"
      ],
      "conversation_hooks": [
        "The craziest notification message that drove 10M downloads",
        "His tennis rivalry in Key Biscayne"
      ]
    }
  },
  {
    "id": "person_22",
    "name": "Julia Hartz",
    "age": 44,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Long-term partnership with a kind, grounded, and emotionally open-hearted man",
    "linkedin_url": "https://www.linkedin.com/in/juliahartz/",
    "instagram_url": "https://www.instagram.com/juliahartz/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder & CEO at Eventbrite | Bringing People Together",
        "about": "Co-founder and CEO of Eventbrite. Dedicated to fueling the human desire for shared, live experiences. Passionate about empowering independent event creators globally. Pepperdine graduate.",
        "positions": [
          {
            "role": "Co-founder & CEO",
            "company": "Eventbrite",
            "duration": "2006 - Present",
            "description": "Scaled global ticketing platform processing hundreds of millions of live events worldwide."
          }
        ],
        "skills": [
          "Executive Leadership",
          "Live Event Experience",
          "Customer Culture",
          "Public Company Leadership",
          "Community Gatherings"
        ],
        "education": [
          {
            "school": "Pepperdine University",
            "degree": "BA in Telecommunications"
          }
        ]
      },
      "instagram": {
        "bio": "Gathering communities through live experiences · Morning yoga & coastal hikes in Marin · SF 🧘‍♀️🌿",
        "postsCount": 540,
        "followersCount": 24000,
        "captions": [
          "Nothing replaces the electrical energy of humans gathering in one room for music or ideas 🎶✨",
          "Morning yoga flow followed by tea on the patio. Grounding into what truly matters 🧘‍♀️🍵",
          "Marin Headlands hike with ocean vistas. Salt air and rolling green ridges 🌊🌲"
        ],
        "hashtags": [
          "#liveexperiences",
          "#eventbrite",
          "#marinhikes",
          "#mindfulliving"
        ],
        "locations": [
          "San Francisco, CA",
          "Marin Headlands",
          "Nashville, TN"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "San Francisco, CA",
        "relationship_goal": "Compassionate, joyful, and equal partnership with an authentic and grounded partner"
      }
    },
    "analysis": {
      "summary": "Julia is the co-founder and CEO of Eventbrite, passionate about bringing people together for live events while grounding her personal life in morning yoga, coastal Marin hikes, and family warmth.",
      "needs": [
        {
          "value": "Shared belief in community and live human connection",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Life mission of bringing people together through live experiences"
        },
        {
          "value": "Emotional steadiness and grounded calm",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Daily morning yoga and intentional grounding rituals"
        },
        {
          "value": "Love of nature and hiking",
          "confidence": 0.91,
          "source": "instagram",
          "snippet": "Marin Headlands ocean trail hiking"
        }
      ],
      "hobbies": [
        {
          "value": "Vinyasa yoga and breathwork",
          "confidence": 0.95,
          "source": "instagram",
          "snippet": "Morning yoga flows and tea on the patio"
        },
        {
          "value": "Coastal hiking across Marin County",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Marin Headlands salt air and ridge trails"
        },
        {
          "value": "Attending live music concerts and indie festivals",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Lifelong passion for live community event energy"
        }
      ],
      "interests": [
        {
          "value": "The psychology of live gatherings and social belonging",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Ticketing and event technology empowering creators"
        },
        {
          "value": "Independent creator economies and music venues",
          "confidence": 0.91,
          "source": "cross-source",
          "snippet": "Advocacy for independent live performance venues"
        }
      ],
      "values": [
        {
          "value": "Human connection as the antidote to loneliness",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Belief that live shared experiences are fundamental to human wellbeing"
        },
        {
          "value": "Empathy and collaborative servant leadership",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Built famous positive team culture recognized across tech"
        }
      ],
      "communication_style": {
        "value": "Warm, gracious, articulate, and deeply present",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Empathetic public addresses and human-centric corporate messaging"
      },
      "lifestyle": {
        "value": "Public company governance balanced with outdoor hikes, yoga, and calm family evenings",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Guiding global platform while maintaining grounding morning practices"
      },
      "ambitions": {
        "value": "Enabling a billion live human gatherings while cultivating deep love, peace, and family joy",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Eventbrite mission paired with harmonious personal life"
      },
      "deal_breakers": [
        "Cold cynicism about gatherings",
        "Inability to connect emotionally",
        "Arrogant selfishness"
      ],
      "conversation_hooks": [
        "The most electric live concert she ever attended",
        "Her favorite ridge hike overlooking the Golden Gate Bridge"
      ]
    }
  },
  {
    "id": "person_23",
    "name": "Steven Bartlett",
    "age": 32,
    "city": "London, UK",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Deep, honest, and loving partnership with an intellectually curious and emotionally healthy woman",
    "linkedin_url": "https://www.linkedin.com/in/steven-bartlett-56986834/",
    "instagram_url": "https://www.instagram.com/steven/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Host at The Diary of A CEO | Founder at Flight Story & thirdweb",
        "about": "Host of Europe's #1 podcast The Diary of A CEO. Dragon on BBC's Dragons' Den. Founder of Flight Story and thirdweb. Passionate about human psychology, health, and business strategy.",
        "positions": [
          {
            "role": "Host & Executive Producer",
            "company": "The Diary of A CEO",
            "duration": "2017 - Present",
            "description": "Interviewing world leaders in science, business, and psychology reaching millions monthly."
          },
          {
            "role": "Co-founder",
            "company": "Flight Story",
            "duration": "2021 - Present",
            "description": "Next-generation marketing, communications, and media company."
          }
        ],
        "skills": [
          "Interviewing & Podcasting",
          "Human Psychology",
          "Media Strategy",
          "Brand Innovation",
          "Health & Fitness"
        ],
        "education": [
          {
            "school": "Manchester Metropolitan University",
            "degree": "Business Management (dropped out after 1 lecture)"
          }
        ]
      },
      "instagram": {
        "bio": "Curious interviewer & speaker · Fitness obsessive & electronic music producer · London 🎙️💪",
        "postsCount": 1540,
        "followersCount": 3800000,
        "captions": [
          "Pre-interview prep on circadian biology and emotional resilience. Curiosity is a superpower 🎙️📖",
          "Heavy morning leg day session in the gym. Discipline is choosing between what you want now and what you want most 💪🔥",
          "Working on deep house music tracks late into the night. Sound engineering resets my creative soul 🎧🎹"
        ],
        "hashtags": [
          "#diaryofaceo",
          "#gymdiscipline",
          "#musicproducer",
          "#curiosityfirst"
        ],
        "locations": [
          "London, UK",
          "Manchester, UK",
          "Los Angeles, CA"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "London, UK",
        "relationship_goal": "High-intimacy, loyal relationship with someone who values personal growth, health, and vulnerability"
      }
    },
    "analysis": {
      "summary": "Steven is the host of The Diary of A CEO and BBC Dragon, blending world-class curiosity and interviewing mastery with intense fitness discipline and deep house music production.",
      "needs": [
        {
          "value": "Deep vulnerability and emotional intelligence",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Dedicated hundreds of podcast hours to deep psychological exploration"
        },
        {
          "value": "Commitment to physical fitness and healthy habits",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Daily rigorous weightlifting and health optimization"
        },
        {
          "value": "Stimulating, open-ended intellectual inquiry",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Interviews world-leading neuroscientists, psychologists, and entrepreneurs"
        }
      ],
      "hobbies": [
        {
          "value": "Heavy weightlifting and metabolic conditioning",
          "confidence": 0.97,
          "source": "instagram",
          "snippet": "Heavy morning leg days and daily gym discipline"
        },
        {
          "value": "Electronic deep house music production and DJing",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Producing electronic house music tracks late at night"
        },
        {
          "value": "Reading behavioral psychology and neuroscience research",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Extensive interview research into human habits and mindsets"
        }
      ],
      "interests": [
        {
          "value": "Neuroscience of human relationships and attachment",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Frequent deep-dive episodes with world leading attachment theorists"
        },
        {
          "value": "Next-generation digital media distribution",
          "confidence": 0.93,
          "source": "linkedin",
          "snippet": "Scaling Flight Story and multi-platform media engines"
        }
      ],
      "values": [
        {
          "value": "Radical self-honesty and continuous self-improvement",
          "confidence": 0.96,
          "source": "cross-source",
          "snippet": "Emphasizes owning mistakes and learning from failure over ego"
        },
        {
          "value": "Discipline as the foundation of true freedom",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Choosing between what you want now and what you want most"
        }
      ],
      "communication_style": {
        "value": "Intensely attentive, empathetic, probing, and calm",
        "confidence": 0.96,
        "source": "cross-source",
        "snippet": "Celebrated interviewing style that draws vulnerability out of guests"
      },
      "lifestyle": {
        "value": "Rigorous routine: early morning gym, intense interview tapings, and late-night music production",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "High-discipline calendar balanced by creative sound design"
      },
      "ambitions": {
        "value": "Building the world's most impactful education and media platform while building a strong, loving family",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Expanding DOAC while seeking an authentic life partner"
      },
      "deal_breakers": [
        "Lack of self-awareness",
        "Unwillingness to communicate emotions",
        "Sedentary disregard for health"
      ],
      "conversation_hooks": [
        "The single podcast interview that changed his mind the most",
        "His favorite synthesizer synth plugin for deep house basslines"
      ]
    }
  },
  {
    "id": "person_24",
    "name": "Jessica Livingston",
    "age": 53,
    "city": "Palo Alto, CA",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    "gender": "woman",
    "seeking": "man",
    "relationship_goal": "Lifelong, deeply committed partnership founded on kindness, quiet dignity, and mutual devotion",
    "linkedin_url": "https://www.linkedin.com/in/jessicalivingston/",
    "instagram_url": "https://www.instagram.com/jessicalivingstonyc/ ",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Co-founder at Y Combinator | Author of Founders at Work",
        "about": "Co-founder of Y Combinator. Author of \"Founders at Work\". Host of The Social Radars podcast. The social glue and moral anchor of early Silicon Valley startup culture. Bucknell University graduate.",
        "positions": [
          {
            "role": "Co-founder & Partner",
            "company": "Y Combinator",
            "duration": "2005 - Present",
            "description": "Co-founded the defining startup accelerator and nurtured thousands of early founders."
          }
        ],
        "skills": [
          "Founder Psychology",
          "Community Building",
          "Oral History",
          "Mentorship",
          "Venture Ethics"
        ],
        "education": [
          {
            "school": "Bucknell University",
            "degree": "BA in English"
          }
        ]
      },
      "instagram": {
        "bio": "Early champion of visionary founders · Podcaster (The Social Radars) · Garden enthusiast & bookworm · Palo Alto 🌿📖",
        "postsCount": 320,
        "followersCount": 14500,
        "captions": [
          "Pruning heritage English roses in the Palo Alto garden. Quiet mornings in the soil bring peace 🌿🌹",
          "Recording The Social Radars: hearing how resilient women and men persevered when everyone said no 🎙️✨",
          "Afternoon tea with an old book. The classics remind us that human nature never really changes ☕📚"
        ],
        "hashtags": [
          "#foundersatwork",
          "#gardeningjoy",
          "#thesocialradars",
          "#paloalto"
        ],
        "locations": [
          "Palo Alto, CA",
          "Cambridge, MA",
          "Mountain View, CA"
        ]
      },
      "self_declared": {
        "gender": "woman",
        "seeking": "man",
        "city": "Palo Alto, CA",
        "relationship_goal": "Peaceful, deeply rooted partnership with an honest, gentle, and intellectually thoughtful man"
      }
    },
    "analysis": {
      "summary": "Jessica is the legendary co-founder of Y Combinator, author of Founders at Work, and host of The Social Radars, revered for her social intuition, rose gardening, and quiet warmth.",
      "needs": [
        {
          "value": "Gentle kindness and complete emotional honesty",
          "confidence": 0.97,
          "source": "cross-source",
          "snippet": "Renowned as the moral heart and empathetic intuitive anchor of YC"
        },
        {
          "value": "Love of domestic peace, reading, and gardens",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "English rose pruning and quiet afternoon tea with classic books"
        },
        {
          "value": "Appreciation for people over superficial status",
          "confidence": 0.95,
          "source": "linkedin",
          "snippet": "Championed early awkward founders who went on to change the world"
        }
      ],
      "hobbies": [
        {
          "value": "Heritage rose gardening and botanical pruning",
          "confidence": 0.96,
          "source": "instagram",
          "snippet": "Pruning English roses in quiet Palo Alto morning garden"
        },
        {
          "value": "Reading historical biographies and English literature",
          "confidence": 0.92,
          "source": "instagram",
          "snippet": "Afternoon tea with classic books and history"
        },
        {
          "value": "Oral history podcasting on entrepreneurship",
          "confidence": 0.94,
          "source": "linkedin",
          "snippet": "Recording The Social Radars and Founders at Work interviews"
        }
      ],
      "interests": [
        {
          "value": "Founder psychology and human motivation under stress",
          "confidence": 0.97,
          "source": "linkedin",
          "snippet": "Interviewed hundreds of legendary tech founders on inner resilience"
        },
        {
          "value": "Landscape architecture and horticulture",
          "confidence": 0.89,
          "source": "instagram",
          "snippet": "Palo Alto garden design and plant cultivation"
        }
      ],
      "values": [
        {
          "value": "Kindness and earnest integrity above intellect alone",
          "confidence": 0.98,
          "source": "cross-source",
          "snippet": "Famous YC selection filter: \"Are they earnestly good people?\""
        },
        {
          "value": "Quiet loyalty and nurturing support",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Stood by early founders when they had zero traction and infinite doubt"
        }
      ],
      "communication_style": {
        "value": "Gentle, attentive, intuitive, and reassuring",
        "confidence": 0.96,
        "source": "cross-source",
        "snippet": "Celebrated for making nervous founders feel safe, seen, and heard"
      },
      "lifestyle": {
        "value": "Peaceful Silicon Valley garden living balanced with intimate podcast interviews and book reading",
        "confidence": 0.93,
        "source": "cross-source",
        "snippet": "Quiet Palo Alto home life paired with podcast recording"
      },
      "ambitions": {
        "value": "Preserving the authentic human stories of innovation while living a quiet, loving, and beautiful family life",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Documenting founder oral history while tending her garden and family"
      },
      "deal_breakers": [
        "Arrogance or cruelty",
        "Social climbing pretension",
        "Cynical disregard for quiet virtues"
      ],
      "conversation_hooks": [
        "Her secret for blooming fragrant heritage roses",
        "The founder who surprised her most during Founders at Work"
      ]
    }
  },
  {
    "id": "person_25",
    "name": "Alexandr Wang",
    "age": 27,
    "city": "San Francisco, CA",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    "gender": "man",
    "seeking": "woman",
    "relationship_goal": "Committed, loving partnership with an ambitious, artistic, and kind-hearted woman",
    "linkedin_url": "https://www.linkedin.com/in/alexandr-wang/",
    "instagram_url": "https://www.instagram.com/alexandr_wang/",
    "is_synthetic": false,
    "consent_at": "2026-09-20T10:00:00Z",
    "created_at": "2026-09-20T10:00:00Z",
    "source_bundle": {
      "linkedin": {
        "headline": "Founder & CEO at Scale AI | Machine Learning Infrastructure",
        "about": "Founder and CEO of Scale AI. Providing foundational data infrastructure for generative AI models, defense systems, and frontier labs. MIT mathematics background. Youngest self-made billionaire.",
        "positions": [
          {
            "role": "Founder & CEO",
            "company": "Scale AI",
            "duration": "2016 - Present",
            "description": "Built AI data platform valued at over $14B powering OpenAI, Meta, and US DoD."
          }
        ],
        "skills": [
          "Machine Learning Infrastructure",
          "AI Data Curation",
          "National Security Tech",
          "Mathematical Modeling",
          "Classical Violin"
        ],
        "education": [
          {
            "school": "MIT",
            "degree": "Mathematics & Computer Science (left early to found Scale)"
          }
        ]
      },
      "instagram": {
        "bio": "Building data foundations for AI · Classical violin player & mathematics nerd · SF 🎻🤖",
        "postsCount": 260,
        "followersCount": 38000,
        "captions": [
          "Practicing Bach Partita No. 2 in D minor on the violin. Mathematical architecture expressed through wood and gut strings 🎻✨",
          "Scale Transform conference stage: the fuel of AI is high-quality human evaluation and reasoning 🤖💻",
          "Late night run across the Golden Gate Bridge under the fog. Cold Pacific wind clears the mind completely 🌉🏃‍♂️"
        ],
        "hashtags": [
          "#scaleai",
          "#classicalviolin",
          "#bachpartita",
          "#sanfrancisco"
        ],
        "locations": [
          "San Francisco, CA",
          "Los Alamos, NM",
          "MIT Cambridge"
        ]
      },
      "self_declared": {
        "gender": "man",
        "seeking": "woman",
        "city": "San Francisco, CA",
        "relationship_goal": "Meaningful, high-trust partnership with someone who loves intellectual discovery and artistic beauty"
      }
    },
    "analysis": {
      "summary": "Alexandr is the founder and CEO of Scale AI, combining MIT mathematical brilliance and frontier AI infrastructure leadership with classical Bach violin playing and midnight bridge runs.",
      "needs": [
        {
          "value": "Intellectual depth and respect for technical/mathematical rigor",
          "confidence": 0.96,
          "source": "linkedin",
          "snippet": "MIT Mathematics and Founder/CEO of $14B Scale AI"
        },
        {
          "value": "Appreciation for classical music and acoustic craft",
          "confidence": 0.94,
          "source": "instagram",
          "snippet": "Daily practice of Bach violin partitas"
        },
        {
          "value": "Calm emotional grounding amid massive global responsibility",
          "confidence": 0.92,
          "source": "cross-source",
          "snippet": "Navigating frontier AI and defense partnerships with steady composure"
        }
      ],
      "hobbies": [
        {
          "value": "Classical solo violin performance (Bach & Paganini)",
          "confidence": 0.97,
          "source": "instagram",
          "snippet": "Practicing Bach Partita No. 2 in D minor"
        },
        {
          "value": "Late night running across the Golden Gate Bridge",
          "confidence": 0.93,
          "source": "instagram",
          "snippet": "Running across the bridge in cold Pacific fog"
        },
        {
          "value": "Mathematical physics problem solving",
          "confidence": 0.91,
          "source": "linkedin",
          "snippet": "MIT Mathematics and Los Alamos physics roots"
        }
      ],
      "interests": [
        {
          "value": "Frontier AI alignment and human reinforcement data",
          "confidence": 0.98,
          "source": "linkedin",
          "snippet": "Providing foundational training data for frontier frontier models"
        },
        {
          "value": "National security and democratic technological supremacy",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Public testimony and partnerships with the Department of Defense"
        }
      ],
      "values": [
        {
          "value": "Mission-driven patriotism and defense of open societies",
          "confidence": 0.95,
          "source": "cross-source",
          "snippet": "Advocating for democratic technological leadership in AI"
        },
        {
          "value": "Discipline and pursuit of absolute excellence",
          "confidence": 0.94,
          "source": "cross-source",
          "snippet": "Mastering classical violin alongside building a generation-defining company"
        }
      ],
      "communication_style": {
        "value": "Precise, analytical, respectful, and articulate",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Direct, clear testimony before Congress and thoughtful industry keynotes"
      },
      "lifestyle": {
        "value": "High-intensity tech and national security leadership balanced with late-night violin practice and fog runs",
        "confidence": 0.92,
        "source": "cross-source",
        "snippet": "Intense company operations balanced by classical violin discipline"
      },
      "ambitions": {
        "value": "Ensuring democratic leadership in the AI age while building an enduring, warm, and loving family",
        "confidence": 0.94,
        "source": "cross-source",
        "snippet": "Scale AI global mission paired with personal joy and classical music"
      },
      "deal_breakers": [
        "Intellectual dishonesty",
        "Anti-American or cynical nihilism",
        "Lack of personal discipline"
      ],
      "conversation_hooks": [
        "Why Bach's Chaconne is the greatest piece of music ever written",
        "Growing up in Los Alamos surrounded by physicists"
      ]
    }
  }
];
