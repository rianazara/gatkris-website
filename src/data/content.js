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
    'I have always been drawn to systems that reveal hidden patterns: music, mathematics, markets, movement, and now AI products.',
    'I started as a software engineer at ServiceNow, building enterprise UI systems used by large-scale customers. At Amazon, I moved closer to product strategy, designing AI-powered reading and sampling experiences across Kindle, web, and mobile. At Foster, I sharpened the business side: strategy, pricing, analytics, finance, and product judgment.',
    'I care about elegance — in products, writing, interfaces, and personal style.',
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
    phrase: 'Endurance.',
    title: 'Half Marathon Finisher',
    reflection: 'The ability to stay with hard things is underrated.',
    image: asset('img/signal-marathon.jpg'),
  },
  {
    phrase: 'Early academic signal.',
    title: 'National Talent Search Scholar',
    reflection: 'A reminder that curiosity became a habit early.',
    image: asset('img/signal-ntse.jpg'),
  },
]

export const tickerItems = [
  'National Yoga Champion',
  'State-level Music Winner',
  'Half Marathon Finisher',
  'International Math Olympiad Rank 12',
  'National Talent Search Scholar',
]

export const projects = [
  {
    name: 'AI Finance Copilot',
    thesis: 'Finance teams do not need another dashboard. They need an agent that catches judgment gaps before money moves.',
    bullets: [
      'Built an AI workflow for invoices, receipts, contracts, reimbursements, and vendor risk.',
      'Designed anomaly detection, approval routing, accounting mappings, and duplicate charge detection.',
      "Explored how AI can become a finance team's operating layer, not just a chatbot.",
    ],
    video: null,
    image: asset('img/project-1.jpg'),
  },
  {
    name: 'Project 2',
    thesis: 'Thesis coming soon.',
    bullets: [
      'User problem placeholder.',
      'What I built placeholder.',
      'Product insight placeholder.',
    ],
    video: null,
    image: asset('img/project-2.jpg'),
  },
  {
    name: 'Project 3',
    thesis: 'Thesis coming soon.',
    bullets: [
      'User problem placeholder.',
      'What I built placeholder.',
      'Product insight placeholder.',
    ],
    video: null,
    image: asset('img/project-3.jpg'),
  },
]

export const productTaste = [
  'AI should reduce cognitive load, not create another inbox.',
  'Great products feel inevitable after you use them.',
  'Taste matters because users feel friction before they can explain it.',
  'The best PMs combine data, intuition, and moral judgment.',
  'I like products that make people more capable.',
]

export const operatingSystem = [
  {
    label: 'Think deeply',
    items: ['AI', 'philosophy', 'markets', 'product strategy'],
  },
  {
    label: 'Build quickly',
    items: ['demos', 'prototypes', 'PM artifacts', 'technical systems'],
  },
  {
    label: 'Communicate clearly',
    items: ['music', 'storytelling', 'executive narratives', 'product memos'],
  },
  {
    label: 'Stay disciplined',
    items: ['yoga', 'running', 'endurance', 'daily compounding'],
  },
]

export const exploring = [
  'AI agents for finance and investing',
  'How great PMs build taste',
  'Stock market decision systems',
  'Google-scale product thinking',
  'Human judgment in AI workflows',
  'Elegant interfaces for complex decisions',
]

export const experience = [
  {
    company: 'Amazon',
    role: 'Sr. Product Manager - Technical',
    logo: asset('img/exp-1.jpg'),
    description:
      'Led next-gen Book Sample experience from concept to launch across web, mobile, and Kindle — winning $900K VP-level investment and architecting LLM-powered workflows across 6 organizations.',
    dates: 'July 2024 - Now',
    place: 'Seattle, WA',
  },
  {
    company: 'Microsoft',
    role: 'MBA Consultant',
    logo: asset('img/exp-2.png'),
    description:
      'Authored the Phase 2 enterprise GTM strategy for Microsoft Copilot — scoping launch sequencing, adoption metrics, and change-management for large-scale rollout, briefed directly to product leaders.',
    dates: 'August 2022 - June 2024',
    place: 'Seattle, WA',
  },
  {
    company: 'ServiceNow',
    role: 'Software Engineer 2',
    logo: asset('img/exp-3.svg'),
    description:
      '5+ years as a full-stack engineer, shipping UI components and owning platform-wide roadmaps for UI experiences used by 1,000+ enterprise customers.',
    dates: 'September 2017 - July 2022',
    place: 'San Diego, CA',
  },
]
