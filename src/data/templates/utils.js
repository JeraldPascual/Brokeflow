// src/data/templates/utils.js
// Template helpers and content generators for Brokeflow configs.

export function detectStackFromFramework(framework) {
  if (!framework) return 'other'
  const f = framework.toLowerCase()
  if (/astro|sveltekit|nuxt|next|gatsby|remix|vue|angular|svelte/.test(f)) return 'frontend'
  if (/flask|fastapi|django|express|hono|rails|laravel|nestjs|spring|go|rust|php/.test(f)) return 'backend'
  if (/flutter|expo|react native|capacitor|ionic|xamarin|swift|kotlin/.test(f)) return 'mobile'
  if (/jupyter|pandas|numpy|sklearn|scikit|pytorch|tensorflow|keras|matplotlib|seaborn/.test(f)) return 'data'
  return 'other'
}

export function buildToolsGuide(tools) {
  if (!tools || tools.length === 0) return ''

  let text = '\n## SELECTED AI TOOLS WORKFLOW BLUEPRINTS\n'
  
  if (tools.includes('claude')) {
    text += `
### Claude (Claude Code / claude.ai)
- CLAUDE.md Memory Standard: Place this config in the root directory. Claude Code will read it automatically at session startup.
- Maximize Daily Quotas: Keep prompts highly concise. Do not paste files that Claude can read directly. Structure prompts using XML blocks (e.g. '<file_context>', '<instructions>').
- Refusal of Placeholders: If Claude generates code containing '// ...' or comments instead of code, reply with: 'Expand the comments and output the full complete code file.'
`
  }
  if (tools.includes('copilot')) {
    text += `
### GitHub Copilot
- Custom Instructions File: Save this file as '.github/copilot-instructions.md' in your repository to inject these rules into Copilot Chat.
- Trigger Autocomplete: Write a multi-line comment describing your algorithmic goal, press Enter, and wait for Copilot to suggest the function body.
- Context Control: Open only the files relevant to the active task in your editor tabs to prevent Copilot from drawing context from irrelevant files.
`
  }
  if (tools.includes('gemini')) {
    text += `
### Gemini (Google AI Studio)
- 1M+ Context Leverage: Go to Google AI Studio, get a free API key, and use the web interface. You can upload the ENTIRE codebase or full developer documentation PDFs.
- System Instructions: Copy the 4 Laws and place them inside the 'System Instructions' box in AI Studio.
- Temperature settings: Keep temperature low (0.2 - 0.4) for logical and structural tasks, and turn it up (0.7) only for drafting marketing copy.
`
  }
  if (tools.includes('cursor')) {
    text += `
### Cursor
- .cursorrules integration: Save this file as '.cursorrules' in the repository root for Cursor's chat and inline Cmd+K prompts.
- Targeted References: Use '@Files' or '@Folders' references to target exact files. Banned: broad codebase queries which dilute prompt precision.
- Inline edits: Use Cmd+K for fast modifications. Review the interactive side-by-side diff window carefully before accepting.
`
  }
  return text
}

export function buildQuickStart(stack, framework) {
  const fw = (framework || '').toLowerCase()
  if (stack === 'frontend' || stack === 'fullstack') {
    if (fw.includes('next')) {
      return `\`\`\`bash
# Install dependencies
npm install

# Run the development server (Next.js)
npm run dev
\`\`\``
    }
    if (fw.includes('astro')) {
      return `\`\`\`bash
# Install dependencies
npm install

# Run the development server (Astro)
npm run dev
\`\`\``
    }
    return `\`\`\`bash
# Install dependencies
npm install

# Run the development server (Vite/React)
npm run dev
\`\`\``
  }
  if (stack === 'backend') {
    if (fw.includes('flask') || fw.includes('django') || fw.includes('fastapi')) {
      return `\`\`\`bash
# Install python dependencies
pip install -r requirements.txt

# Start the development api server
# FastAPI: fastapi dev main.py
# Flask: python app.py
# Django: python manage.py runserver
\`\`\``
    }
    return `\`\`\`bash
# Install node dependencies
npm install

# Start the API server
npm start
# or: node index.js
\`\`\``
  }
  if (stack === 'mobile') {
    return `\`\`\`bash
# Install dependencies
npm install

# Start Expo dev server
npx expo start
# Or build locally:
# npm run android / npm run ios
\`\`\``
  }
  if (stack === 'data') {
    return `\`\`\`bash
# Install requirements
pip install -r requirements.txt

# Launch Jupyter Lab / Notebooks
jupyter lab
\`\`\``
  }
  return `\`\`\`bash
# Install dependencies
npm install

# Start local server
npm run dev
\`\`\``
}

export function buildGitignore(stack) {
  if (stack === 'frontend' || stack === 'backend' || stack === 'fullstack' || stack === 'mobile') {
    return `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Output build directories
dist/
out/
.next/
.expo/

# Env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
  }
  if (stack === 'data') {
    return `# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg

# Jupyter Notebook checkpoints
.ipynb_checkpoints

# Virtual Environments
.venv/
venv/
ENV/
env/

# Data and outputs
data/raw/*
!data/raw/.gitkeep
outputs/*
!outputs/.gitkeep
.mock_db.json
`
  }
  return `# General ignores
node_modules/
.env
.env.local
dist/
*.log
`
}

export function buildEnvExample(stack, tools, deploy) {
  let content = `# .env.example
# Generated by Brokeflow — copy this file to .env and fill in your private keys.
# WARNING: NEVER commit .env to public GitHub repositories! Add it to .gitignore.

# Local Port / API Configurations
`
  if (stack === 'backend' || stack === 'fullstack') {
    content += `PORT=3000\n`
  }
  if (stack === 'frontend') {
    content += `VITE_API_URL=http://localhost:3000\n`
  } else if (stack === 'fullstack') {
    content += `NEXT_PUBLIC_API_URL=http://localhost:3000\n`
  }

  content += `\n# AI Service Credentials (Only fill in what you use)\n`
  if (tools.includes('claude')) {
    content += `# Anthropic API Key (for Claude Code / SDK)\nANTHROPIC_API_KEY=your_anthropic_key_here\n`
  }
  if (tools.includes('gemini')) {
    content += `# Google Gemini API Key (for AI Studio / SDK)\nGEMINI_API_KEY=your_gemini_key_here\n`
  }
  if (tools.includes('copilot')) {
    content += `# GitHub Copilot settings (if running custom models)\n# COPILOT_API_KEY=\n`
  }

  if (deploy === 'vercel') {
    content += `\n# Vercel Deployment Note:\n# Set these identical environment variables in the Vercel dashboard:\n# Project Settings -> Environment Variables\n`
  }

  return content
}

export function buildViteConfig() {
  return `// vite.config.js
// Generated by Brokeflow — GitHub Pages Deploy Helper.
// If your repository is hosted at https://<USERNAME>.github.io/<REPO-NAME>/
// you must set base to '/<REPO-NAME>/' in production so asset links resolve correctly.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'my-repository-name' with your actual GitHub repository name:
  base: process.env.NODE_ENV === 'production' ? '/[REPLACE_WITH_YOUR_REPO_NAME]/' : '/',
})
`
}
