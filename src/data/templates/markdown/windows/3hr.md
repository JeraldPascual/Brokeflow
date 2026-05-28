## TIME WINDOW: UNDER 3 HOURS (SPRINT SPEED RULES)

### Sprint Execution Speed (Velocity Over Maintainability)
- Hyper-Velocity Mode: You have under 180 minutes total. Prioritize raw speed over clean structure, scalability, testing, and types. Skip writing unit tests, TypeScript interfaces, documentation, loading states, and error boundary wrappers.
- Pure JavaScript Only: If a TypeScript compilation or configuration error takes more than 30 seconds to solve, fall back immediately to standard JavaScript. Do not waste sprint time on compilers.
- Complete Deliverables Only: Never generate placeholder comments like `// TODO: implement later` or `// ... rest of component`. Every file must be fully functional upon generation.

### Stubs and Mocking Requirements
- Hardcoded Authentication: Banned: Clerk, Auth0, Firebase Auth, JWT middleware, OAuth, or encryption schemes. Always mock user sessions instantly:
  `const MOCK_USER = { id: '1', name: 'Demo User', email: 'demo@hack.com', role: 'admin' }`
- Offline Local Mocking: Banned: AWS S3, Cloudinary, Stripe, SendGrid, database connections, and external REST APIs. Instead, read/write directly to localStorage (JS) or a local mock JSON database (Python).
- Latency Simulation: Stub all async network operations with hardcoded outputs enclosed in artificial timers to simulate servers:
  `const fakeFetch = () => new Promise(res => setTimeout(() => res(MOCK_DATA), 300))`

### Banned High-Friction Implementations
Never generate code for:
- Payment pipelines (Stripe, Paypal)
- Cloud uploads (S3, Cloudinary)
- Custom authentication flows
- Live WebSockets (use local state triggers)
- Multi-role permission logic (treat everyone as Admin)
- Pagination (limit lists to 20 records)
- i18n/Internationalization
- Analytics and user tracking

### Emergency Workarounds
- Dependency Failures: If a package installation fails or creates compiler conflicts, remove it immediately and write a simple, pure JS/CSS helper from scratch. Do not debug dependency versions.
- local-only Fallback: Ensure all demo assets, visuals, and configurations compile perfectly offline. Graders must be able to run the demo with zero API keys or network connection.

### AI Agent Self-Check
Before finalizing sprint code, verify:
1. Is this feature on the critical demo flow path?
2. Are all cloud connections, databases, and OAuth systems replaced by offline local stubs?
3. Is authentication completely hardcoded?
4. Are there any incomplete placeholders (`// TODO:`)?
5. Does the application compile instantly?
