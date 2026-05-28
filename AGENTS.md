# AGENTS.md
# Rules for building Brokeflow — NOT the output for students
# This governs YOUR AI while you develop this codebase.

## THE 4 LAWS
1. THINK BEFORE CODING — print [ASSUMPTIONS & TRADEOFFS] before non-trivial blocks
2. SIMPLICITY FIRST — minimum lines, no unrequested abstractions
3. SURGICAL CHANGES — touch ONLY what was asked, no silent refactors
4. GOAL-DRIVEN EXECUTION — state assertions before writing code

## THIS PROJECT SPECIFICALLY
- Stack: React + Vite + Tailwind, deployed to Vercel
- State: useConfigurator hook (src/hooks/) — do not lift state into components
- Data: question config in src/data/steps.js, template files in src/data/templates/
- Components are dumb — they read props and call handlers, no logic inside
- New question options go in steps.js only — zero component changes needed
- New template rules go in templates/index.js only

## FILE OWNERSHIP
- src/data/steps.js         ← question data only
- src/data/templates/       ← what students download — treat as data, not config
- src/hooks/useConfigurator ← all state logic
- src/components/           ← UI only, no business logic
- AGENTS.md (this file)     ← dev rules for building Brokeflow
- tailwind.config.js        ← design tokens live here as Tailwind theme extensions

## NEVER
- Hardcode colors in components — use CSS vars or Tailwind theme tokens
- Add state to components — it goes in the hook
- Mix template content with component logic
