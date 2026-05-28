<p align="center">
  <img src="assets/logo.svg" width="100" height="100" alt="Brokeflow Logo" />
</p>

<h1 align="center">Brokeflow</h1>

Brokeflow is an open-source, zero-subscription web application that helps student developers establish strict guardrails and behavioral constraints for AI coding agents. By answering a brief series of questions, builders receive drop-in configuration files that keep tools like Claude Code, Copilot, Gemini, and Cursor aligned with industry best practices, preventing common software engineering pitfalls.

## The Problem

AI coding assistants are incredibly powerful, but they often struggle with constraints. When building under pressure, assistants frequently make costly mistakes:
* Hardcoding API keys, credentials, or backend endpoints directly in source files.
* Writing incomplete boilerplate code or placeholder comments like "implement later".
* Performing massive, unprompted refactoring sweeps that break adjacent working code.
* Introducing complex, over-engineered architectures or heavy dependencies for simple hackathon prototypes.
* Writing code that works locally but fails in production due to missing environments or routing.

## The Solution

Brokeflow generates a targeted, context-aware rule file (e.g., AGENTS.md, CLAUDE.md, .cursorrules) along with essential project files (.env.example, custom .gitignore, mock databases, and deployment configurations) based on the student's specific project parameters:
* **Tech Stack:** Tailored rules for Frontend, Backend, Fullstack, Mobile, Data/ML, or Custom systems.
* **Timeline Constraints:** Adjusts agent guidelines from high-speed sprint stubs (under 3 hours) to rigorous engineering standards (multi-week projects).
* **Project Scenarios:** Incorporates specific parameters for Hackathons, Academic Projects, Internships, or Side Projects.
* **AI Tool Integration:** Compiles rules format optimized for Claude Code, GitHub Copilot, Cursor, or Google AI Studio.
* **Deployment Target:** Pre-configures settings for Vercel, Render, Railway, GitHub Pages, or Local-only environments.

---

## The 4 Laws of AI Coding

Every generated configuration enforces a core set of rules derived from modern professional workflows and industry-tested practices:

1. **Think Before Coding:** The agent must print an "Assumptions and Tradeoffs" section before writing code, forcing design clarity before implementation.
2. **Simplicity First:** Code must focus on the minimum lines required. No premature packages, unrequested abstractions, or over-engineering.
3. **Surgical Changes:** The agent must modify only the exact file or function requested. Silent refactors are prohibited.
4. **Goal-Driven Execution:** The agent must state verification steps and run assertions before delivering the final code.

---

## What Brokeflow Generates

Depending on your selection, Brokeflow assembles a customized package:
* **AGENTS.md / CLAUDE.md / .cursorrules:** Structured instructions that define the behavioral laws, framework guidelines, deployment constraints, and self-check steps for your AI agent.
* **.env.example:** A template for environment variables based on the selected tools and stack.
* **.gitignore:** A pre-configured git exclusion file matching your stack.
* **shared/mockDb.js or shared/mock_db.py:** A zero-config local storage mockup so students can build and demo their applications without setting up databases or cloud credentials first.
* **vite.config.js:** A pre-configured file for React/Vite frontends deploying to GitHub Pages to prevent routing and blank screen issues.
* **CONTRIBUTING.md:** Guidelines for student developers on contributing code, suggesting rules, and participating in open source.
* **SDG.md:** An alignment playbook for UN Sustainable Development Goal hackathons, complete with impact tables and slide outlines.

---

## Local Development

Brokeflow is built with React, Vite, and Tailwind CSS.

### Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeraldPascual/Brokeflow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Brokeflow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## License

This project is open-source and free for all student developers, licensed under the MIT License. See [LICENSE](file:///c:/Users/user/Desktop/brokeflow/LICENSE) for more details.
