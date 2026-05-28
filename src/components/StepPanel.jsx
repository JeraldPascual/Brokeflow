import Icon from './Icons'

export default function StepPanel({
  state, currentStep, stepCount,
  select, setFramework, canAdvance, advance, back, isSelected,
}) {
  const showFwInput = currentStep.id === 'stack' && state.stack

  return (
    <div className="bg-white border-2 border-[var(--border)] rounded-2xl p-8 shadow-sm animate-fade-up">
      {/* Progress */}
      <div className="flex items-center gap-1.5 mb-7">
        {Array.from({ length: stepCount }).map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-all duration-300"
            style={{
              background: i < state.step
                ? 'var(--petronas)'
                : i === state.step
                  ? 'var(--teal)'
                  : 'var(--border)',
            }}
          />
        ))}
        <span className="text-xs font-bold text-[var(--text-subtle)] whitespace-nowrap ml-2">
          {state.step + 1}/{stepCount}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-black tracking-tight text-[var(--teal-deeper)] mb-1">
        {currentStep.question}
      </h2>
      <p className="text-sm text-[var(--text-muted)] mb-4">{currentStep.sub}</p>

      {currentStep.multi && (
        <span className="inline-block bg-[var(--petronas-lt)] border-2 border-[var(--border-med)] rounded-full px-3 py-0.5 text-xs font-bold text-[var(--teal-dark)] tracking-wider mb-4">
          SELECT ALL THAT APPLY
        </span>
      )}

      {/* Options — Phase 5: min-h-11 for 44px touch targets */}
      <div className="flex flex-col gap-2 mb-4">
        {currentStep.options.map(opt => {
          const selected = isSelected(opt.id)
          return (
            <div
              key={opt.id}
              onClick={() => select(opt.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all min-h-11
                ${selected
                  ? 'border-[var(--teal)] bg-white shadow-md shadow-teal-DEFAULT/10'
                  : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-med)] hover:bg-white'
                }`}
            >
              {/* Checkbox / radio indicator */}
              <div className={`w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all
                ${currentStep.multi ? 'rounded' : 'rounded-full'}
                ${selected
                  ? 'bg-[var(--teal)] border-2 border-[var(--teal)]'
                  : 'border-2 border-[var(--border-med)] bg-white'
                }`}
              >
                {selected && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                     <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              <Icon name={opt.icon} className="text-[var(--teal)] mt-0.5 flex-shrink-0" size={18} />

              <div>
                <div className={`text-sm font-bold mb-0.5 transition-colors ${selected ? 'text-[var(--teal-dark)]' : 'text-[var(--text)]'}`}>
                  {opt.label}
                </div>
                <div className="text-xs text-[var(--text-muted)] leading-snug">{opt.desc}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Framework input */}
      {showFwInput && (
        <div className="mb-5">
          <div className="text-xs font-black tracking-widest text-[var(--teal)] mb-1.5">
            {state.stack === 'other' ? 'DESCRIBE YOUR STACK' : 'SPECIFY FRAMEWORK (optional)'}
          </div>
          <input
            type="text"
            value={state.framework}
            onChange={e => setFramework(e.target.value)}
            placeholder={
              state.stack === 'other'
                ? 'e.g. Astro + Capacitor, SvelteKit, Godot…'
                : 'e.g. Next.js, Astro, FastAPI, Flutter…'
            }
            className="w-full px-4 py-2.5 border-2 border-[var(--border-med)] rounded-xl bg-[var(--bg)] text-sm font-medium text-[var(--text)] focus:outline-none focus:border-[var(--teal)] transition-colors"
          />
        </div>
      )}

      {/* Nav — Phase 2: dynamic label based on stepCount, not hardcoded 3 */}
      <div className="flex gap-2">
        {state.step > 0 && (
          <button
            onClick={back}
            className="px-5 py-3 rounded-full border-2 border-[var(--border-med)] bg-white text-sm font-bold text-[var(--text-muted)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition-all"
          >
            ← Back
          </button>
        )}
        {/* Phase 5: replaced inline style with CSS classes */}
        <button
          onClick={advance}
          disabled={!canAdvance()}
          className={`flex-1 py-3 rounded-full text-sm font-black tracking-wide transition-all disabled:opacity-30 disabled:cursor-not-allowed
            ${canAdvance() ? 'btn-primary' : 'btn-muted'}`}
        >
          {state.step < stepCount - 1 ? 'Next →' : 'Generate Config ⚡'}
        </button>
      </div>
    </div>
  )
}
