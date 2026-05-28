## SERVER DEPLOYMENT RULES (VPS / RAILWAY / RENDER)

### Process Persistence and Management
- PM2 Configuration: When targeting a VPS deployment (e.g. EC2, DigitalOcean), generate a `ecosystem.config.js` PM2 configuration file in the project root to ensure backend processes restart automatically on crashes or reboots:
  ```javascript
  module.exports = {
    apps: [{
      name: "backend-service",
      script: "./server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env: { NODE_ENV: "production" }
    }]
  }
  ```
- Startup Procfile: For Render or Railway platforms, generate a standard `Procfile` mapping the web entry script (e.g., `web: node server.js` or `web: uvicorn main:app --host 0.0.0.0 --port $PORT`).

### Network and CORS Configurations
- Dynamic Port Bindings: Bind the web server port exclusively using the environment variable hook `process.env.PORT` (JS) or `os.environ.get('PORT')` (Python). Never hardcode port integers.
- Secure Reverse Proxy: If generating Nginx templates, ensure correct proxy header configurations are set up to handle SSL verification, upgrade requests, and client IP mappings.
- CORS Whitelist: Explicitly bind the CORS origin mapping to a dynamic environment variable `process.env.FRONTEND_URL` rather than leaving it open to `*` in production mode.

### Database Pooling and Reconnection
- Pool Constraints: If connecting to free-tier databases (e.g., Supabase, Neon) which have limited concurrent connection metrics, configure database clients to use connection pools with a low maximum connection count (e.g. `max: 5`) and explicit idle timeouts to prevent crashing.

### Banned Patterns
- Never write credentials, database access strings, or private JWT secret keys inside any codebase files.
- Never write synchronous, blocking I/O calls inside HTTP route handlers.

### AI Agent Self-Check
Before finalizing server deployments, verify:
1. Is a `Procfile` or `ecosystem.config.js` generated to handle process daemon execution?
2. Does the server listen dynamically on `process.env.PORT` or standard environment bindings?
3. Is CORS configured to load backend permissions from dynamic environment URLs?
4. Are database connections throttled via small-pool thresholds to prevent connection crashes?
5. Are all environment keys listed in `.env.example`?
