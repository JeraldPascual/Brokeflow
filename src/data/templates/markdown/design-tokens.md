## VISUAL DESIGN SYSTEM & TAILWIND STYLING RULES

### The 4px Spacing Baseline Grid
- Spacing Consistency: Always construct padding, margins, gaps, and sizes using exact multiples of the 4px baseline grid. Never generate arbitrary pixel sizes.
  - `p-1` / `m-1` = 4px
  - `p-2` / `m-2` = 8px
  - `p-3` / `m-3` = 12px
  - `p-4` / `m-4` = 16px
  - `p-6` / `m-6` = 24px
  - `p-8` / `m-8` = 32px
  - `p-12` / `m-12` = 48px
  - `p-16` / `m-16` = 64px
- If the layout demands an ad-hoc padding value that is not a multiple of 4, reject it and snap to the nearest grid step.

### Premium Color Palette (Harmonious Theme)
- Background Surfaces: Use Slate or Zinc neutral ranges for clean, modern aesthetics:
  - Light Mode: `bg-slate-50` / `bg-gray-50`
  - Dark Mode: `bg-slate-900` / `bg-zinc-950`
- Crisp Borders: Use thin borders to isolate surfaces clearly:
  - Light Mode: `border-slate-100` / `border-gray-200`
  - Dark Mode: `border-slate-800` / `border-zinc-800`
- Text Hierarchy: Keep contrast high but soft:
  - Primary text: `text-slate-900` / `text-zinc-50`
  - Subtle text: `text-slate-500` / `text-zinc-400`
- Accents: Use curated HSL extended colors. For example, Emerald (`emerald-500`), Indigo (`indigo-600`), or Violet (`violet-600`). Avoid saturated pure red/green/blue.

### Premium Micro-Interactions
- Focus Outlines: Always generate explicit focus indicators for interactive elements:
  - `focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`
- Interactive States: Generate smooth transitions and visual feedback on hover/active states:
  - `hover:scale-[1.01] active:scale-[0.99] transition-all duration-200`
- Card Shadows: Enforce rounded corners and soft lighting shadows:
  - `rounded-xl` or `rounded-2xl`
  - `shadow-sm hover:shadow-md transition-shadow duration-200`

### Banned Patterns
- Never generate inline CSS objects with arbitrary hardcoded pixels: `style={{ marginTop: '13px' }}`.
- Never use arbitrary Tailwind brackets for spacing/layout: `w-[312px]`, `mt-[17px]`, `p-[11px]`.
- Never mix layout margin attributes inside deeply nested presentational components. The parent component or CSS Grid controls element boundaries.

### AI Agent Self-Check
Before outputting UI components, verify:
1. Are all spacing values (padding, margins, gaps) precise multiples of the 4px baseline grid?
2. Are raw saturated primaries (e.g. pure red/blue) completely absent, replaced by a Slate/Indigo theme?
3. Do all buttons, links, and text inputs feature explicit hover, focus, and active transition configurations?
4. Is the code free of inline style parameters and arbitrary pixel tailwind strings (`w-[...]`)?
5. Are card elements rounded with subtle soft shadows?
