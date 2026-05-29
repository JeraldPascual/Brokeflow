// src/data/steps.js
// All configurator question data lives here.
// Add / remove options without touching component logic.
// Icons are rendered via <Icon name={icon} /> — see Icons.jsx

export const STEPS = [
  {
    id: 'stack',
    question: 'What type of project is this?',
    sub: 'Pick the closest category — specify the exact framework below',
    options: [
      { id: 'frontend',   icon: 'frontend',  label: 'Frontend / UI',           desc: 'React, Vue, Astro, Svelte, vanilla HTML...' },
      { id: 'backend',    icon: 'backend',    label: 'Backend / API',           desc: 'Node, Python, Go, Rust, PHP...' },
      { id: 'mobile',     icon: 'mobile',     label: 'Mobile / Cross-platform', desc: 'React Native, Flutter, Expo, Capacitor...' },
      { id: 'fullstack',  icon: 'fullstack',  label: 'Full Stack',              desc: 'Frontend + backend in one repo' },
      { id: 'data',       icon: 'data',       label: 'Data / ML / Notebook',    desc: 'Jupyter, Pandas, scikit-learn, Colab...' },
      { id: 'other',      icon: 'other',      label: 'Other / Not sure',        desc: 'Describe it — the rules will adapt' },
    ],
  },
  {
    id: 'scenario',
    question: "What's the context?",
    sub: 'Changes which guardrails get prioritized',
    options: [
      { id: 'sdg-hack',     icon: 'sdg-hack',     label: 'SDG / Cause Hackathon',    desc: 'Sustainability, social impact, NGO events' },
      { id: 'general-hack', icon: 'general-hack',  label: 'General Hackathon',        desc: 'Speed, MVP, ship-it energy' },
      { id: 'school',       icon: 'school',        label: 'School / Academic Project', desc: 'Grades, rubrics, documentation matters' },
      { id: 'side',         icon: 'side',          label: 'Side Project / Tweak',     desc: 'Low stakes, one file at a time' },
      { id: 'internship',   icon: 'internship',    label: 'Internship / Work',        desc: 'PR hygiene, code review, team context' },
    ],
  },
  {
    id: 'window',
    question: 'How much time do you have?',
    sub: 'Switches between full guardrails and kill-list mode',
    options: [
      { id: '3hr',  icon: '3hr',  label: 'Under 3 hours',   desc: 'Hackathon sprint — cut everything non-essential' },
      { id: 'day',  icon: 'day',  label: 'A day or weekend', desc: 'Focused build — atomic file isolation' },
      { id: 'long', icon: 'long', label: 'Weeks / ongoing',  desc: 'Full guardrails + 3-model rotation' },
    ],
  },
  {
    id: 'tools',
    question: 'Which AI tools do you have?',
    sub: 'Tailors the config to what will actually read it',
    multi: true,
    options: [
      { id: 'claude',  icon: 'claude',  label: 'Claude',         desc: 'claude.ai free/Pro, or Claude Code' },
      { id: 'copilot', icon: 'copilot', label: 'GitHub Copilot', desc: 'Student plan (free via GitHub Education)' },
      { id: 'gemini',  icon: 'gemini',  label: 'Gemini Studio',  desc: 'Free API key, 1M token context window' },
      { id: 'cursor',  icon: 'cursor',  label: 'Cursor',         desc: 'IDE with built-in AI chat + autocomplete' },
      { id: 'aider',   icon: 'aider',   label: 'Aider',          desc: 'Command-line coding assistant' },
      { id: 'windsurf',icon: 'windsurf',label: 'Windsurf',        desc: 'AI-native IDE by Codeium' },
      { id: 'deepseek',icon: 'deepseek',label: 'DeepSeek R1',    desc: 'Open-source reasoning model' },
    ],
  },
  {
    id: 'team',
    question: 'Are you working alone or with a team?',
    sub: 'Changes file ownership rules and commit discipline',
    options: [
      { id: 'solo', icon: 'solo', label: 'Solo',       desc: 'Just me — full context, full control' },
      { id: 'pair', icon: 'pair', label: 'Pair / Duo',  desc: '2 people — coordinate file ownership' },
      { id: 'team', icon: 'team', label: 'Team (3+)',   desc: '3+ people — strict boundaries matter' },
    ],
  },
  {
    id: 'deploy',
    question: 'Where are you deploying?',
    sub: 'Determines what gets added to the README and what to skip',
    options: [
      { id: 'vercel', icon: 'vercel', label: 'Vercel / Netlify', desc: 'Static hosting, git-connected' },
      { id: 'server', icon: 'server', label: 'VPS / Server',     desc: 'DigitalOcean, Railway, Render...' },
      { id: 'pages',  icon: 'pages',  label: 'GitHub Pages',     desc: 'Free static hosting' },
      { id: 'none',   icon: 'none',   label: 'Not deploying',    desc: 'Local only / demo only' },
    ],
  },
]
