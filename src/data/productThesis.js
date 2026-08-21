export const productThesis = {
  title: 'Where the Framework Ends',
  subtitle: 'A reflection of my understanding of product management.',
  date: 'August 2025',
  body: [
    "I stepped into the summer of '25 with a fairly clean model of product management: a customer has a problem, the PM understands it, gathers evidence, develops a hypothesis, evaluates the alternatives, aligns the org, prioritizes, builds.",

    "A straightforward, useful model. Nothing wrong with it, really. I just no longer think the most interesting part of the job lives inside it.",

    "I spent the summer working as a Senior Technical Product Manager intern at Amazon, trying to understand an existing product deeply enough to decide what it should become, and then convince other people of that direction.",

    "By the end of summer that neat little sequence had come apart in ways I hadn't anticipated.",

    "The customer could often describe the pain, but not the problem. The data I wanted often didn't exist, and the data that did exist had an annoying habit of answering a slightly different question from the one I was asking. The people around me rarely held the whole picture either. And assembling more of that picture rarely made the decision obvious, it simply made the tradeoffs harder to ignore. Several solutions were defensible at once, and thoughtful people looking at the same evidence still disagreed for perfectly reasonable reasons.",

    "Despite all of that, someone still had to decide what the product ought to become.",

    "I walked in thinking a good PM finds clarity before making decisions. I left believing a great PM learns how to create **enough clarity to make a good decision** when complete clarity isn't coming.",

    "On paper that sounds like a small distinction. In practice, I think it defines much of the job.",

    { type: 'heading', number: 1, text: 'Product understanding lives in pieces' },

    "Before I could create clarity, I had to understand what I was looking at. That was obvious but doing it turned out not to be. What I hadn't thought about was where that understanding lived, or whether it existed in one place at all. I had quietly assumed product understanding would be more centralized than it was. Instead, I kept finding pieces.",

    "The technical history lived with one engineer, a customer pattern lived with one CSM, someone else remembered why a seemingly strange decision had been made two years earlier, a piece of context that had quietly disappeared everywhere else. An adjacent team knew about a dependency that completely changed how I should have been thinking about the experience, and I only found out by accident.",

    { type: 'emphasis', text: 'Everyone was right about something and complete about almost nothing. Nobody was wrong. They were simply looking at the same product from different altitudes.' },

    "I had assumed this kind of fragmentation belonged to smaller companies. It didn't. If anything, scale amplified it. Documentation existed, processes existed, metrics existed, exceptionally smart people existed.",

    { type: 'emphasis', text: 'The problem was never a lack of information, it was that no one place held all of it.' },

    "At first, this felt like a navigation problem: go find the right person, collect the missing context, move on. Eventually, I realized the fragmentation wasn't the obstacle in front of the work. It was the work itself. Part of my job was assembling these fragments into a model I could reason from.",

    { type: 'heading', number: 2, text: 'There is an end to what evidence can give you' },

    "So I went looking. For a surprising chunk of the summer, I was just searching.",

    {
      type: 'lines',
      items: [
        'Surely somebody has already measured this.',
        "Surely there's another dashboard.",
        "Surely there's usage data somewhere that captures exactly the behavior I care about.",
        'Surely one more conversation will resolve the contradiction between the last two people I talked to.',
      ],
    },

    "Sometimes it did. More often, it produced a better question.",

    "I had assumed that if I looked long enough, or asked enough people, the decision would eventually reveal itself. Instead, I discovered something much less comfortable.",

    { type: 'emphasis', text: 'More information does not always make the picture cleaner, it sometimes makes your uncertainty more sophisticated.' },

    "A dashboard captures the broad behavior but misses the one moment that actually matters. A survey points strongly in one direction until you inspect the sample and realize how cautiously you should read it. One stakeholder describes a customer pattern with complete confidence, and then someone else walks in with equally compelling evidence for something different.",

    "The instinctive response is to keep digging, and often that's right. But at some point the problem changes shape.",

    { type: 'emphasis', text: "You are no longer missing a fact that would settle it. You've reached the edge of what evidence can give you." },

    "Data can show you where customers abandon a workflow, what they use, what they ignore, and where the friction exists. It can expose assumptions you didn't realize you were making. All of that should shape your decision, but it can't answer the question you're trying to answer, which isn't “*What does the evidence say*”, but “*What should this experience become*”.",

    "That second question asks you to stop describing reality and imagine a better one, and no dashboard has ever done that for anyone.",

    "For a while, I thought this meant great PMs simply have better instincts. I now think the distinction is that they're better at making their judgement inspectable, able to say what they observed, what they're inferring from it, what their recommendation is, and which assumptions the recommendation is resting on.",

    "That's when I stopped thinking of rigor as completeness.",

    { type: 'emphasis', text: "Completeness asks whether I've understood everything, which is usually impossible. Rigor asks whether I've understood the things that actually move the decision." },

    "It also meant I didn't have to become the deepest expert in every component, which would have been unrealistic and probably a bad use of a summer.",

    "But there's a floor below which you can't exercise judgement at all: enough understanding of the core product to know what you're changing, enough technical context to distinguish real constraints from assumed ones, enough history to recognize why something irrational today may once have made perfect sense, enough customer understanding to see how the product has already shaped behavior.",

    "Below that floor, product management turns into confident language sitting on top of someone else's understanding. Clearing it doesn't hand you the decision either.",

    { type: 'emphasis', text: "Evidence doesn't replace judgement. It earns you the right to exercise it." },

    { type: 'heading', number: 3, text: 'Ambiguity is an information problem until it becomes a judgement problem' },

    "“Comfortable with ambiguity” shows up in almost every PM job description, and I read it as a temperament thing — stay calm, keep moving, don't freeze when the answer isn't obvious. I no longer think that's what the phrase is getting at.",

    "A good PM doesn't just tolerate ambiguity. They reduce it, not by pretending certainty exists where it doesn't, but by imposing structure on what's unclear and then working out which parts of it actually need to be resolved before a decision can be made.",

    {
      type: 'lines',
      items: [
        'Do I still need more information, or do I already know enough to choose?',
        'If several options are reasonable, what am I optimizing for?',
        'Which tradeoff am I willing to accept?',
        'What would make me change my mind?',
        'Which uncertainty is only uncomfortable to leave unresolved?',
      ],
    },

    "Those eventually became the questions that mattered most. Surprisingly, none of them are about the product, they are about my judgement.",

    "There was always something else I could learn: another adjacent product, another customer segment, another dependency, another historical decision buried in someone's memory. Every answer created three more questions, and for a while I called that rigor. Looking back, a lot of it wasn't. I wasn't reducing uncertainty by then.",

    { type: 'emphasis', text: 'I was simply postponing the decision.' },

    "That realization changed how I think about curiosity.",

    { type: 'emphasis', text: "Curiosity is genuinely one of the best things a PM can have. But unbounded curiosity can become its own failure mode, another rabbit hole that feels urgent but isn't." },

    "At some point you have to draw an information boundary, a line beyond which more digging makes you more knowledgeable but doesn't change what you'd choose. Where that line sits is rarely obvious, and knowing where to draw it is itself a judgement call.",

    "What surprised me was what happened once I'd crossed it. I had assumed that ambiguity would disappear when I understood the problem well enough. Instead, it changed shape.",

    { type: 'emphasis', text: "The ambiguity was no longer that I couldn't see a solution, it was that I could see several." },

    "Even something as simple as deciding which problems belonged in an MVP stopped feeling obvious. Should we solve more problems less completely, or fewer problems exceptionally well? Should we optimize for customer impact, business impact, long-term product direction, or something else?",

    "Those weren't questions evidence could answer for me.",

    "I had also imagined this was the point where a room full of smart people would talk through the options and land on the best one. That almost never happened.",

    { type: 'emphasis', text: 'Everyone could understand the problem and still advocate for different priorities — not because they disagreed about the evidence, but because they weighed the tradeoffs differently.' },

    "That was a kind of ambiguity I hadn't expected. Not missing information, but competing, reasonable interpretations of the same information.",

    "The decision was no longer about discovering the correct answer. It was about deciding what deserved to be optimized, since every reasonable solution improved something important and sacrificed something else. The question that kept bringing me back wasn't, “*Which solution is objectively best.*” It was, “*Which one improved the customer's experience the most when I zoomed out and looked at the whole system.*”",

    "That's a harder question than it sounds.",

    { type: 'heading', number: 4, text: 'Seeing like a customer' },

    "“Customer obsession” is one of those phrases everyone agrees with so quickly that nobody stops to ask what it actually demands. I had taken it to mean understanding customers deeply, which is true but turns out not to be the whole story.",

    "Customers are an extraordinarily important source of truth about the experience of using a product, but they aren't necessarily the right people to design the solution. They can tell you where the product feels confusing, where they abandon a workflow, what they've built a workaround for, and which parts get in the way of what they came to do.",

    "All of that is gold, but it still leaves a PM with a different question.",

    "Not, “*What did the customer ask for?*” But, “*What would actually make their experience better?*”",

    "And those aren't always the same question.",

    "The longer I spent inside the product, the more fluent I became in how it worked. Customers don't get that luxury. They don't experience the product through its architecture, its technical constraints, or the historical reason a decision once made sense.",

    { type: 'emphasis', text: 'They experience it exactly as it meets them, one interaction at a time.' },

    "That's what changed my understanding of customer obsession.",

    { type: 'emphasis', text: "It's difficult not because customers are hard to understand, but because organizations gradually become experts in the product they've built." },

    "Strange edges quietly become normal, workarounds stop feeling like workarounds, friction starts looking like “just how the product works”, and internal language slowly replaces the customer's language. Part of customer obsession, I think, is resisting that drift.",

    "Sometimes the sharpest product insight isn't discovering a new problem at all, it's noticing something everyone inside has already learned not to see.",

    "Customers rarely hand you the problem directly either, which is why I stopped taking feature requests literally. Someone asking for a button isn't necessarily asking for a button. They're revealing where the product stopped helping them. The job isn't to translate requests into roadmap items, nor is it to build what you personally find elegant.",

    { type: 'emphasis', text: "It's to understand the customer's world well enough to hold an informed, defensible point of view about what should change and what would genuinely make the experience better for them." },

    "As organizations get more fluent in the product they've built, someone has to stay fluent in what it feels like to use it because that's often the clearest guide to what the product should become next.",

    { type: 'heading', number: 5, text: 'Writing is thinking made visible' },

    "Once I had a point of view, I assumed writing would just be how I communicated it. It turned out to be how I found whether I had one.",

    "An idea would feel coherent in my head, and then I'd sit down to explain the customer, the problem, why it mattered now, why this direction beat the alternatives, and the gaps showed up almost immediately.",

    {
      type: 'lines',
      items: [
        "I'd describe the customer and realize I had quietly collapsed two different users into one.",
        "I'd describe the problem and realize I was actually describing a symptom of something deeper.",
        "I'd lay out the future experience and notice a step that only existed because I'd inherited a constraint from the current product without questioning it.",
      ],
    },

    "The document didn't create those weaknesses, it exposed them. Which changed what I thought a product doc was for.",

    { type: 'emphasis', text: "It isn't there to communicate a finished thought, it's there to put one under pressure." },

    "Can this argument survive being made explicit? Can someone else follow the chain from problem to choice? Can I separate what I observed from what I concluded? Can I name the tradeoff instead of burying it under confident language?",

    "Once I saw documents that way, I stopped waiting for them to feel finished before sharing them.",

    { type: 'emphasis', text: "The purpose of an early document isn't to communicate certainty, it's to expose uncertainty while it's still cheap to fix." },

    "One comment on a rough draft is often worth more than another day spent refining it alone. Someone challenges your customer definition, someone flags a dependency you missed, someone disagrees with the recommendation entirely. That's the document doing its job, not failing at it.",

    "It changed how I took disagreement too. Criticism used to feel like evidence that I should rethink the entire solution. Now I treat it as information rather than instruction. Not every valid criticism changes the decision. Often, it just makes the tradeoff clearer, which is worth as much. No option wins on every dimension, and the work is to choose what you're sacrificing on purpose rather than by accident.",

    "None of that happens on its own. Having the right product idea was just half the work. The other half was getting it into a form other people can improve, challenge, and act on.",

    { type: 'emphasis', text: 'A product decision becomes an organizational decision only when other people can reason about it alongside you, not when it happens to be correct.' },

    { type: 'heading', number: 6, text: 'Alignment is not agreement' },

    "That reframed alignment for me. I'd been using “getting people aligned” as shorthand for “getting people to agree.” I draw a much sharper line between the two now.",

    { type: 'emphasis', text: 'Agreement means everyone prefers the same decision, which is often neither realistic nor necessary. Alignment means everyone understands the problem, the assumptions, the tradeoffs, and why this decision won over the alternatives.' },

    "Two reasonable people can hold the same information and still land in different places. I stopped reading that as a sign something had gone wrong. Usually, it just meant the decision was hard.",

    "The work wasn't to smooth those differences over with diplomacy. It was in making the reasoning legible enough that disagreement could be useful. In my head, a good product conversation sounds something like this:",

    {
      type: 'lines',
      items: [
        "Here's what we know,",
        "Here's what we don't,",
        "Here's what customers seem to value,",
        'Here are the tradeoffs.',
        "Here's why I believe this is the right direction — now tell me what I'm missing.",
      ],
    },

    "That's a different kind of conviction. It isn't stubborn, it doesn't depend on everyone agreeing, and it stays open to better arguments while still putting a recommendation on the table.",

    "I looked at stakeholder conversations not as obstacles standing between me and the final product, but as a part of how the product became better.",

    {
      type: 'lines',
      items: [
        'Engineering needed to understand why the problem was worth solving.',
        'Design needed enough context to challenge the proposed experience.',
        'Leadership needed to understand why this deserved resources over something else.',
      ],
    },

    "Each of these perspectives improved the product differently, but only if they could see the reasoning, which is why I stopped thinking of writing, reviews, and stakeholder conversations as side activities to the real work. They are how the shared understanding gets built.",

    { type: 'emphasis', text: 'A product gets built twice. First as a shared understanding, then as software.' },

    { type: 'heading', number: 7, text: 'Ownership begins where consensus ends' },

    "A shared understanding isn't the same thing as a shared preference. Everyone can follow the reasoning and still want something different, which is where I ended up thinking differently about ownership. I used to read it mostly as responsibility — care deeply, follow through, don't drop the ball. That's still true, but I now think there's a layer underneath it.",

    "You can ask twenty people for their opinion, get talked out of your original recommendation by the twentieth, throw out your first hypothesis entirely, and still own the product. What you can't do is avoid landing somewhere.",

    "Stakeholder input can become seductive that way. If ten smart people want ten different things, it's tempting to accommodate all ten and call the result collaboration. Sometimes it is. Sometimes it's just an unwillingness to choose, and the customer still has to use whatever survives the process.",

    "So, somebody has to compress it, and most of ownership, I think, is that act of synthesis — of research, metrics, technical constraints, customer stories, historical context, and strong opinions from smart people. None of it becomes useful until someone turns it into a recommendation a team can act on. Compress too hard and you lose the nuance that mattered. Refuse to compress and the org stays stuck inside the complexity. The good work lives somewhere in between, and I think it's badly underrated as a skill.",

    { type: 'emphasis', text: "The uncomfortable part is never the disagreement. It's that after all the input, the recommendation still has your name on it." },

    { type: 'heading', text: 'What I think the job is now' },

    "I came into the summer thinking product management was mostly about finding the right answer and getting the org behind it. I now think that description skips the hardest part.",

    "The right answer rarely arrives fully formed. The evidence is incomplete, the organization holds pieces of the truth instead of one shared version of it, more than one solution is defensible, and every real choice creates another tradeoff somewhere else. The PM still has to move from that to a direction.",

    "That's where I think the role really earns its place. Not by always knowing the answer to all questions, not by having the best ideas, not by winning every argument.",

    {
      type: 'lines',
      items: [
        'By understanding the customer and the system deeply enough to know what matters,',
        "By working out which uncertainties are worth chasing and which aren't,",
        'By separating signal from noise,',
        'By making the reasoning legible enough that other people can push back on it,',
        'And then by taking responsibility for the choice anyway.',
      ],
    },

    "There are a handful of distinctions I understand very differently now than I did in May: between evidence and proof, rigor and completeness, knowledge and useful depth, disagreement and disproof, agreement and alignment, listening and outsourcing judgement, responsibility and ownership. Written out like that, they sound subtle. In practice I think they're most of the job.",

    "Getting better at this doesn't mean collecting better frameworks for finding the answer. Don't get me wrong, I still love frameworks. But I think the **real craft begins where the framework ends**, in the space between everything you can reasonably know and the decision that still has to get made.",

    "I used to think the goal was closing that space. Now I think the goal is learning to think well inside it.",
  ],
}
