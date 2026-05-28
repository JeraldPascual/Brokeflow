# modes/hackathon.md — Keep this file open during the sprint

## ONE-PROMPT RULE
[FILE: path/to/file]
[GOAL: single action]
Apply Law 3: touch nothing else.
If the AI edits a file you didn't ask it to touch: git checkout -- that/file immediately.

## TIMEBOX
- Hour 0.5: Structure, core design system, routing, static landing.
- Hour 1.5: Core functional loop working (inputs produce outputs, data displays).
- Hour 2.5: UI polish, visual check, layout alignment, static demo data loaded.
- Hour 3.0: Vercel deploy, basic README, project submission link validated.

## HARDCODED STUBS (copy-paste, no shame)
const USER = { id: '1', name: 'Demo User', role: 'admin' };
const API_BASE = 'http://localhost:3000';

## EMERGENCY REVERT
Ctrl+Z everything → re-prompt smaller → git checkout -- path/to/file
Never debug surprise changes. Revert and re-prompt tighter.
