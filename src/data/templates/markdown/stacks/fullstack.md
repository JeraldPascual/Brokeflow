## FULL STACK RULES

### Directory Boundaries
- Maintain separate directories for frontend/ and backend/. A shared/ directory holds types, schemas, and utilities used by both sides.
- Never generate imports that cross the boundary: no backend module imported into a frontend component, no frontend hook imported into a server route. If both sides need the same type, generate it in shared/.
- Each workspace (frontend, backend) must have its own package.json. Never generate a single flat dependency tree for a fullstack project.

### Schema-First Development
- When generating a new API endpoint, always generate the shared type/schema definition first (in shared/), then the backend handler, then the frontend API client function. Never generate them independently.
- Use a single validation library (Zod, Joi, or Pydantic) for both client-side and server-side validation. Generate the schema once in shared/ and import on both sides.
- When updating an existing endpoint, update the route handler AND the corresponding frontend API call in the same response. Both sides must stay in sync.

### Naming Consistency
- Use camelCase for JavaScript/TypeScript on both frontend and backend. If the database uses snake_case, map at the data access layer (model or repository) and never expose snake_case to the frontend.
- API endpoints use kebab-case: /api/user-profiles, not /api/userProfiles or /api/user_profiles.

### Environment and Feature Toggling
- Generate feature toggles using environment variables: VITE_USE_MOCK=true for frontend, USE_MOCK_DB=true for backend. Never generate code that requires commenting/uncommenting blocks to swap between mock and real data sources.
- All API base URLs must come from environment variables: VITE_API_URL or NEXT_PUBLIC_API_URL on the frontend, never hardcoded localhost:3000.

### Banned Patterns
- Never generate frontend code that reads window or localStorage during server-side rendering (Next.js, Nuxt, SvelteKit). Guard with typeof window !== 'undefined' or place inside useEffect.
- Never generate a frontend fetch call with a hardcoded URL. Always use an environment variable or a centralized API client module.
- Never generate separate type definitions for the same data shape on frontend and backend. One source of truth in shared/.
- Never generate frontend form validation without corresponding server-side validation. Client validation is for UX, server validation is for security. Both are required.

### Free-Tier Constraints
- For hosting, generate configuration compatible with: Vercel (serverless APIs + static frontend) or split deploy (Vercel frontend + Render/Railway backend).
- For databases, prefer Supabase Free Tier (Postgres + Auth + Realtime) or Neon Serverless Postgres.
- For authentication, prefer Supabase Auth or NextAuth.js. Never generate custom auth-from-scratch during hackathons or prototypes.

### Folder Structure (Generate This on Scaffold)
```
project-root/
  frontend/
    src/
      components/     # Stateless UI components
      hooks/          # Custom hooks with state logic
      pages/          # Route-level components
      api/            # Frontend API client functions
  backend/
    routes/           # Route handlers (HTTP concerns only)
    services/         # Business logic (testable functions)
    middleware/       # Auth, CORS, error handling
  shared/
    types.ts          # Shared TypeScript interfaces
    schemas.ts        # Validation schemas (Zod/Joi)
  .env.example
  AGENTS.md
```

### AI Agent Self-Check
Before outputting fullstack code, verify:
1. Are shared types defined once in shared/ and imported by both sides?
2. Do frontend API calls use environment variables for the base URL?
3. Is input validated on both client and server?
4. Do all SSR-rendered components avoid browser-only APIs?
5. Are naming conventions consistent across the entire stack?
