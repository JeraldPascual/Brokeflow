## GITHUB PAGES DEPLOYMENT RULES

### Vite Base Path Alignment
- Repository Base Prefix: If using Vite for frontend compilation, you must set the base path in `vite.config.js` to automatically utilize the repository name as a prefix when compiling for production. Without this prefix, all stylesheet and script assets will fail to load, resulting in a blank screen.
  ```javascript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
    plugins: [react()],
  })
  ```
  Replace `your-repo-name` with the exact directory name of the target repository.

### CI/CD Deployment Actions
- Deploy Workflow Generator: Automatically generate a `.github/workflows/deploy.yml` workflow file containing standard checkout, build, node caching, and Pages upload actions to enable compile-on-push operations.
- Permissions Block: Ensure the yaml workflow explicitly specifies the permissions:
  ```yaml
  permissions:
    contents: read
    pages: write
    id-token: write
  ```

### Client-Side SPA Routing Rewrite
- Static 404 Routing Fix: If using client-side routing (React Router BrowserRouter), you must create a `404.html` fallback file inside the `public/` directory containing a script that redirects traffic back to `index.html` carrying path search parameters:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <script>
      const path = window.location.pathname;
      window.location.replace('/your-repo-name/?path=' + encodeURIComponent(path));
    </script>
  </head>
  </html>
  ```
  Alternatively, advise the developer to swap out `BrowserRouter` for `HashRouter` to prevent routing errors.

### Banned Patterns
- Never generate backend APIs or server route directories inside a GitHub Pages target folder structure. Only static compiled files can be executed.
- Never write credentials or keys inside static files. Since GitHub Pages repos are often public, secrets will be immediately compromised.

### AI Agent Self-Check
Before outputting GitHub Pages setups, verify:
1. Is `base` dynamically mapped to the production repo prefix in `vite.config.js`?
2. Does the `.github/workflows/deploy.yml` contain correct setup-node and upload-pages actions?
3. Is a `404.html` redirect script or `HashRouter` utilized to bypass routing errors?
4. Are all backend elements separated out into distinct API endpoints hosted elsewhere?
5. Are all environment parameters loaded safely without hardcoding?
