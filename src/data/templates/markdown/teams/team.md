## TEAM STRUCTURE: COLLABORATIVE TEAM AGENT RULES

### Ownership Enforcement (OWNERS.md)
- Check File Registry: Before modifying any file, check if an `OWNERS.md` file exists in the repository root. Map code modifications only to files owned by the developer who is running your session.
- Reject Silent Cross-Edits: If a task requires modifying files outside the current developer's designated scope, output only the target code as a separate snippet or TODO warning in the console, instructing the developer to coordinate with the file owner. Never silently edit files owned by other team members.

### Strict API Contract Compliance
- Locked Contract Definition: Define all API requests, responses, endpoints, and data shapes in a centralized `shared/` directory (e.g. `shared/types.ts` or `shared/schemas.js`).
- Coordinate Endpoint Changes: Never modify backend endpoint parameters or frontend client configurations without verifying that the central shared schema has been updated and agreed upon team-wide.

### Environment Variable Sync
- Sync .env.example: If you introduce a new environment variable key (e.g., `VITE_STRIPE_KEY` or `DATABASE_URL`), you must immediately append this key (with a blank or safe example value) to the `.env.example` file. This prevents other team members' local environments from crashing due to missing keys.

### Git Branch and PR Hygiene
- Separate Feature Branches: All modifications must be generated inside clean, isolated feature branches. Never output instructions or push modifications directly to `main` or `master`.
- Conventional Branches: Recommend naming feature branches after the developer and the feature (e.g. `feat/alice-auth-form`, `fix/bob-cors-headers`).

### AI Agent Self-Check
Before outputting code in a multi-developer team repository, verify:
1. Did you check `OWNERS.md` to verify this developer owns the target file?
2. Have you avoided making parallel edits to files owned by other team members?
3. If you added an environment variable, is it immediately documented in `.env.example`?
4. Are you writing clean, modular modifications targeting a dedicated feature branch?
5. Are all network inputs and outputs compiled against the shared `shared/` schema files?
