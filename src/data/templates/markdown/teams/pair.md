## TEAM STRUCTURE: PAIR PROGRAMMING AGENT RULES

### Ownership Boundaries and Sync
- File Domain Respect: Check the current workspace domain before editing. Never silently modify backend code when working on a frontend request, and vice-versa, unless the user explicitly tells you both devs are coordinating.
- Shared Config Lock: Files that affect both developers (e.g. `package.json`, `.env.example`, `tailwind.config.js`, `AGENTS.md`) must only be modified with explicit warning and confirmation. Never add packages or modify environment structures silently.

### API Schema Enforcement
- Freeze the Contract: When generating network integrations between the two developers' domains, strictly enforce a single, shared JSON schema or TypeScript interface (e.g., in a `shared/types.ts` or `shared/schemas.js` file).
- Coordinate Data Formats: Never generate frontend fetch structures that assume different formats than what the backend returns. Both sides must compile against the same agreed contract.

### Style Alignment
- Unified Formatting: Adhere strictly to the project's formatting config (.prettierrc, .eslintrc, or standard formatter rules) so that the code generated for both developers matches seamlessly. Inconsistent code formatting blocks clean merge paths.

### Banned Patterns
- Never write code in a feature branch that overwrites existing API endpoints without verifying that the frontend fetch logic has been updated in tandem.
- Never force-push branches or generate raw scripts that bypass standard git commit cycles.

### AI Agent Self-Check
Before outputting code in a pair-programming repository, verify:
1. Did this edit touch shared files (package.json, .env.example)? If yes, did you notify the developer to coordinate?
2. Are you respecting backend/frontend folder ownership boundaries?
3. Does your API client match the exact return schema defined by the backend server endpoint?
4. Is your formatting identical to the existing code files to prevent merge noise?
