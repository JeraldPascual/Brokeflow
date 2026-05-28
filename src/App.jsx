import Landing from './components/Landing'
import Configurator from './components/Configurator'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Landing />
      <Configurator />
      <footer className="border-t border-[var(--border)] px-8 py-6 text-center text-xs text-[var(--text-subtle)]">
        <span>
          &copy; {new Date().getFullYear()} <strong className="text-[var(--teal-deeper)] font-black">BROKEFLOW</strong>
        </span>
      </footer>
    </div>
  )
}
