export const asset = (p) => import.meta.env.BASE_URL + p

export const profile = {
  location: 'Seattle, WA',
  timezone: 'America/Los_Angeles',
  name: 'Gayatri Gopalakrishnan',
  title: 'Former ServiceNow engineer, Amazon PM-T, Foster MBA, and lifelong pattern-seeker across AI, markets, music, and movement.',
  avatar: asset('img/avatar.jpg'),
  resume: asset('resume.pdf'),
  email: 'gayatrigopu@gmail.com, gaya3g@uw.edu',
  companies: [
    { name: 'Amazon', logo: asset('img/exp-1.jpg') },
    { name: 'ServiceNow', logo: asset('img/exp-3.svg') },
  ],
  contacts: [
    {
      label: 'E-mail',
      value: 'gayatrigopu@gmail.com',
      href: 'mailto:gayatrigopu@gmail.com, gaya3g@uw.edu',
    },
    {
      label: 'LinkedIn',
      value: '/in/gayatri-gopalakrishnan',
      href: 'https://www.linkedin.com/in/gayatri-gopalakrishnan',
    },
  ],
  about: [
    'I love making products better. Enriching human lives by building solutions to problems we face excites me, satisfies me.',
    'I have a background in Computer Science, and a history of leading projects and engineering teams to release large-scale products with elegant, intuitive user experiences. Lately, I’ve been enjoying the process of using AI tools to build impactful, human-centered solutions.',
  ],
}

export const achievements = [
  {
    phrase: 'Discipline under pressure.',
    title: 'National Yoga Champion',
    reflection: 'Years before product management, I learned how consistency compounds.',
    image: asset('img/signal-yoga.jpg'),
  },
  {
    phrase: 'Patience meets precision.',
    title: 'Sudoku National Best 2 / Global Best 3',
    reflection: 'Every constraint narrows the search space — in puzzles and in product decisions.',
    image: asset('img/signal-sudoku.jpg'),
  },
  {
    phrase: 'Storytelling on stage.',
    title: 'State-level Light Music Winner',
    reflection: 'Music taught me timing, emotion, and audience awareness.',
    image: asset('img/signal-music.jpg'),
  },
  {
    phrase: 'Structured problem-solving.',
    title: 'International Math Olympiad Rank 12',
    reflection: 'Pattern recognition has always been my default language.',
    image: asset('img/signal-math.jpg'),
  },
  {
    phrase: 'Early academic signal.',
    title: 'National Talent Search Scholar',
    reflection: 'A reminder that curiosity became a habit early.',
    image: asset('img/signal-ntse.jpg'),
    imagePosition: 'center 5%',
  },
  {
    phrase: 'Endurance.',
    title: 'Half Marathon Finisher',
    reflection: 'The ability to stay with hard things is underrated.',
    image: asset('img/signal-marathon.jpg'),
  },
]

export const tickerItems = [
  'National Yoga Champion',
  'Sudoku National Best 2',
  'State-level Music Winner',
  'Half Marathon Finisher',
  'International Math Olympiad Rank 12',
  'National Talent Search Scholar',
]

export const projects = [
  {
    name: 'Application Studio',
    type: 'flagship',
    status: 'Live',
    category: 'AI Workflow',
    tagline: "An AI workflow that decides which jobs are worth applying to, tailors my resume from what's already true, and drafts outreach that gets a reply.",
    description: "One workflow with four moves. First, a gate that screens out roles not worth my time. Second, a resume pass that reorders and lifts from my 3-page master doc without inventing anything or keyword-stuffing. Third, an outreach pack of four messages tuned to the reader (alum, hiring manager, recruiter, connection invite). Fourth, a bundle organized by date and company. Application forms are autofilled through Simplify, and I confirm before submitting. The whole thing runs on one rule. Same facts, different protagonist.",
    time: {
      before: '2 to 3 hrs per role',
      after: 'about 20 min per role',
      reduction: '~85% less time',
    },
    details: [
      "Signal-to-apply gate that reads the JD and refuses to tailor when the role isn't honestly worth an hour",
      'Semantic tailoring loop with recruiter, HM, and ATS review passes for one page, real hyperlinks, and no fabricated metrics',
      'Warm-but-genuine outreach pack with a referral request, an HM or recruiter message, and two under-300-char connection notes',
      'Ranked LinkedIn networking shortlist filtered by shared alma mater, mutual connections, and role relevance',
      'Per-role bundle with a resume PDF, an editable docx, an alignment assessment, a verification list, outreach, networking, a JD summary, and a tracker row',
    ],
    stack: ['Claude Agent SDK', 'Claude Skills', 'Python', 'LinkedIn', 'Simplify'],
    href: '#products/application-studio',
    hrefLabel: 'Read the story',
    preview: 'appstudio',
  },
  {
    name: 'Archived',
    type: 'flagship',
    status: 'Expanding',
    category: 'AI Knowledge System',
    tagline: "My second brain. It extends Karpathy's LLM Wiki into a full knowledge archive.",
    description: "Started from Andrej Karpathy's LLM Wiki pattern, where an LLM incrementally builds and maintains a persistent, interlinked wiki from raw sources instead of re-deriving knowledge on every query. I extended it into a Claude Code skill that ingests any public URL, articles, newsletters, YouTube videos, Instagram reels, and downloaded files, then compiles them into a living knowledge graph where connections compound over time. The published skill is open-source, and the larger product vision is in progress.",
    time: {
      before: 'about 30 min per source',
      after: 'about 3 min per source',
      reduction: '~90% less time',
    },
    details: [
      "Extends Karpathy's LLM Wiki with multi-source ingestion for public URLs, articles, newsletters, YouTube, Reels, and file uploads",
      'Added a knowledge graph layer that maps and surfaces connections across saved artifacts, so it is not just retrieval, but synthesis',
      'Runs as a Claude Code skill today. I can store, search, revise, and quiz against my own knowledge base in plain markdown',
    ],
    stack: ['Claude Skill', 'Claude API', 'Python', 'Markdown'],
    href: 'https://github.com/rianazara/archived',
    preview: 'animus',
  },
]

export const productPrototypes = [
  {
    name: 'SaaS Pricing Assistant',
    type: 'shipped',
    status: 'Live',
    category: 'SaaS Tool',
    tagline: 'SaaS pricing strategy, simulated in real time.',
    description: 'An interactive pricing advisor I built to help founders stop guessing their price points. It models revenue impact across tiers, runs elasticity scenarios, benchmarks against market data, and surfaces AI-driven pricing recommendations.',
    time: {
      before: 'about 4 hrs per pricing decision',
      after: 'about 15 min per pricing decision',
      reduction: '~94% less time',
    },
    details: [
      'Live revenue modeling with price elasticity around 0.6 baked into every calculation',
      'Scenario analysis that answers questions like what happens to MRR when Enterprise pricing goes up 20 percent',
      'AI advisor that critiques pricing strategy and suggests improvements',
    ],
    stack: ['React', 'TypeScript', 'Lovable', 'AI Advisor'],
    href: 'https://price-whisperer-41.lovable.app',
    preview: 'pricewhisperer',
  },
]

export const productVisions = [
  {
    name: 'Google Finance Beta',
    tagline: 'What if Google rebuilt finance tools with AI-native reasoning?',
    description: 'A product vision document reimagining stock screening, portfolio analytics, and investment research through the lens of Google-scale AI. Not as a feature list, but as a fundamentally different way to interact with financial data.',
    href: 'https://claude.ai/code/artifact/ceda3365-0ef7-4d30-ae68-a05154e4424f',
  },
]


export const experience = [
  {
    company: 'Amazon',
    role: 'Sr. Product Manager - Technical',
    logo: asset('img/exp-1.jpg'),
    description:
      'Led strategy and roadmap for Amazon’s next-gen Book Sample experience across web, mobile, and Kindle, winning $900K VP-level multi-org investment to capture a $2.5B market opportunity. Architected the LLM-powered sample generation workflow across 6 organizations, modeled a 500x reduction in manual effort and $1.6B+ incremental revenue, and shipped a production analytics dashboard live today.',
    dates: 'Jun 2025 – Sep 2025',
    place: 'Seattle, WA',
  },
  {
    company: 'ServiceNow',
    role: 'Software Development Engineer 2 & Tech Lead',
    logo: asset('img/exp-3.svg'),
    description:
      'Led engineering for core API and UX components used by 5,000+ enterprise customers across ITSM, CSM, and HRSD. Cleared a 320+ defect backlog in 2.5 months, championed WCAG 2.1 AAA compliance across 50+ components earning the Q1 2024 Employee Award, and co-led re-engineering of Activity Stream achieving 65% latency reduction and 40% customer growth post-launch. Hackathon prototype was adopted into production and contributed to 20 deals worth $1.1M+.',
    dates: 'Jul 2019 – Aug 2024',
    place: 'Hyderabad, India',
  },
  {
    company: 'Microsoft',
    role: 'MBA Consultant – Copilot GTM',
    logo: asset('img/exp-2.png'),
    description:
      'Presented a Phase 2 GTM strategy for Microsoft Copilot, scoping launch sequencing, adoption metrics, and change-management plays for large-scale enterprise deployment, briefed directly to Microsoft product leaders.',
    dates: 'Jan 2025',
    place: 'Redmond, WA',
  },
]
