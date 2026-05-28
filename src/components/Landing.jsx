// Landing.jsx
// Hero section + laws strip
// Sits above the Configurator on the same page — no routing needed

import Icon from './Icons'

export default function Landing() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[rgba(244,255,254,0.92)] backdrop-blur-md border-b border-[var(--border)] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-tight text-[var(--teal-deeper)]">
          BROKE<span className="text-[var(--petronas)]">FLOW</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://github.com/JeraldPascual/Brokeflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[var(--text-subtle)] hover:text-[var(--teal)] transition-all flex items-center gap-1.5"
          >
            <Icon name="github" size={16} />
            <span className="hidden sm:inline">Contribute</span>
          </a>
          <a
            href="#configurator"
            className="bg-[var(--teal)] text-white text-[10px] sm:text-xs font-bold px-3.5 sm:px-5 py-2 rounded-full tracking-wide hover:bg-[var(--teal-dark)] transition-all hover:-translate-y-px"
          >
            GET CONFIG →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16 text-center animate-fade-up">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white border-2 border-[var(--border-med)] rounded-full px-4 py-1.5 text-xs font-bold text-[var(--teal)] tracking-widest mb-7 animate-float shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[var(--petronas)] animate-pulse-ring" />
          FREE FOR STUDENTS · ZERO SUBSCRIPTIONS
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] tracking-tight text-[var(--teal-deeper)] mb-5">
          Stop vibe coding.<br />
          Start{' '}
          <span className="bg-gradient-to-r from-[var(--teal)] to-[var(--petronas)] bg-clip-text text-transparent">
            shipping
          </span>
          .
        </h1>

        {/* Sub */}
        <p className="text-sm sm:text-lg font-medium text-[var(--text-muted)] max-w-lg mx-auto mb-9 leading-relaxed">
          Brokeflow is a drop-in AI workspace config that keeps Claude,
          Copilot, and Gemini in line — no matter how tight the deadline.
        </p>

        <a
          href="#configurator"
          className="inline-flex items-center gap-2 bg-[var(--teal)] text-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-teal-DEFAULT/30 hover:bg-[var(--teal-dark)] hover:-translate-y-0.5 transition-all"
        >
          Build my config ↓
        </a>
      </section>

      {/* LAWS STRIP — Phase 5: 2×2 grid on mobile, 4-column on md+ */}
      <div className="bg-[var(--teal-deeper)] grid grid-cols-2 md:grid-cols-4">
        {[
          ['01', 'Think Before Coding'],
          ['02', 'Simplicity First'],
          ['03', 'Surgical Changes'],
          ['04', 'Goal-Driven Execution'],
        ].map(([num, name]) => (
          <div
            key={num}
            className="px-8 py-6 text-center border-r border-white/10 last:border-r-0"
          >
            <div className="text-[10px] font-black tracking-widest text-[var(--petronas)] mb-1">
              LAW {num}
            </div>
            <div className="text-sm font-bold text-white">{name}</div>
          </div>
        ))}
      </div>

      {/* THE SIGNIFICANCE SECTION */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[var(--teal-deeper)]">
            Why use Brokeflow?
          </h2>
          <p className="text-sm font-medium text-[var(--text-muted)] mt-2 max-w-lg mx-auto">
            AI assistants vibe-code by default. They write placeholders, hardcode credentials, and over-engineer simple prototypes. Brokeflow establishes explicit boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left panel: The AI Vibe Coding Trap */}
          <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-red-500 font-black text-xs tracking-wider uppercase mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              The AI Vibe Coding Trap
            </div>
            <ul className="flex flex-col gap-3.5">
              {[
                'Generates incomplete code containing comments like "// TODO: implement later".',
                'Hardcodes actual API keys, database credentials, or secret endpoints in code commits.',
                'Performs massive, unprompted refactoring sweeps that break adjacent working modules.',
                'Introduces heavy cloud architectures or paid infrastructure for small, simple prototypes.'
              ].map((text, i) => (
                <li key={i} className="flex gap-2.5 text-sm font-semibold text-[var(--text-muted)] leading-relaxed">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel: Brokeflow Guardrails */}
          <div className="bg-white border-2 border-[var(--border-med)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[var(--teal)] font-black text-xs tracking-wider uppercase mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--petronas)]" />
              Brokeflow Guardrails
            </div>
            <ul className="flex flex-col gap-3.5">
              {[
                'Forces the AI to write complete, compilable file structures with zero stubs.',
                'Mandates private keys remain isolated in git-ignored environment configs.',
                'Restricts the assistant to surgical, file-scoped edits on targeted branches.',
                'Pre-configures local mock storage layers to keep development 100% free and simple.'
              ].map((text, i) => (
                <li key={i} className="flex gap-2.5 text-sm font-semibold text-[var(--text)] leading-relaxed">
                  <span className="text-[var(--teal)] font-bold">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE FLOW / STEP-BY-STEP */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)] bg-gradient-to-b from-white/30 to-transparent">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[var(--teal-deeper)]">
            How it works
          </h2>
          <p className="text-sm font-medium text-[var(--text-muted)] mt-2">
            Establish professional developer constraints in under 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Configure',
              desc: 'Select your programming framework, development timeframe, scenario guidelines, and hosting platform in our wizard.',
              icon: 'fullstack'
            },
            {
              step: '02',
              title: 'Inject',
              desc: 'Download the generated zip files and drop the AGENTS.md, .env.example, and mock database models directly into your repository root.',
              icon: 'pages'
            },
            {
              step: '03',
              title: 'Enforce',
              desc: 'Prompt your AI assistant (Claude Code, Cursor, Gemini, Copilot): "Read AGENTS.md and follow all laws." Watch it build cleanly.',
              icon: 'cursor'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-[var(--border)] rounded-2xl p-6 relative shadow-sm hover:border-[var(--border-med)] transition-all">
              <div className="absolute -top-4 -left-3 bg-[var(--teal-deeper)] text-[var(--petronas)] text-xs font-black tracking-widest px-3 py-1 rounded-md shadow-sm">
                STEP {item.step}
              </div>
              <div className="text-[var(--teal)] mb-4 mt-2">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-black text-[var(--teal-deeper)] mb-2">{item.title}</h3>
              <p className="text-xs font-semibold text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE-CASE SCENARIOS */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[var(--teal-deeper)]">
            Tailored Use Cases
          </h2>
          <p className="text-sm font-medium text-[var(--text-muted)] mt-2">
            Brokeflow optimizes workspace directives for different builder environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Hackathons and Quick MVPs',
              desc: 'Speed is everything. Brokeflow forces your AI assistant to ignore database credentials, payment APIs, multi-role auth, and WebSockets. Instead, it injects direct local mock storage arrays and offline stubs, keeping the app 100% stable for live demo pitches.',
              icon: 'general-hack',
              badge: 'Velocity First'
            },
            {
              title: 'Academic and Graded Projects',
              desc: 'Ensure compliance with grading rubrics. Brokeflow instructs the AI to document design patterns (Factory, Observer, Repository) in code comments, log tradeoffs in DECISIONS.md, sanitize adversarial inputs, and write comprehensive unit tests.',
              icon: 'school',
              badge: 'Grade Protection'
            },
            {
              title: 'Production Code & Internships',
              desc: 'Conform cleanly to enterprise repos. Brokeflow binds the AI to match surrounding quote styles, indentation, and structure. It locks external package additions, forces dynamic env lookups, and restricts code modifications only to files specified in OWNERS.md.',
              icon: 'internship',
              badge: 'Code Integrity'
            },
            {
              title: 'Solo Projects & Side Hustles',
              desc: 'Keep scope creep down. Brokeflow tells the AI to push back on complex optimizations (caching, database queues) and implement simple, clean loops. It appends clear TODO annotations at the end of sessions so you can pick up exactly where you left off.',
              icon: 'side',
              badge: 'Burnout Prevention'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-[var(--border)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
              <div className="text-[var(--teal)] flex-shrink-0 mt-1">
                <Icon name={item.icon} size={32} />
              </div>
              <div>
                <span className="inline-block bg-[var(--bg)] text-[var(--teal-dark)] text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full mb-2">
                  {item.badge}
                </span>
                <h3 className="text-base font-black text-[var(--teal-deeper)] mb-1.5">{item.title}</h3>
                <p className="text-xs font-semibold text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION BRIDGE */}
      <div id="configurator" className="text-center px-8 pt-14 pb-4">
        <span className="inline-block bg-white border-2 border-[var(--border-med)] rounded-full px-5 py-1.5 text-xs font-black text-[var(--teal)] tracking-widest">
          CONFIGURATOR
        </span>
        <h2 className="text-3xl font-black tracking-tight text-[var(--teal-deeper)] mt-3">
          Configure Your Workspace
        </h2>
      </div>
    </>
  )
}

