## TIME WINDOW: DAY OR WEEKEND (ATOMIC MODE RULES)

### Session and Git Hygiene
- Surgical, Atomic Edits: Work in focused session bounds. Before editing, identify exactly what file you are modifying. Limit changes to that specific domain.
- Surgical Commits: Recommend that the developer commit their working state before every major feature addition or test run. Never leave the workspace in a half-broken uncommitted state.
- Keep Forward Momentum: Build forward to compile the core user flow first. Do not carry out large-scale refactoring passes. A functional, compiling app with simplified layout code is the priority.

### Database and Infrastructure Selection
For day/weekend sprints, use this strict infrastructure guideline:
- Database: If the application has multiple relational tables, generate code utilizing lightweight services (Prisma with SQLite or Supabase Free Tier). For simple storage, fall back to localStorage or local JSON.
- Authentication: If custom data scopes are required, implement lightweight built-in auth (Supabase Auth or simple JWT mock). Skip custom auth-from-scratch.
- APIs: Write mock endpoints first. Swap mock data out for real API endpoints only after the mock flows are successfully tested and stable.

### Banned Patterns
- Never write complex distributed caching (Redis), queue listeners, or worker threads.
- Never write extensive performance debouncers or component memoizations unless a slow render is identified.
- Never generate incomplete, non-functional files containing placeholders.

### AI Agent Self-Check
Before outputting day/weekend code, verify:
1. Is this feature isolated, and can it be implemented within a single 2-hour session?
2. Are all databases and auth methods using lightweight, free-tier solutions (SQLite, Supabase Free)?
3. Have all changed files been formatted and validated to run without crash errors?
4. Are you checking that all API base URLs are read from environment variables rather than hardcoded?
5. Does the application build successfully locally?
