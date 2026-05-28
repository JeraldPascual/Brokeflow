## TIME WINDOW: WEEKS / ONGOING (FULL GUARDRAIL RULES)

### Enterprise Engineering Standards
- Rigorous Testing: Write complete, descriptive unit tests for all new modules, utility helpers, and API routes. Focus tests on input boundary validation, exceptions, and expected return flows. Target a minimum of 70%+ test coverage on all custom business logic.
- Lint and Warning Compliance: Generated code must conform strictly to linter configurations (ESLint, Ruff, Prettier). Keep the workspace completely free of compilation warnings or unused imports.
- CI/CD Parity: Configure and verify all code changes against standard CI validation checks (e.g. GitHub Actions testing pipelines).

### Technical Debt and Design Ledger
- Update Technical Debt: If you are forced to make a temporary shortcut or skip a validation boundary due to library constraints, you must document this decision inside a `TECH_DEBT.md` file in the project root. Detail the reason, line range, and criteria for resolving it.
- Update Architectural Ledger: Every major pattern shift, database migration, or external service integration must be documented in the central `DECISIONS.md` log file.

### Safe Dependency Hygiene
- Dependency Verification: Do not import external libraries or pack files unless absolutely necessary. Before suggesting a dependency, verify it has a recent publish history, low security vulnerability count, and high adoption rate.
- Lockfile Preservation: Always ensure lockfiles (package-lock.json, requirements.txt, Cargo.lock, go.sum) are updated and committed alongside dependency changes.

### Banned Patterns
- Never write credentials, endpoints, keys, or configurations into source files. All configurations must be dynamic and loaded via environment systems.
- Never write undocumented public endpoints or APIs. Every public function must feature a clear docstring detailing parameters, return types, and exceptions.
- Never perform silent, sweeping refactors of code blocks outside your immediate task scope. Keep diffs as small and readable as possible.

### AI Agent Self-Check
Before outputting long-term codebase modifications, verify:
1. Did you write comprehensive unit tests with edge-case validation for all new code?
2. Does the code compile with zero warnings and pass strict linter audits?
3. If a temporary shortcut was taken, did you document it in `TECH_DEBT.md`?
4. Are all API changes recorded and explained with robust JSDoc/docstring comments?
5. Are you using existing packages and standard libraries before recommending new dependencies?
