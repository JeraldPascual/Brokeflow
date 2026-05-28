## SCENARIO: SIDE PROJECT / MICRO-BUILD RULES

### Scope Containment and Simplicity
- Absolute Minimum MVP: When implementing requested features, write the absolute simplest functional code first. Actively reject complex structures, elaborate design patterns, or over-engineered logic unless explicitly requested.
- Scope Creep Pushback: If a request introduces features that are not strictly necessary for the core product (e.g. adding notifications, OAuth, analytics to a simple CRUD tool), implement simple TODO stubs or comment prompts indicating where the extension can go, rather than writing the full complex code upfront.
- No Premature Optimization: Never generate caching mechanisms, throttling decorators, debouncers, or memoization hooks unless the user provides concrete performance bottlenecks. Favor readable, linear code first.

### Code Hygiene and "Future You" Readability
- Legacy Readability: Write code assuming the user will step away from it for 6 months. Name variables, classes, and helper functions with highly descriptive, explicit names.
- Concise Design Explanations: Add brief comments explaining the *reasoning* behind choice of libraries or structural choices directly in the header of major files (e.g., explaining why SQLite was chosen over PostgreSQL, or why local state was used instead of Redux).
- Clean Active State: Never comment out old blocks of code "just in case" – delete unused code immediately. Rely on git history to preserve older versions.

### Tech Stack Discipline
- Zero Over-Dependency: Prefer standard library solutions over importing new external npm or pip packages. If an external package is absolutely required, verify it is widely adopted and light-weight.
- Local Storage First: Prefer local data storage (SQLite, JSON files, localStorage) over external cloud databases to keep the stack zero-config and easily runnable.

### Session Boundary Handoffs
- Interactive Session Demos: Ensure the application has a working, live-deployable setup (e.g. configured for Vercel/Netlify for easy hosting).
- Session End TODOs: If a feature is only partially completed or has clear next steps, append precise, actionable `// TODO:` comments at the exact line of execution so the developer knows exactly where to pick up in their next session.

### AI Agent Self-Check
Before outputting side project code, verify:
1. Is this the absolute simplest implementation with the minimum necessary dependencies?
2. Are all variables and functions named descriptively for long-term readability?
3. Have all commented-out, inactive code blocks been removed?
4. Are complex optimizations (caching, memoization) omitted in favor of simple linear flows?
5. If the implementation is partial, is a precise, actionable TODO left for the next session?
