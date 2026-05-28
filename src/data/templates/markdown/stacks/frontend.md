## FRONTEND / UI RULES

### Component Architecture
- Components are stateless. They accept props and call handlers. Never generate useState, useEffect, or data fetching logic inside presentational components. State belongs in custom hooks or parent containers.
- One component per file. The filename matches the default export exactly.
- Use semantic HTML: header, main, section, footer, article, nav. Never generate unstyled div wrappers when a semantic element exists.
- All images must have explicit width, height, and alt attributes. Lazy-load below-the-fold images with loading="lazy".

### Layout and Spacing
- Use the 4px baseline grid for all spacing: 4, 8, 12, 16, 24, 32, 48, 64. If a margin or padding value is not a multiple of 4, reject it and round to the nearest multiple.
- Horizontal centering: use mx-auto with max-w-screen-xl (1280px) for desktop containers.
- Prefer CSS Grid or Flexbox for all layouts. Never use absolute positioning for page structure or nested margin hacks.
- Never generate inline styles with arbitrary pixel values: style={{ marginTop: '13px' }} or w-[312px]. Use design tokens.

### Dark Mode
- Use Tailwind dark: modifier or CSS prefers-color-scheme media query only. Never toggle dark mode by flipping class names with JavaScript state.

### Banned Patterns
- Never generate code that reads window, localStorage, or Date.now() during server render (SSR). Wrap browser-only code inside useEffect or behind a typeof window !== 'undefined' guard. Hydration mismatches crash the entire page.
- Never use array index as key prop in list rendering when list items can be reordered, added, or removed. Use a stable unique ID from the data source.
- Never import an entire icon library. Import individual icons: import { Search } from 'lucide-react', not import * as Icons.
- Never generate forms without: htmlFor on labels, required attributes on inputs, and onSubmit with preventDefault on the form element.
- Never generate fetch calls without error handling. Every fetch must have a .catch() or try/catch wrapper that displays a user-facing error message.

### CORS Prevention
- When generating Vite config for development, include a proxy configuration for API routes: server.proxy['/api'] = 'http://localhost:3000'. This prevents CORS errors during local development.

### Free-Tier Constraints
- Prefer shadcn/ui or Radix Primitives over heavy UI libraries (Material UI, Ant Design) to minimize bundle size.
- Use Fontsource or Google Fonts for typography. Use Heroicons or Lucide for icon sets.
- For prototypes, use URL query parameters (useSearchParams) for shareable state and localStorage as a mock database layer. Never require a cloud database for demos.
- Run npm run build before every demo. If the output exceeds 500KB, audit and tree-shake unnecessary imports.

### AI Agent Self-Check
Before outputting frontend code, verify:
1. Does every component receive data via props and dispatch events via callback props?
2. Are all side effects (fetching, timers, subscriptions) inside useEffect with correct dependency arrays?
3. Does the layout use semantic HTML elements?
4. Are all interactive elements accessible (role, aria-label, tabIndex where needed)?
5. Does the code compile without warnings?
