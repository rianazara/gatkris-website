export const fieldNotes = [
  {
    number: '001',
    title: "Why “AI Fluent” Isn't Specific Enough",
    question: "What do we actually mean when we say someone is “AI fluent”?",
    date: 'February 2026',
    category: 'observation',
    status: 'active',
    body: [
      "Over the last year, I've noticed that companies want AI-fluent employees, universities are launching AI fluency programs, recruiters are searching for AI-native talent, and product managers are adding AI fluency to their resumes. Clearly, everyone seems to agree it's becoming an essential skill.",

      "At first, I didn't think much of it. My own understanding of AI fluency was fairly simple. Knowing how to use AI to get useful output, and being able to understand and participate in conversations around AI. That seemed reasonable to me.",

      "Then I started paying closer attention.",

      "I kept seeing the phrase used in job descriptions, course brochures, and conference talks, but almost never explained. Everyone seemed to know they wanted AI fluency, yet the more I looked for a definition, the less certain I became that all of them meant the same thing.",

      "When someone says they're “AI fluent,” or that they're looking for someone who is, what are they really claiming?",

      {
        type: 'stanza',
        lines: [
          'Is it understanding how large language models work?',
          'Is it writing effective prompts?',
          'Is it building applications with AI?',
          'Is it automating workflows with AI?',
          "Is it knowing when AI can solve a problem, but also recognizing when it shouldn't?",
          'Or is it simply knowing how to collaborate effectively with AI?',
        ],
      },

      "Read that list again.",

      "You'll realize that those aren't different levels of the same skill.",

      "They're different skills altogether. Yet we routinely lump them all into a single phrase, “AI fluency,” as though it describes one coherent capability.",

      "I'm not convinced they can all be put under one phrase.",

      "Imagine three people.",

      {
        type: 'list',
        items: [
          { term: 'Person A', def: 'uses Claude for 10 hours every day. They write excellent prompts, get impressive outputs quickly, and know how to make the model produce exactly what they want. They rarely question what it produces.' },
          { term: 'Person B', def: 'spends much less time using AI. Instead, they challenge almost every output, compare models, build evaluation workflows, and redesign their work around what AI does well and what it consistently gets wrong.' },
          { term: 'Person C', def: 'hardly prompts AI directly anymore. They build agents and loops, orchestrate MCP integrations, create automations, and design evaluation pipelines that allow AI systems to work together.' },
        ],
      },

      "Who is the most AI fluent?",

      "If you have an immediate answer, pause for a moment and ask yourself why. What made you choose them?",

      {
        type: 'stanza',
        lines: [
          'Was it because one person uses more sophisticated tools?',
          'Because they know the AI parseltongue?',
          'Because they can make AI generate useful code?',
          'Because they automate more instead of prompting?',
          "Or because they've become better at working with AI as a team of digital employees?",
        ],
      },

      "In fact, your answer probably reveals more about how you define AI fluency than it does about the three people themselves.",

      "Look at them again and notice that what separates them isn't really how much AI they use. It's the relationship they have with it.",

      {
        type: 'stanza',
        lines: [
          'Person A interacts with AI.',
          'Person B evaluates AI.',
          'Person C designs systems around AI.',
        ],
      },

      "Those are fundamentally different capabilities, yet we've been describing all three with the same phrase.",

      "Let me make it clearer. Think of these roles. Frontend engineer, backend engineer, compiler engineer, network engineer, quality engineer, and theoretical computer scientist.",

      "Nobody would argue they're the same profession simply because they all involve computers. We know how different those disciplines are because the field has matured enough to develop a richer vocabulary. We stopped describing people by the technology they use and started describing them by the work they actually do.",

      "Imagine a hiring manager today saying, “I'm looking for someone who's computer fluent.”",

      "It sounds almost meaningless, right? Not because computers aren't important, but because the phrase no longer tells us anything useful about what that person actually knows how to do.",

      "I wonder if we're at the same point with AI.",

      "The phrase isn't failing because it's incorrect. It's failing because it's trying to describe a collection of capabilities that have already started separating.",

      "I suspect part of the reason it persists is because its ambiguity is useful. A recruiter can ask for AI fluency without deciding which capability the role actually demands. A candidate can claim AI fluency without explaining what they're particularly good at.",

      "Nobody in that exchange is being dishonest. They're simply using a phrase broad enough that each person fills in their own definition.",

      "The more I think about it, the less convinced I become that “AI fluent” is a useful description of a person.",

      "It may have been a useful umbrella term when our interactions with AI looked similar. But today, those interactions are already beginning to diverge.",

      {
        type: 'stanza',
        lines: [
          "And perhaps the first step toward measuring AI capability isn't building a better assessment.",
          "It's becoming much more precise about what we're really trying to measure.",
        ],
      },
    ],
  },
  {
    number: '000',
    title: 'Before We Begin',
    question: 'What is this notebook for?',
    date: 'July 2025',
    category: 'reflection',
    status: 'active',
    body: [
      "This notebook isn't a collection of answers. It's a record of questions that refused to leave me alone.",

      "There is a temptation, when building products, to document only what works.",

      {
        type: 'stanza',
        lines: [
          'The polished launch.',
          'The successful experiment.',
          'The shipped feature.',
          'The lesson learned in hindsight.',
        ],
      },

      "Over time, I realized that those were rarely the most interesting parts of the work.",

      {
        type: 'stanza',
        lines: [
          'The moments that changed my thinking almost never looked like success.',
          'They looked like discovering that I had been asking the wrong question.',
          "Or realizing that a product I had become excited about solved a problem that didn't actually exist.",
          "Or abandoning weeks of work because a single observation invalidated an assumption I hadn't questioned closely enough.",
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Those moments rarely appear in portfolios.',
          "They're usually compressed into a sentence like “we pivoted” or disappear entirely.",
        ],
      },

      "I think that's a loss.",

      "Because those moments are where judgment is built.",

      "This notebook exists because I wanted a place to preserve that part of the process.",

      {
        type: 'stanza',
        lines: [
          'Not just the products that were built.',
          'But the reasoning that led to them.',
          'The assumptions that survived.',
          "The ones that didn't.",
          'The questions that became more interesting than their answers.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Every note begins with a question.',
          'Not because questions are inherently more valuable than answers.',
          "But because I've found that the quality of a product is often constrained by the quality of the question that produced it.",
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Sometimes the answer is a product.',
          "Sometimes it's a framework.",
          "Sometimes it's the realization that the original question wasn't worth answering.",
        ],
      },

      "I consider all three outcomes equally valuable.",

      {
        type: 'stanza',
        lines: [
          "You'll find ideas here that eventually became products.",
          "You'll also find ideas that never should have become products.",
        ],
      },

      {
        type: 'stanza',
        lines: [
          'There are investigations that end with confidence.',
          'Others end with uncertainty.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Some notes will age well.',
          "Others won't.",
        ],
      },

      "I'm deliberately leaving both in place.",

      "If this notebook only preserved the conclusions that turned out to be correct, it wouldn't be an honest record of how my thinking evolved.",

      {
        type: 'stanza',
        lines: [
          'The internet tends to reward certainty.',
          'Building products rarely does.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          "The best product decisions I've been part of didn't come from defending an opinion more forcefully.",
          'They came from noticing that reality disagreed with one of my assumptions.',
        ],
      },

      "That's the moment I care most about preserving.",

      {
        type: 'stanza',
        lines: [
          'Not because changing your mind is admirable on its own.',
          'Because every meaningful improvement in judgment begins there.',
        ],
      },

      "That also means this notebook comes with an implicit contract.",

      {
        type: 'stanza',
        lines: [
          "I won't pretend every conclusion here is correct.",
          "Some won't be.",
        ],
      },

      "When I encounter evidence that materially changes my thinking, I'll update the note instead of quietly pretending I never held the earlier view.",

      "The revision is part of the work.",

      "If a note never changes, it probably means I stopped asking whether it still reflects reality.",

      "This also isn't a collection of opinions.",
      "Whenever possible, I want readers to distinguish between four different things:",

      {
        type: 'list',
        items: [
          { term: 'Observation', def: 'something I experienced directly or repeatedly noticed.' },
          { term: 'Evidence', def: 'research, data, papers, conversations, or documented facts that informed my thinking.' },
          { term: 'Interpretation', def: 'the mental model I currently use to explain those observations.' },
          { term: 'Speculation', def: 'where I think things might be headed, and why.' },
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Those categories matter.',
          'Conflating them is one of the easiest ways to become confidently wrong.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          "You'll probably notice another pattern.",
          "Many of these notes don't end with certainty.",
          'They end with a decision.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Sometimes that decision is to build.',
          "Sometimes it's to pause.",
          "Sometimes it's to archive an idea entirely.",
        ],
      },

      "Occasionally, the most valuable outcome of an investigation is replacing an interesting product idea with a better question.",

      {
        type: 'stanza',
        lines: [
          'I no longer think of those investigations as failures.',
          "In many cases, they're the reason later ideas became stronger.",
        ],
      },

      {
        type: 'stanza',
        lines: [
          "If you're reading this because of a product I built, I hope these notes explain how that product came to exist.",
          "If you're reading this because you're interested in AI, I hope you find ideas worth challenging rather than conclusions worth repeating.",
          "And if you're reading this because you're trying to understand how I think, then this notebook is probably the most accurate representation I can offer.",
        ],
      },

      {
        type: 'stanza',
        lines: [
          'Not because it captures every idea.',
          'Because it captures how those ideas changed.',
        ],
      },

      {
        type: 'stanza',
        lines: [
          "I don't know what this notebook will look like five years from now.",
          'I hope many of these notes will have been revised.',
          'I hope several predictions will have been proven wrong.',
          "I hope I'll look back at some of my earlier reasoning and realize how much I still had to learn.",
        ],
      },

      "If that happens, then this notebook will be doing exactly what I intended it to do.",

      {
        type: 'stanza',
        lines: [
          'Not preserve certainty.',
          'Preserve the evolution of judgment.',
        ],
      },

      "So before we begin, one request.",

      {
        type: 'stanza',
        lines: [
          "Don't read these notes looking for definitive answers.",
          'Read them as snapshots of an ongoing investigation.',
        ],
      },

      "If a page leaves you with a better question than the one you started with, then it has done its job.",

      {
        type: 'stanza',
        lines: [
          'Welcome.',
          "Let's begin.",
        ],
      },
    ],
  },
]

export const fieldNoteCategories = [
  { id: 'reflection', label: 'Reflection', color: 'var(--accent)' },
  { id: 'investigation', label: 'Investigation', color: '#5B8DEF' },
  { id: 'framework', label: 'Framework', color: '#6BBF6B' },
  { id: 'observation', label: 'Observation', color: '#D97B5D' },
]
