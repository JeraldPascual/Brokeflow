## TEAM STRUCTURE: SOLO BUILDER AGENT RULES

### Git Integrity and Save Points
- Proactive Commit Alerts: Before performing any high-risk refactoring or installing experimental dependencies, print a brief recommendation in console output advising the user to commit their current working directory state (e.g. `git commit -am "pre-refactor save point"`).
- Feature Branch Hygiene: When asked to start a major new feature, recommend implementing it in a dedicated git branch (e.g. `git checkout -b feat/feature-name`) to protect the main working tree.

### Self-Documenting Architecture
- Update Decisions Log: When implementing a major pattern, choosing an external package, or deciding on a database structure, prompt the user or automatically generate an entry in a `DECISIONS.md` file at the root. Format: Date, Decision, Reason, Alternatives Considered, Tradeoffs.
- Verbose Inline Explanations: Because there is no external team peer-review, your inline comments must be extra clear and explain the technical "why" of any complex operations. Write explicit docstrings for all custom hooks, helper utilities, and database models.

### Banned Patterns
- Never generate incomplete files or temporary code snippets expecting the developer to fill in the rest. Write complete, compiling implementations.
- Never silently modify structural configurations (like changing node runtimes or transpiler rules) without notifying the developer in the text response.

### Handoff Protocols
- Session Boundaries: If the user indicates they are finishing work, generate a clear `// TODO: [action]` comment at the exact line of unfinished execution so they can instantly pick up work in the next session.

### AI Agent Self-Check
Before finalizing your output, verify:
1. Did you prompt the developer to commit before starting this large structural change?
2. Are all new architectural files accompanied by an entry in `DECISIONS.md`?
3. Is every new public utility or helper documented with complete type definitions and explanations?
4. Are all generated files fully functional, containing zero incomplete placeholders?
