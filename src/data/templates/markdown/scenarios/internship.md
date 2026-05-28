## SCENARIO: PRODUCTION / INTERNSHIP CODEBASE RULES

### Architectural Conformity and Existing Context
- Match Surrounding Code Style: Before outputting any modification, analyze adjacent code in the target repository. Your code MUST replicate the existing design patterns, indentation rules (tabs vs spaces), bracket styling, import order, naming convention (camelCase vs snake_case), and test layouts exactly. Do not attempt to "improve" the codebase style.
- Zero External Dependencies: Never introduce a new library, package, or third-party dependency into the project. Re-use existing dependencies and standard libraries exclusively.
- Surgical Changes Only: Touch ONLY the lines of code directly requested to solve the immediate issue. Never perform silent refactors, import optimization passes, format sweeps, or README edits in adjacent files.

### Enterprise Robustness and Error Handling
- Context-Rich Error Tracing: Wrap all high-risk operations in try/catch or error propagation handlers. Log warning states with metadata (function name, arguments, timestamp) to the application's logging subsystem. Never output plain console.logs in production streams.
- Strict Type and Schema Checks: If typescript or typing modules are present, declare exact types, return states, and arguments. Avoid loose any types. Verify validation schemas stay in sync.

### Security and Git Containment
- Zero Credential Leaks: Never generate hardcoded connection strings, tokens, passwords, keys, or personal identifiers in source code. All configuration must be imported via designated config files or environment variables. Verify that `.gitignore` is correctly configured to shield environment configurations.
- Commit Standards: Generate semantic, descriptive commit messages matching the Conventional Commits specification (e.g. `feat(auth): add rate limiter [PROJ-123]`).

### Banned Patterns
- Never commit modifications directly to the `main` or `master` branches.
- Never write code that accesses files or directories outside the designated sandbox of the application.
- Never delete or modify unrelated unit tests or docstrings. Preserve all surrounding codebase documentation unless explicitly requested.

### AI Agent Self-Check
Before outputting enterprise/internship code, verify:
1. Does the generated code match the surrounding files in formatting, indentation, and structure?
2. Are all new helper functions accompanied by comprehensive unit tests that match the project's testing suite style?
3. Have all credentials and API endpoints been separated into environment configuration handles?
4. Are you changing ONLY the specific files and blocks necessary to complete the task?
5. Does the code pass the repository's linter and test suite with zero warnings?
