# CLAUDE.md
# Claude Code config for building Brokeflow
# Auto-read every session by Claude Code

You are working on Brokeflow — a student AI workspace config generator.
React + Vite + Tailwind. Deployed to Vercel.

Apply the 4 Laws from AGENTS.md on every response without being asked.

## ARCHITECTURE REMINDER
- useConfigurator (hook) owns ALL state
- StepPanel and OutputPanel are pure UI — no logic
- Template files in src/data/templates/index.js are DATA not config
- Design tokens live in tailwind.config.js and src/index.css :root vars

## QUICK FILE MAP
  src/App.jsx                      ← root, renders Landing + Configurator
  src/components/Landing.jsx       ← hero + laws strip
  src/components/Configurator.jsx  ← orchestrator, switches step/output
  src/components/StepPanel.jsx     ← question UI
  src/components/OutputPanel.jsx   ← file tree, browse, download
  src/hooks/useConfigurator.js     ← all state
  src/data/steps.js                ← question data
  src/data/templates/index.js      ← generated file content

## DEPLOYMENT
  npm run build → dist/
  Vercel auto-deploys from main branch
  vercel.json handles SPA routing
