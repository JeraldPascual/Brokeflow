// src/components/Configurator.jsx
// Orchestrates the step flow and switches to OutputPanel when done.

import { useConfigurator } from '../hooks/useConfigurator'
import StepPanel from './StepPanel'
import OutputPanel from './OutputPanel'

export default function Configurator() {
  const configurator = useConfigurator()
  const { state, reset, logEvent, updateFile } = configurator

  return (
    <section id="configurator" className={`${state.done ? 'max-w-5xl' : 'max-w-[600px]'} mx-auto px-4 sm:px-6 pb-20 transition-all duration-300`}>
      {!state.done
        ? <StepPanel {...configurator} />
        : <OutputPanel answers={state} onReset={reset} onLogEvent={logEvent} onUpdateFile={updateFile} />
      }
    </section>
  )
}
