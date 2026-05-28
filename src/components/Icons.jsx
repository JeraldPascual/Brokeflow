// src/components/Icons.jsx
// Monoline SVG icons for configurator options.
// Lucide-style: 24x24 viewBox, 2px stroke, no fill.
// Each icon is a named export keyed by the id used in steps.js.

const s = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const icons = {
  // Stack
  frontend: (
    <svg {...s}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
  ),
  backend: (
    <svg {...s}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  mobile: (
    <svg {...s}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  fullstack: (
    <svg {...s}><rect x="2" y="2" width="20" height="20" rx="2" /><line x1="2" y1="8" x2="22" y2="8" /><line x1="8" y1="8" x2="8" y2="22" /></svg>
  ),
  data: (
    <svg {...s}><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>
  ),
  other: (
    <svg {...s}><path d="M4.5 9.5 9 4l4.5 5.5" /><path d="M19.5 14.5 15 20l-4.5-5.5" /><path d="M9.5 19.5 4 15l5.5-4.5" /><path d="M14.5 4.5 20 9l-5.5 4.5" /></svg>
  ),

  // Scenario
  'sdg-hack': (
    <svg {...s}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" /></svg>
  ),
  'general-hack': (
    <svg {...s}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
  ),
  school: (
    <svg {...s}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" /></svg>
  ),
  side: (
    <svg {...s}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
  ),
  internship: (
    <svg {...s}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
  ),

  // Window
  '3hr': (
    <svg {...s}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /><path d="M4 4l2 2" /><path d="M20 4l-2 2" /></svg>
  ),
  day: (
    <svg {...s}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  long: (
    <svg {...s}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
  ),

  // Tools
  claude: (
    <svg {...s}>
      <path d="M4 15c1-3 3-5 8-5s7 2 8 5M8 11c.5-2 2-3.5 4-3.5s3.5 1.5 4 3.5M10 7c.5-2 1.5-3 2-3s1.5 1 2 3M12 10v10" />
    </svg>
  ),
  copilot: (
    <svg {...s}>
      <path d="M12 2a8 8 0 0 0-8 8v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a8 8 0 0 0-8-8z" />
      <path d="M9 14h6" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <path d="M2 14c1.5 0 2-1 2-2M22 14c-1.5 0-2-1-2-2" />
    </svg>
  ),
  gemini: (
    <svg {...s}>
      <path d="M12 3c0 4.5 4.5 9 9 9-4.5 0-9 4.5-9 9 0-4.5-4.5-9-9-9 4.5 0 9-4.5 9-9Z" />
    </svg>
  ),
  cursor: (
    <svg {...s}><path d="M5 3l14 9-6 2-3 6z" /><path d="M14 15l5 5" /></svg>
  ),
  github: (
    <svg {...s}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),

  // Team
  solo: (
    <svg {...s}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  pair: (
    <svg {...s}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  team: (
    <svg {...s}><path d="M14 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M23 21v-2a4 4 0 0 0-2-3.46" /></svg>
  ),

  // Deploy
  vercel: (
    <svg {...s}><path d="M12 2l10 18H2z" /></svg>
  ),
  server: (
    <svg {...s}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
  ),
  pages: (
    <svg {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
  ),
  none: (
    <svg {...s}><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
  ),
}

export default function Icon({ name, size = 20, className = '' }) {
  const icon = icons[name]
  if (!icon) return null
  return (
    <span className={`inline-flex items-center justify-center flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      {icon}
    </span>
  )
}
