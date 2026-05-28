## SCENARIO: HACKATHON MVP BUILD RULES

### Hackathon Architecture Constraints
- The Golden Path Focus: Generate ONLY code that supports the single core user demo flow (the Golden Path). Banish all peripheral screens (settings, account profiles, password reset, about pages) from compilation.
- Mock Authentication: Banned: Auth0, Firebase Auth, JWT middleware, OAuth flows, and password hashing. Generate a hardcoded user session object:
  `const MOCK_USER = { id: '1', email: 'demo@hack.com', name: 'Judge User', role: 'admin' }`
- Skip Strict Types: If compilation fails or slows down due to strict TypeScript configurations, fall back to loose JavaScript with simple JSDoc comments for autocomplete support. Bypassing compilation friction is key.
- Offline-First / Local-Only: Ensure all data reads and writes occur within local memory, local JSON files, or localStorage. The entire application must run perfectly with airplane mode turned on.

### The Sprint Banned List (Do Not Generate)
Never generate or integrate these high-friction features during a hackathon MVP build:
- Real email transmitters (SendGrid, Mailgun, SMTP)
- Direct cloud storage uploads (S3, Cloudinary)
- Multi-factor authentication (2FA, SMS verify)
- Production payment systems (Stripe, Paypal)
- Multi-role permission schemes
- Algolia or Elasticsearch engines
- Real-time WebSockets (use simple polling or local state changes)
- Complex pagination tables (hard limit display to 20 records max)

### Rapid Stub Patterns
When generating complex or asynchronous functionality, always stub it out:
- Asynchronous Delay: Simulate server delays with artificial timers:
  `const mockDelay = () => new Promise(res => setTimeout(res, 500))`
- Auth Bypass: Return true on all navigation guards with a warning: `console.log("Auth bypassed in Hackathon mode")`
- Notifications: Use simple browser dialogs or clean local DOM alert banners instead of pulling in external toast modules.

### Deploy Readiness
- Use environment variables for API endpoints, but generate hardcoded fallback defaults pointing to localhost or mock storage so that the build does not break if env keys are missing.
- Generate pre-seeded data on application startup. If local storage is empty, initialize 10-20 rich mock records so that the judge's dashboard is populated immediately.

### AI Agent Self-Check
Before outputting MVP code, verify:
1. Is the feature on the critical path of the demo deck?
2. Are all cloud connections, databases, and OAuth flows replaced by local stubs or localStorage?
3. Is authentication completely hardcoded to a mock user?
4. Can the application run 100% offline?
5. Are there any placeholder comments? Ensure all files are fully functional.
