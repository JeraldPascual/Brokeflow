## BACKEND / API RULES

### API Response Format
- Every endpoint must return a consistent envelope: { data, error, status }. Never mix response shapes between endpoints. The frontend must never guess the response structure.
- Always return appropriate HTTP status codes: 200 for success, 201 for creation, 400 for bad input, 401 for unauthenticated, 403 for unauthorized, 404 for not found, 500 for server errors. Never return 200 with an error message in the body.

### Input Validation
- Validate every incoming request body, query parameter, and URL parameter at the route level before passing to business logic. Use Zod, Joi, or Pydantic. Never trust req.body or request.json blindly.
- Always parameterize database query inputs. Never concatenate user input into SQL strings. This is how SQL injection happens.

### Error Handling
- Wrap every route handler in try/catch or use error middleware. Never let raw stack traces leak to the client response. A leaked traceback exposes file paths, dependency versions, and internal logic to attackers.
- Every catch block must: log the error with context (function name, input values), then return a safe, generic error response to the client.
- For async route handlers, ensure unhandled promise rejections are caught. An uncaught async throw crashes the entire Node process.

### Architecture
- Keep route handlers under 30 lines. Extract business logic into separate service functions in a services/ directory. Route files handle HTTP concerns only: parse input, call service, format response.
- Write type hints (Python) or JSDoc signatures (JavaScript) for all function parameters and return values.
- Store all API keys, database URLs, JWT secrets, and OAuth credentials in environment variables. Read via process.env or os.environ. If any credential appears in generated source code, that is a critical failure. Reject and regenerate.

### Database Access
- Never generate N+1 queries. If fetching a list of parent records, include related child records in a single query using JOIN, eager loading (Prisma include), or batch fetching. Never loop through parents and query children individually.
- For demo prototyping, generate code using the shared/mock_db module (localStorage wrapper for JS, JSON file for Python). Never require cloud database credentials for prototypes to run.
- When generating database queries, always include: connection error handling, query timeout limits, and parameterized inputs.

### Security Guardrails
- Never generate hardcoded passwords, API keys, or secrets in source files. Always reference environment variables.
- When generating CORS configuration, explicitly whitelist the frontend origin. Use cors({ origin: '*' }) only for hackathon prototypes and add a comment marking it as a known shortcut.
- When generating authentication for demos, use a hardcoded mock user object instead of real auth flows: const MOCK_USER = { id: '1', email: 'demo@app.com', name: 'Demo User' }.

### Banned Patterns
- Never generate code that opens a new database connection per request. Use a connection pool (pg Pool, SQLAlchemy pool, Prisma connection pool).
- Never store dates as local time strings. All dates must use UTC ISO-8601 format: new Date().toISOString() or datetime.now(timezone.utc).isoformat().
- Never generate POST endpoints for read operations. Use GET for reading data, POST for creating.
- Never generate API endpoints without rate limiting on production paths. Include a comment noting where rate limiting should be applied.

### Free-Tier Constraints
- Prefer Supabase Free Tier (500MB Postgres, free auth) or Neon Serverless Postgres over paid databases.
- For API testing, generate .http test files (compatible with Thunder Client or REST Client VS Code extensions) alongside new endpoints.
- Use Vercel Serverless Functions, Supabase Edge Functions, or Cloudflare Workers for free serverless compute.

### AI Agent Self-Check
Before outputting backend code, verify:
1. Does every endpoint return the { data, error, status } envelope?
2. Is every route input validated before reaching business logic?
3. Are all database queries parameterized?
4. Does every async operation have error handling?
5. Are all secrets read from environment variables, never hardcoded?
