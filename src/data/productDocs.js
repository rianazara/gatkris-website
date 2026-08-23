export const productDocs = {
  'application-studio': {
    slug: 'application-studio',
    title: 'Application Studio',
    subtitle: 'An AI workflow that decides which jobs are worth applying to, tailors a resume worth reading, and drafts outreach that actually gets a reply.',
    date: 'December 2025',
    readTime: '8 min read',
    body: [
      "Job applications broke my week long before they broke my confidence. Two hours per role, sometimes three, and most of it went into work the reader would never see: re-reading the JD, second-guessing which bullet to lead with, drafting outreach that sounded either transactional or gushy, hunting for the one alum at that company on LinkedIn. By Friday the pipeline was still moving, but the version of me on the page didn't feel like the version of me applying.",

      "So I built Application Studio.",

      "It is one workflow, not a chat interface. I run it, it pulls the roles it thinks are worth my time, and it hands back a per-role folder with the resume, the outreach, the networking playbook, and the tracker row ready to go. I read, edit if I want to, and submit. The point isn't to be a bot. The point is to spend my time where taste actually matters — reading the JD carefully, catching a phrasing that isn't me, replying to a message from a recruiter — and to hand the rest to a system that's disciplined enough not to embarrass me.",

      "This is a note about how it works and, more usefully, the rules it refuses to break.",

      { type: 'list', items: [
        { term: 'Same facts, different protagonist', def: "The whole system runs on one principle. The reader should see the candidate they're already looking for. Never a keyword-stuffed clone. Never a fabrication. A truthful, sharply-positioned narrative built entirely from what's already true about me. If a JD asks for something I don't have, the assessment says so out loud — it doesn't paper over it. This is the line I care about most, and it's the reason the workflow is worth using at all." },
      ]},

      "The workflow has four moves: a gate that decides whether to tailor at all, a resume pass that respects that principle, an outreach pack for the humans who might respond, and a package that sits ready to submit through Simplify. Below, each one.",

      "The gate. Before it writes anything, the workflow reads the JD and decides whether this role is honestly worth an application. Not \"could you technically apply\" — most PM roles list six years, most candidates apply anyway. The question is different: given the role, the company, the seniority band, and what I actually want to be doing next, is a tailored application the right use of an hour? If the answer is no, the workflow tells me so and moves on. It's the most valuable thing it does, because the alternative is the spray-and-pray applications everyone eventually regrets. When the gate says no, I trust it.",

      "The resume pass. When the gate says yes, it opens my base resume — a 3-page master document that carries every bullet, every metric, every project I've done — and picks. It doesn't rewrite. It reorders and lifts. The principle behind that choice is boring but important: every claim on the page has to be verifiable in the master doc, in the same words, with the same numbers. What the workflow is allowed to do is choose which of those claims lead, which get demoted, and — where a JD uses a specific noun for a thing I've genuinely done — swap in that noun so the reader recognizes it faster.",

      "There are a few structural rules it can't break either.",

      { type: 'list', items: [
        { term: 'No keyword stuffing', def: 'Skills sections mirror the JD only where the underlying claim is true. If a JD asks for GraphQL and my experience is REST, the resume says REST. The tailoring is in the noun phrases the reader looks for, not the ones they filter on.' },
        { term: 'No semantic drift', def: "It can replace \"stakeholder alignment\" with \"cross-functional execution\" if both are true in my experience. It cannot invent a claim in order to hit a phrase. The test is whether the source paragraph in my master doc still means the same thing after the substitution. If it doesn't, the substitution doesn't happen." },
        { term: 'One page, filled', def: "The goal isn't \"just barely fits.\" The goal is a page a recruiter can scan in six seconds and land on the three things that matter for this role. The tailoring is by subtraction more often than addition — cutting bullets that aren't earning their line." },
        { term: 'The title stays fixed', def: "The header title is always \"Senior Product Manager - Technical.\" The role I'm applying to may be called Product Manager, Sr PMT, Deployment Strategist, PMM. The tagline underneath changes. The title doesn't. I want the reader to see who I already am, not who I'm auditioning to be." },
      ]},

      "There's a quality loop wrapped around all of this. After the resume is drafted, the workflow re-reads it as a recruiter would (six-second scan), a hiring manager would (does the story make sense), and an ATS would (do the words the filter cares about actually appear where they should). If any pass fails, it revises and re-checks. It doesn't ship until every pass is clean.",

      "The outreach pack. Applying is only half the work. Every generated folder also contains four short messages, each written for a specific reader.",

      { type: 'list', items: [
        { term: 'The referral request', def: "A note to a UW Foster alum (or CET, or IIT Madras, or Purdue — whichever alma mater the target shares) inviting them to refer me. Alumni-first is a rule: I don't cold-message strangers. The opener is the shared program, then the role, then two or three honest fit lines, then a soft ask. Warm, but never gushy. Portfolio link at the end." },
        { term: 'The hiring manager or recruiter message', def: "Same tone, tighter fit points. Recruiters skim; hiring managers read the middle. The workflow picks bullets from the resume and reframes them for the reader — a HM at an agentic platform team hears about the ServiceNow prototype first, a HM at a consumer team hears about Amazon Books first." },
        { term: 'Two connection-request notes', def: "Under 300 characters each. No links. No ask. Just the alumni opener and a lightly role-forward reason for connecting. These exist because LinkedIn invites don't render links and shouldn't carry the ask — the ask comes after they accept." },
      ]},

      "The tone rules for outreach are strict, and they're not aesthetic — they're strategic. \"Warm but genuine and concise.\" One greeting line, never a stack of pleasantries. Humble on the framing, strong on the facts. No em dashes. No \"right in my wheelhouse\" or \"at massive scale\" or \"I understand what it takes.\" The messages sound like a real person because they are, structurally, what a thoughtful person would write on a good day. That's the bar.",

      "The networking layer. Alongside the messages, the workflow runs a LinkedIn search from my own account and returns a ranked list of people at the target company worth reaching out to — filtered by shared program, mutual connections, and role relevance. It doesn't message anyone. It hands me a shortlist and the drafted notes so the reach-out itself is a click, not an hour.",

      "The bundle. Everything for one role lands in one folder, organized by date and company:",

      { type: 'list', items: [
        { term: 'Gayatri Gopalakrishnan Resume.pdf', def: 'The tailored resume, one page, real hyperlinks embedded.' },
        { term: 'Gayatri Gopalakrishnan Resume.docx', def: "The editable source, kept alongside for any tweaks I want to make by hand." },
        { term: 'Role Alignment Assessment.md', def: "The workflow's own read: fit signals, top-1% basis, remaining gaps I should be honest about, ATS alignment, recruiter and hiring-manager readiness." },
        { term: 'Verification List.md', def: "A short list of claims, metrics, and terminology the workflow wants me to double-check before I hit submit. This is the safety net for the one thing it's not allowed to do: fabricate." },
        { term: 'Outreach.md', def: "The four messages, ready to send." },
        { term: 'Networking.md', def: "The ranked list of people to reach out to." },
        { term: 'JD Summary.md', def: "A short synthesis of the role — what the team is building, what the hiring manager likely cares about, the noun phrases I should be fluent in." },
        { term: 'Tracker row', def: "A single line appended to the application tracker sheet: date, company, role, stage, and the outreach status." },
      ]},

      "The application layer. The last mile is Simplify. Once my profile is set up, it autofills roughly 90% of the fields on the actual application form — cover letter, work history, links, standard yes/no questions. I confirm the pre-fills, edit anything that needs a human read, and submit. This is the one step that stays manual on purpose. I want to see the final version before it goes out, because at that point it's my name on it.",

      "What changed. I still apply to fewer roles than the workflow could technically produce for me. That's the point. The gate is real, and I trust it, so the roles that make it through are ones I actually want. The resumes read like me because they're built from what's already true about me. The outreach gets replied to at a rate I didn't have before, and I think that's because it doesn't feel like outreach — it feels like a note from a person who read the JD. And when I get to the recruiter call, I've read my own resume enough to know exactly what's on it, because the assessment made me look.",

      "The workflow is boring in the best way. It doesn't try to be clever. It just refuses to do any of the things I'd never do myself — invent a metric, blast a message, apply to a role I don't want — and it does the tedious parts on my behalf. That's the whole product.",
    ],
  },
}
