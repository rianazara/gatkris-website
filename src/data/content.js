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
    name: 'Archived',
    type: 'flagship',
    status: 'Expanding',
    category: 'AI Knowledge System',
    tagline: 'My second brain — extending Karpathy\'s LLM Wiki into a full knowledge archive.',
    description: 'Started from Andrej Karpathy\'s LLM Wiki pattern — where an LLM incrementally builds and maintains a persistent, interlinked wiki from raw sources instead of re-deriving knowledge on every query. I extended it into a Claude Code skill that ingests any public URL, articles, newsletters, YouTube videos, Instagram reels, and downloaded files, then compiles them into a living knowledge graph where connections compound over time. The published skill is open-source; the larger product vision is in progress.',
    details: [
      'Extends Karpathy\'s LLM Wiki with multi-source ingestion: public URLs, articles, newsletters, YouTube, Reels, and file uploads',
      'Added a knowledge graph layer that maps and surfaces connections across saved artifacts — not just retrieval, but synthesis',
      'Runs as a Claude Code skill today — store, search, revise, and quiz against my own knowledge base in plain markdown',
    ],
    stack: ['Claude Skill', 'Claude API', 'Python', 'Markdown'],
    href: 'https://github.com/rianazara/archived',
    preview: 'animus',
  },
  {
    name: 'Price Whisperer',
    type: 'shipped',
    status: 'Live',
    category: 'SaaS Tool',
    tagline: 'SaaS pricing strategy, simulated in real time.',
    description: 'An interactive pricing advisor I built to help founders stop guessing their price points — it models revenue impact across tiers, runs elasticity scenarios, benchmarks against market data, and surfaces AI-driven pricing recommendations.',
    details: [
      'Live revenue modeling with price elasticity (~0.6) baked into every calculation',
      'Scenario analysis: what happens to MRR when Enterprise pricing goes up 20%?',
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
    description: 'A product vision document reimagining stock screening, portfolio analytics, and investment research through the lens of Google-scale AI — not as a feature list, but as a fundamentally different way to interact with financial data.',
    category: 'Product Vision',
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
