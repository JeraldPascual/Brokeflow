## SVELTEKIT ROUTING AND ARCHITECTURE RULES

### Directory Routing Standards
- File-Based Boundaries: SvelteKit uses directory-based routing inside `src/routes/`. Strictly conform to file conventions:
  - `+page.svelte` for presentational client UI.
  - `+page.js` / `+page.ts` for universal load data loaders.
  - `+page.server.js` / `+page.server.ts` for server-only loaders and backend form actions.
  - `+layout.svelte` for shared layout shells.
  - `+server.js` / `+server.ts` for custom raw API endpoints.
- Page load functions must always return structured JSON objects. Never return raw database connection instances directly to the universal client loader.

### State and Rune Management
- Svelte 5 Runes standard: If using Svelte 5, declare reactive state exclusively using `$state`, `$derived`, and `$effect` blocks. Never use the legacy `let` reactive definitions or legacy `$:` reactivity labels.
- Progressive Form Actions: When generating forms, use SvelteKit's native Form Actions (`action="..."`) combined with `use:enhance` from `$app/forms` to enable clean progressive enhancement. Never write ad-hoc fetch handlers inside `+page.svelte` unless universal loading is impossible.

### Banned Patterns
- Never import server-only modules (e.g., database clients, private env keys) into `+page.svelte` or client-side universal `+page.js`. SvelteKit compiles these out but will throw a compiler error if import boundaries are violated.
- Never access browser-specific globals (like `window`, `document`, or `localStorage`) during SSR. Always guard using SvelteKit's environment hook:
  ```javascript
  import { browser } from '$app/environment'
  if (browser) {
    // browser-only logic here
  }
  ```

### AI Agent Self-Check
Before outputting SvelteKit code, verify:
1. Are server-only operations isolated to `+page.server.js` or `+server.js`?
2. Are all forms utilizing native actions and `use:enhance`?
3. Is all reactive state declared using runes (if Svelte 5) or stores?
4. Are browser-only globals correctly guarded behind `browser` flags?
5. Do path imports utilize SvelteKit aliases (e.g. `$lib/...`) instead of relative paths?
