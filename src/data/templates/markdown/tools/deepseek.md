## DEEPSEEK REASONING MODEL RULES

### Reasoning Loop Enforcement
- Thinking Block Safety: DeepSeek-R1 outputs detailed logical deductions inside `<think>` blocks. Do not strip, alter, or interrupt these reasoning steps. The model must fully complete its chain-of-thought before generating code.
- Separated Output Formatting: The final code modifications, file paths, and instructions must appear entirely outside the `<think> ... </think>` boundary. Use clean, standard markdown code fencing (e.g. ````javascript ... ````) only in the final output section.

### Surgical Output Constraints
- Code Diff Preference: Reasoning models tend to be highly verbose and can exhaust output token limits (typically capped at 4,000 to 8,000 tokens) if they attempt to write out large codebase files from scratch.
- Mandate Surgical Changes: Always instruct the model to write only the specific line changes, function replacements, or unified diffs for existing files, rather than outputting the entire unchanged file.

### AI Agent Self-Check
Before sending a prompt response, verify:
1. Is the logical deduction process completely contained inside the `<think>` tags?
2. Are final code snippets clean and positioned after the thinking block has closed?
3. Did you output only the specific changes instead of duplicate large files?
