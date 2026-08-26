export const fieldNotes = [
  {
    number: '001',
    title: "Why “AI Fluent” Isn't Specific Enough",
    question: "What do we actually mean when we say someone is “AI fluent”?",
    date: 'February 2026',
    category: 'observation',
    status: 'active',
    body: [
      "Over the last year, I've noticed the phrase AI fluency showing up almost everywhere. Companies want AI-fluent employees, universities are launching AI fluency programs, recruiters are searching for AI-native talent, and product managers are adding AI fluency to their resumes. Everyone seems to agree it's becoming an important skill, and until recently, I agreed too.",

      "If someone had asked me what AI fluency meant a year ago, I probably would've said it meant knowing how to use AI to get useful output and being able to understand and participate in conversations around AI. I hadn't spent much time questioning that definition because it felt obvious enough.",

      "Then one afternoon, after reading a few job descriptions asking for AI-fluent candidates, I opened Notes and typed a simple question at the top of a blank page:",

      { type: 'callout', text: 'What is AI fluency?' },

      "I thought I'd answer it in one sentence.",

      "Instead, I ended up with a list.",

      {
        type: 'questions',
        items: [
          'Is it understanding how large language models work?',
          'Writing effective prompts?',
          'Building AI applications?',
          'Automating workflows?',
          'Designing agents?',
          'Building evaluation pipelines?',
          'Knowing when *not* to use AI?',
          'Or simply learning how to collaborate effectively with another intelligence?',
        ],
      },

      "Every time another capability came to mind, I added it to the definition. At first, I thought I was simply making it more complete. But somewhere around *evaluation pipelines*, I stopped and wondered:",

      { type: 'callout', text: 'Wait… am I still defining the same thing?' },

      "My first explanation was that these were probably different levels of the same capability. Perhaps you start by learning to prompt, then become better at evaluating outputs, then automate more of your work, and eventually start building systems around AI. That sounds reasonable until you try to map actual people onto it.",

      "Imagine three people.",

      {
        type: 'bullets',
        items: [
          '**Person A** uses Claude for ten hours a day. They write excellent prompts, get impressive outputs quickly, and know exactly how to make the model produce what they want. They rarely question what it produces.',
          '**Person B** spends much less time using AI, but challenges almost every output, compares models, builds evaluation workflows, and redesigns their work around what AI consistently does well and what it consistently gets wrong.',
          '**Person C** hardly prompts AI directly anymore. They build agents, orchestrate MCP integrations, create automations, and design evaluation pipelines that allow AI systems to work together.',
        ],
      },

      "Who would you call AI fluent?",

      "Ok, pause for a moment and ask yourself why. Was it because one of them uses more sophisticated tools? Because they can make AI generate useful code? Because they've moved beyond prompting into automation? Because they know what people jokingly call the “AI parseltongue”? Or because they've become good at working with AI as a team of digital employees?",

      "Whatever answer you land on probably says as much about your own definition of AI fluency as it does about the three people. What separates them isn't really how much AI they use. It's the **relationship they have with it**. Person A primarily interacts with AI, Person B evaluates it, and Person C designs systems around it.",

      { type: 'emphasis', text: "Those aren't different levels of the same skill. They are different skills." },

      "At that point, I thought I had found the problem. Maybe nobody had ever really defined AI fluency.",

      "So, I simply looked it up.",

      "Universities had definitions, researchers had definitions, governments had definitions. Anthropic had an entire framework.",

      "Honestly, I didn't expect that.",

      "But the problem wasn't a lack of definitions. If anything, I had found the opposite. I was looking at a field with many different definitions. Some emphasized judgment, others productivity. Some focused on understanding AI, while others focused on collaborating effectively with it. The more definitions I read, the harder it became to believe that everyone using the phrase was necessarily describing one coherent capability.",

      "That's when the comparison with computing became more interesting to me.",

      {
        type: 'stanza',
        lines: [
          'Imagine a hiring manager today saying,',
          '“We’re looking for someone who’s computer fluent.”',
        ],
      },

      "It sounds almost meaningless, not because computers aren't important, but because “computer” tells us almost nothing about what someone can actually do. We talk instead about frontend engineers, backend engineers, security engineers, compiler engineers, machine learning researchers, theoretical computer scientists. As computing matured, the work became specialized enough that the language had to become more precise too.",

      "I think AI is somewhere in that transition.",

      "Maybe AI fluent isn't becoming less useful because the phrase is wrong.",

      { type: 'emphasis', text: "Maybe it's becoming less useful because it's trying to describe a set of capabilities that have already started separating while our language still treats them as one thing." },

      "The ambiguity itself explains why the phrase survives. A recruiter can ask for AI fluency without deciding exactly which capability the role requires, and a candidate can claim AI fluency without explaining precisely where their strengths lie. Nobody in that exchange is necessarily being dishonest. The phrase is simply broad enough that both sides can quietly supply their own meaning.",

      "I eventually ran the same thought experiment on myself. A year ago, I would've described myself as AI fluent without thinking twice about it. Today, I recognize myself as an amalgam of B and C. The Person B in me still spends a lot of time questioning outputs, comparing approaches, thinking about evaluation, and figuring out where AI should and shouldn't sit inside a workflow. But more of my work is shifting toward Person C, building with agents and loops, connecting tools, writing evals, designing workflows around AI agents, and thinking less about the quality of an individual prompt and more about the system around it.",

      "That distinction turned out to be useful because “become more AI fluent” gives me almost nothing to work toward. Becoming better at designing AI systems, building reliable evaluations, or orchestrating tools into useful workflows does. Once I separated those capabilities, I could actually see where I was strong, where I wasn't, and what I wanted to practice next.",

      "Looking back, I think I started this investigation trying to define AI fluency. I'm no longer sure that was the interesting part. I think I was watching a new discipline begin to outgrow one of its first pieces of vocabulary.",

      "Perhaps that's what happens when a field changes faster than the language around it. The work separates first, and the words catch up later.",

      "If that's true, then perhaps the first step toward measuring AI capability isn't building a better assessment.",

      { type: 'emphasis', text: "It's becoming much more precise about what we're actually trying to measure." },
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
