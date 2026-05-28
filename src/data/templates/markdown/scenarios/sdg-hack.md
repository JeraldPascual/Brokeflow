## SCENARIO: SDG / SOCIAL CAUSE HACKATHON RULES

### Design and Accessibility Guardrails
- SDG Alignment Visuals: The landing page must feature clear, high-contrast badges or banners stating the target UN Sustainable Development Goal (e.g. SDG 3: Good Health, SDG 13: Climate Action) and its specific target metric.
- Accessibility is Mandatory: Never generate UI elements without explicit accessibility attributes. All interactive buttons, forms, and images must have `aria-label`, `htmlFor` on labels, and descriptive `alt` tags. Judges and testers include people with diverse needs, and accessibility is a core criterion in cause hackathons.
- Inclusive Color Schemes: Ensure all generated charts, lines, and highlights use color-blind friendly palettes. Do not rely solely on red/green signals to convey positive or negative states.

### High-Fidelity Impact Datasets
- Pre-Seeded Realistic Data: Do not generate empty dashboards. Populate the UI immediately with 50-100 realistic statistical records on startup.
- Avoid Vanity/Round Numbers: Seed data must look authentic and pass human audits. Use normal or log-normal distributions rather than flat arrays of identical or clean round numbers (e.g., use step counts ranging between `4523` and `11492`, not exactly `10000` for every record).
- Domain Baselines: Refer to real-world averages in data generation:
  - Carbon/Climate: Average passenger vehicle emits `4.6` metric tons of CO2/year.
  - Water: Average shower uses `17` gallons, household uses `300` gallons/day.
  - Health: Average heart rate `60-100` bpm, WHO activity baseline is `150` min/week.

### Social Pitch Document Layout
- Automatically generate a structured `README.md` at the project root highlighting:
  1. The Problem: A short, high-empathy description of the real-world issue.
  2. The Solution: A one-sentence description of the application's intervention.
  3. The SDG Mapping: Specific UN SDG goals and targets addressed.
  4. The Golden Path Demo: Step-by-step guide for judges to run the local mockup.

### Banned Patterns
- Never write text or hero headers containing cold corporate jargon, confusing acronyms, or generic filler copy. The copy must be empathetic, direct, and human-centered.
- Never require cloud databases or API key set up for the impact metrics dashboard to compile. Generate in-memory or localStorage databases pre-loaded with mock stats.
- Never output charts with missing legends, missing axes, or missing measurement units.

### AI Agent Self-Check
Before outputting code for an SDG/cause application, verify:
1. Is the target SDG goal explicitly visible on the landing page?
2. Do all image and chart assets have robust accessibility alt tags and aria roles?
3. Is the impact dashboard pre-populated with realistic, non-round data?
4. Are all units of measure (kg CO2, liters, kWh) explicitly labeled on graphs?
5. Does the application compile offline with no dependencies on external cloud APIs?
