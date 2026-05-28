## SOFTWARE DEVELOPMENT STANDARDS

### Modular Architecture
- Environment Isolation: All configuration variables, port mappings, database endpoints, and API credentials must be fetched from environment variables. Never hardcode sensitive parameters in source files or documentation.
- Single Responsibility: Write functions that perform exactly one task. If a generated function exceeds 40 lines of code or accepts more than 3 arguments, split it into smaller helper functions.
- Modular Layout: One major logical module per file. Keep files under 250 lines. Large files must be split into dedicated submodules.
- Explicit Error Handling: Never generate empty catch blocks or ignore error return values. Every I/O operation, file read, or network request must include error handling and user-friendly logging.

### Code Quality and Hygiene
- Standard Naming: Select a single naming convention (e.g. camelCase for JS/TS, snake_case for Python, PascalCase for Go) and maintain it consistently across all files in the repository.
- Constants for Magic Numbers: Replace all magical values (like retry limits, timeouts, status codes, default limits) with declared, uppercase constants at the top of the file.
- Clean Git State: Commit small, focused updates with semantic commit messages (e.g., `feat: ...`, `fix: ...`, `docs: ...`). Ensure all lockfiles (package-lock.json, Cargo.lock, go.sum, requirements.txt) are committed to version control.

### Banned Patterns
- Never write credentials, tokens, passwords, or raw keys into source files.
- Never write comments that restate what the code is doing. Comments must explain the "why" or the technical rationale behind an operation.
- Never include dead, commented-out code in generated files. If code is not active, delete it. Git history handles file state recovery.

### Zero-Cost Developer Setup
- Create an `.env.example` file listing all required environment keys (with empty values or safe public defaults).
- Provide a clean, single-command development server runner in the project configuration.

### AI Agent Self-Check
Before outputting code, verify:
1. Are all configuration settings read from environment variables?
2. Does every function do exactly one thing and stay under 40 lines?
3. Are errors caught, logged, and handled safely?
4. Are all magic values extracted into named constants?
5. Is the code free of dead code blocks and generic comments?
