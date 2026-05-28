// src/hooks/useConfigurator.js
// All configurator state lives here.
// Components stay dumb — they just read state and call actions.

import { useState, useEffect } from 'react'
import { STEPS } from '../data/steps'

const INITIAL = {
  step:      0,
  done:      false,
  stack:     null,
  framework: '',
  scenario:  null,
  window:    null,
  tools:     [],
  team:      null,   // Phase 2
  deploy:    null,   // Phase 2
}

// Phase 7: lightweight analytics — console in dev, POST to VITE_ANALYTICS_URL in prod
function logEvent(name, data = {}) {
  const payload = { event: name, ...data, ts: Date.now() }
  if (import.meta.env.DEV) {
    console.log('[Brokeflow]', name, data)
    return
  }
  const url = import.meta.env.VITE_ANALYTICS_URL
  if (!url) {
    console.log('[Brokeflow]', name, data)
    return
  }
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {}) // analytics failures are always silent
}

export function useConfigurator() {
  const [state, setState] = useState(INITIAL)

  const currentStep = STEPS[state.step]

  // Phase 7: fire configurator_started on first load
  useEffect(() => {
    logEvent('configurator_started')
  }, [])

  function select(id) {
    if (currentStep.multi) {
      setState(s => ({
        ...s,
        tools: s.tools.includes(id)
          ? s.tools.filter(t => t !== id)
          : [...s.tools, id],
      }))
    } else {
      setState(s => ({
        ...s,
        [currentStep.id]: id,
        // reset framework when stack changes
        ...(currentStep.id === 'stack' ? { framework: '' } : {}),
      }))
    }
  }

  function setFramework(value) {
    setState(s => ({ ...s, framework: value }))
  }

  function canAdvance() {
    if (currentStep.multi) return state.tools.length > 0
    return !!state[currentStep.id]
  }

  function advance() {
    if (!canAdvance()) return

    // Phase 7: log each step completion with the chosen answer
    const answer = currentStep.multi ? state.tools : state[currentStep.id]
    logEvent('step_completed', { step: currentStep.id, answer })

    if (state.step < STEPS.length - 1) {
      setState(s => ({ ...s, step: s.step + 1 }))
    } else {
      // Phase 7: config generated — log full answers (no PII)
      const { stack, framework, scenario, window: win, tools, team, deploy } = state
      logEvent('config_generated', { stack, framework, scenario, window: win, tools, team, deploy })
      setState(s => ({ ...s, done: true }))
    }
  }

  function back() {
    setState(s => ({ ...s, step: Math.max(0, s.step - 1) }))
  }

  function reset() {
    setState(INITIAL)
  }

  function isSelected(id) {
    if (currentStep.multi) return state.tools.includes(id)
    return state[currentStep.id] === id
  }

  return {
    state,
    currentStep,
    select,
    setFramework,
    canAdvance,
    advance,
    back,
    reset,
    isSelected,
    stepCount: STEPS.length,
    logEvent,   // Phase 7: exposed so OutputPanel can fire zip_downloaded
  }
}
