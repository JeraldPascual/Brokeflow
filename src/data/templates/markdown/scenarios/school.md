## SCENARIO: GRADED ACADEMIC / COURSE DELIVERABLE RULES

### Architectural and Design Pattern Standards
- Explicit Design Patterns: When implementing structural modules, actively apply standard, idiomatic object-oriented or functional design patterns (e.g. MVC, Factory, Strategy, Observer, Repository). Document these design pattern selections in file-header comments to ensure grading assistants can identify them.
- Educational Comments: Generate comments that explain the *concepts* and *mechanisms* behind the implementation, rather than describing syntax.
  - Bad: `// increments count by 1`
  - Good: `// Singleton Pattern (spec requirement 3.2): ensures unified access to state without instantiating multiple instances`
- Academic Citations: If generating code that relies on external algorithms, reference papers, or complex math, append a short citation comment at the top of the function.

### Strict Input and Edge-Case Validation
- Adversarial Inputs: Graders test code with invalid inputs. You must validate all form fields, query params, and variables for:
  - Empty strings or arrays
  - Negative values or out-of-bound numerical boundaries
  - SQL injection or XSS patterns
  - Null/undefined pointers
- Try/Catch Error Enclosures: Wrap all high-risk operations (database queries, JSON parsing, API fetches) in try/catch blocks that render user-friendly, graceful error screens instead of crashing with a blank or white screen.

### Clean Code and Lint Compliance
- Zero Warnings Policy: Generated code must compile without ESLint or language-specific compiler warnings. Ensure types are robust, variables are not declared unused, and syntax conforms strictly to target language norms.
- TypeScript Strict Mode: When generating TypeScript, configure code to compile under `strict: true`. Avoid using the `any` type keyword. Write clean, complete interface and type definitions.

### Automated Testing and Documentation
- Comprehensive Unit Tests: Always generate a matching test suite alongside core logic. Tests must assert:
  - Normal, expected operation paths
  - Edge cases (max bounds, empty states, zero values)
  - Failure states (handles thrown exceptions correctly)
- Grading Readme Layout: Generate a `README.md` detailing:
  - Prerequisites (exact Node/Python/OS version required)
  - Detailed installation and environment variable setups (`.env.example`)
  - A step-by-step verification checklist for the grading assistant.

### AI Agent Self-Check
Before outputting academic code, verify:
1. Is every input parameter validated against out-of-bound or null values?
2. Are grading-critical design patterns implemented and explicitly labeled in comments?
3. Does the generated code pass strict compiler configurations with zero warnings?
4. Are matching unit tests provided covering both normal flows and edge/failure states?
5. Is an detailed `.env.example` generated to prevent "it works on my machine" issues?
