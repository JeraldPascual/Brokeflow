## LOCAL DEVELOPMENT RULES (NOT DEPLOYED)

### Path Resolution Safety
- Absolute Path Safety: When performing file reads, writes, database connections, or log outputs locally, never generate simple relative strings like `./data/file.csv`. If the execution terminal is run from another working directory, relative paths will fail. Wrap all directories in absolute path helpers:
  - JS: `path.resolve(__dirname, '../../data/file.csv')`
  - Python: `Path(__file__).parent.resolve() / 'data' / 'file.csv'`

### Environment Loading Verification
- dotenv Initializers: Verify that dotenv or language-specific environment loading tools are executed at the absolute entry point of the server application (e.g. `require('dotenv').config()` or `from dotenv import load_dotenv`).
- env.example Parity: Keep an active `.env.example` file populated with mock keys so team members can copy it to `.env` locally and run the application immediately with zero configurations.

### Unified Command Registry
- Single-Command Startup: Configure standard build and dev runners inside the configuration file (`package.json` scripts, `Makefile`, or script utilities) so the user can boot up frontend, backend, or mock layers simultaneously using one terminal statement.

### Team Connectivity Tunneling
- Tunneling Setup: If team testing is needed, provide instructions or custom script configurations in `package.json` to spin up secure tunneling solutions (`npx localtunnel --port 3000` or `npx ngrok http 3000`) for diagnostic screen-sharing.

### Banned Patterns
- Never write hardcoded local system file system strings containing personal user directories (e.g., `C:/Users/username/desktop/...`).
- Never run development processes without local port availability safeguards or error catch blocks in server bindings.

### AI Agent Self-Check
Before outputting local environment configurations, verify:
1. Do all file operations utilize absolute path boundaries (`__dirname` / `Path(__file__).parent`)?
2. Are all environment keys correctly documented inside `.env.example`?
3. Are standard local start scripts registered in `package.json`?
4. Are database operations wrapped in try-catch pools to prevent server crashes?
5. Does the application start cleanly with a single, standard command?
