## VERCEL / NETLIFY DEPLOYMENT RULES

### Router Rewrite and Redirect Rules
- Router Rewrites: If the application is a Single Page Application (SPA) using client-side routing (e.g. React Router, Vue Router), you must automatically generate a `vercel.json` configuration file at the repository root containing:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
  Without this rewrite rule, hard refreshes on any subpath will return a 404 page.

### Build and Environment Parameters
- Node Runtime Configuration: Define the target Node version inside `package.json` under the `engines` field (e.g., `"node": "20.x"`) to prevent build failures caused by mismatching local and cloud versions.
- Dynamic Environment URLs: Ensure all API endpoints are loaded from environment variables (e.g., `process.env.VITE_API_URL` or `process.env.NEXT_PUBLIC_API_URL`). Never generate hardcoded server URLs in source files.

### Netlify Deployment Compilations
- If Netlify is utilized, generate a `netlify.toml` file mapping build destinations and redirects:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Banned Patterns
- Never write credentials, database access strings, or cloud tokens in any build files or generated components.
- Never write hardcoded `http://localhost` references. Use environment variable boundaries.

### AI Agent Self-Check
Before finalizing Vercel/Netlify deployments, verify:
1. Is a `vercel.json` or `netlify.toml` generated to handle client-side routing rewrites?
2. Are all API requests routed dynamically using environment variables or relative root endpoints?
3. Is the Node version specified in the `engines` block of `package.json`?
4. Is a clean `.env.example` updated with the required deployment variables?
5. Does the local `npm run build` output bundle size stay clean of massive unzipped structures?
