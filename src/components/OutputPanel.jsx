// src/components/OutputPanel.jsx
// Shows generated files: quick-copy, tree view, file browser with copy, ZIP download.
// Phase 4: quick-copy block, file count badge, clickable tree, post-download message
// Phase 5: responsive browse sidebar, full-width mobile ZIP button, no inline styles

import { useState } from 'react'
import { buildFiles } from '../data/templates'
import { parseMarkdownToHtml } from '../data/templates/utils'
import JSZip from 'jszip'

function buildTree(files) {
  const root = {}
  Object.keys(files).forEach(path => {
    const parts = path.split('/')
    let node = root
    parts.forEach((p, i) => {
      if (i === parts.length - 1) node[p] = '__file__'
      else { node[p] = node[p] && node[p] !== '__file__' ? node[p] : {}; node = node[p] }
    })
  })
  return root
}

const EXT_COLORS = { md: '#7C3AED', js: '#D97706', py: '#059669', sh: '#DC2626' }

// Phase 4c: TreeNode is now clickable — passes full path up via onFileClick
function TreeNode({ name, node, depth, path, onFileClick }) {
  const isFile = node === '__file__'
  const ext = name.includes('.') ? name.split('.').pop() : ''
  const color = isFile ? (EXT_COLORS[ext] || '#4A7370') : '#005855'

  return (
    <div>
      <div
        className={`flex items-center gap-1.5 py-1 text-xs font-medium transition-opacity ${isFile ? 'cursor-pointer hover:opacity-60' : ''}`}
        style={{ paddingLeft: depth * 18, color }}
        onClick={isFile ? () => onFileClick(path) : undefined}
      >
        <span className="text-[var(--text-subtle)] text-[10px]">{isFile ? '─' : '▾'}</span>
        <span className={isFile ? 'font-semibold hover:underline underline-offset-2' : 'font-bold'}>{name}</span>
      </div>
      {!isFile && Object.entries(node).map(([k, v]) => (
        <TreeNode
          key={k} name={k} node={v} depth={depth + 1}
          path={path ? `${path}/${k}` : k}
          onFileClick={onFileClick}
        />
      ))}
    </div>
  )
}

export default function OutputPanel({ answers, onReset, onLogEvent, onUpdateFile }) {
  const [tab, setTab]             = useState('tree')
  const [activeFile, setFile]     = useState('AGENTS.md')
  const [activeSubTab, setActiveSubTab] = useState('edit') // 'edit' or 'preview'
  const [copied, setCopied]       = useState(false)
  const [agentsCopied, setACopied]= useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [dlState, setDlState]     = useState('idle')
  const [showWhatsNext, setShowWhatsNext] = useState(false)

  /*
   * [ASSUMPTIONS & TRADEOFFS]
   * - Assumption 1: Toggling between Edit and Preview on mobile saves vertical space (h-[480px]) vs stacking them.
   * - Assumption 2: A horizontal scrolling list of pill buttons is native and intuitive on mobile viewports.
   * - Assumption 3: Stacking the tabs and the full-width Download ZIP button prevents tab-bar horizontal wrapping.
   * - Tradeoff: We utilize CSS media queries (Tailwind md/sm) to keep component layouts unified rather than splitting files.
   * 
   * [ASSERTIONS]
   * - Assertion 1: Non-md screens render edit OR preview, never both. md screens render both side-by-side.
   * - Assertion 2: ZIP button is w-full on mobile, auto on desktop.
   */

  const files = answers.editedFiles || buildFiles(answers)
  const fileNames = Object.keys(files)

  // Phase 4c: clicking a tree file switches to browse tab with that file active
  function handleFileClick(filePath) {
    setFile(filePath)
    setTab('browse')
  }

  async function downloadZip() {
    setDlState('zipping')
    try {
      const zip = new JSZip()
      Object.entries(files).forEach(([path, content]) => zip.file(path, content))
      const blob = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `brokeflow-${answers.framework || answers.stack}-${answers.scenario}.zip`
      a.click()
      URL.revokeObjectURL(url)
      setDlState('done')
      setShowWhatsNext(true)                        // Phase 4d: reveal what's next
      onLogEvent?.('zip_downloaded', {              // Phase 7: analytics
        stack: answers.stack,
        scenario: answers.scenario,
        fileCount: fileNames.length,
      })
      setTimeout(() => setDlState('idle'), 2500)
    } catch {
      setDlState('error')
      setTimeout(() => setDlState('idle'), 2500)
    }
  }

  function copyFile() {
    navigator.clipboard.writeText(files[activeFile] || '').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  function copyAgents() {
    navigator.clipboard.writeText(files['AGENTS.md'] || '').then(() => {
      setACopied(true)
      setTimeout(() => setACopied(false), 1800)
    })
  }

  const dlLabel = { idle: '⬇ Download ZIP', zipping: 'Zipping…', done: '✓ Downloaded', error: 'Copy instead' }
  const chips = [
    answers.framework || answers.stack,
    answers.scenario,
    answers.window,
    answers.team,
    answers.deploy,
    answers.tools.join('+'),
  ].filter(Boolean)

  return (
    <div className="animate-fade-up">
      {/* Summary chips + reconfigure */}
      <div className="flex items-center gap-2 flex-wrap mb-4">
        {chips.map((v, i) => (
          <span key={i} className="bg-white border-2 border-[var(--border-med)] rounded-full px-3 py-0.5 text-xs font-bold text-[var(--teal-dark)]">
            {v}
          </span>
        ))}
        <button
          onClick={onReset}
          className="ml-auto text-xs font-bold text-[var(--text-subtle)] border-2 border-[var(--border)] rounded-full px-3 py-0.5 hover:border-[var(--teal)] hover:text-[var(--teal)] transition-all bg-white"
        >
          ← Reconfigure
        </button>
      </div>

      {/* Phase 4a: Quick-copy AGENTS.md — always above the tabs */}
      <div className="border-2 border-[var(--border)] rounded-xl overflow-hidden mb-4">
        <div
          className="flex items-center justify-between px-4 py-3 bg-[var(--teal-deeper)] cursor-pointer"
          onClick={() => setAgentsOpen(o => !o)}
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black tracking-widest text-[var(--petronas)]">QUICK COPY</span>
            <span className="text-xs font-bold text-white">AGENTS.md</span>
            <span className="text-white/40 text-[10px] hidden sm:inline">— most important file</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="btn-copy-agents"
              onClick={e => { e.stopPropagation(); copyAgents() }}
              className={`text-xs font-black px-3 py-1 rounded-full border transition-all ${
                agentsCopied
                  ? 'bg-[var(--petronas)] border-[var(--petronas)] text-[var(--teal-deeper)]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {agentsCopied ? '✓ COPIED' : 'Copy AGENTS.md'}
            </button>
            <span className="text-white/40 text-xs">{agentsOpen ? '▲' : '▼'}</span>
          </div>
        </div>
        {agentsOpen && (
          <pre className="p-4 text-[10px] text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap break-words font-mono max-h-72 overflow-y-auto bg-[var(--bg)]">
            {files['AGENTS.md']}
          </pre>
        )}
      </div>

      {/* Output card — Phase 5: .output-card-top replaces inline border-top style */}
      <div className="bg-white border-2 border-[var(--border)] rounded-2xl overflow-hidden shadow-sm output-card-top">
        {/* Tab bar — responsive layout stacked on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] px-2 py-2 sm:py-0 gap-2 sm:gap-0 bg-[var(--bg)]/30">
          <div className="flex items-center gap-1.5 flex-wrap">
            {['tree', 'browse'].map(t => (
              <button
                key={t}
                id={`tab-${t}`}
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-xs font-black tracking-widest border-b-2 transition-all
                  ${tab === t
                    ? 'border-[var(--teal)] text-[var(--teal-dark)]'
                    : 'border-transparent text-[var(--text-subtle)] hover:text-[var(--text-muted)]'
                  }`}
              >
                {t === 'tree' ? 'FILE TREE' : 'BROWSE FILES'}
              </button>
            ))}

            {/* Phase 4b: file count badge */}
            <span className="ml-2 bg-[var(--petronas-lt)] text-[var(--teal-dark)] text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full border border-[var(--border-med)]">
              {fileNames.length} files
            </span>
          </div>

          <div className="w-full sm:w-auto px-2 sm:px-3 sm:py-2">
            <button
              id="btn-download-zip"
              onClick={downloadZip}
              disabled={dlState === 'zipping'}
              className={`text-xs font-black px-4 py-2.5 sm:py-1.5 rounded-full border-none transition-all disabled:opacity-50 w-full sm:w-auto
                ${dlState === 'done' ? 'btn-dl-done' : 'btn-dl'}`}
            >
              {dlLabel[dlState]}
            </button>
          </div>
        </div>

        {/* FILE TREE tab */}
        {tab === 'tree' && (
          <div className="p-6">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4 mb-4">
              <div className="text-xs font-black tracking-widest text-[var(--teal)] mb-3">FILE STRUCTURE</div>
              {Object.entries(buildTree(files)).map(([k, v]) => (
                <TreeNode key={k} name={k} node={v} depth={0} path={k} onFileClick={handleFileClick} />
              ))}
            </div>
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4 text-xs text-[var(--text-muted)] leading-relaxed">
              <strong className="text-[var(--teal-dark)]">New project:</strong> download the ZIP → extract into an empty folder → start building.<br />
              <strong className="text-[var(--teal-dark)]">Existing project:</strong> click any file above to open it in the browser tab, then copy.
            </div>
          </div>
        )}

        {/* BROWSE tab — responsive height: h-[480px] on mobile, h-[560px] on sm+ */}
        {tab === 'browse' && (
          <div className="flex flex-col sm:flex-row h-[480px] sm:h-[560px]">
            {/* Sidebar — horizontal scrolling pill buttons on mobile, vertical sidebar with border-l-2 on sm+ */}
            <div className="flex sm:flex-col sm:w-52 border-b sm:border-b-0 sm:border-r border-[var(--border)] bg-[var(--bg)] overflow-x-auto sm:overflow-y-auto flex-shrink-0 p-2 sm:p-0 sm:py-2 gap-2 sm:gap-0 scrollbar-none">
              {fileNames.map(f => (
                <div
                  key={f}
                  onClick={() => setFile(f)}
                  className={`flex-shrink-0 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs cursor-pointer transition-all font-bold rounded-full sm:rounded-none
                    border border-[var(--border)] sm:border-0 sm:border-l-2
                    ${f === activeFile
                      ? 'bg-[var(--teal)] text-white border-[var(--teal)] sm:border-l-[var(--teal)] sm:bg-white sm:text-[var(--teal-dark)]'
                      : 'bg-white text-[var(--text-muted)] hover:bg-[var(--bg)] sm:hover:bg-white sm:bg-transparent sm:border-transparent sm:hover:text-[var(--text)]'
                    }`}
                >
                  {f}
                </div>
              ))}
            </div>

            {/* Content pane with unified header and edit area */}
            <div className="flex-1 flex flex-col relative overflow-hidden bg-white">
              {/* Inline File Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2 flex-shrink-0">
                {activeFile.endsWith('.md') ? (
                  <>
                    {/* Mobile: Toggles. Desktop: label. */}
                    <div className="flex gap-1.5 md:hidden">
                      {['edit', 'preview'].map(sub => (
                        <button
                          key={sub}
                          onClick={() => {
                            setActiveSubTab(sub)
                            onLogEvent?.('sub_tab_changed', { tab: sub, file: activeFile })
                          }}
                          className={`text-[10px] font-black tracking-wider px-3 py-1 rounded-full border transition-all
                            ${activeSubTab === sub
                              ? 'bg-[var(--teal)] border-[var(--teal)] text-white'
                              : 'border-slate-300 text-slate-500 hover:bg-slate-100'
                            }`}
                        >
                          {sub.toUpperCase()}
                        </button>
                      ))}
                    </div>
                    <div className="hidden md:block text-[10px] font-black tracking-widest text-[var(--teal)]">
                      EDITING {activeFile}
                    </div>
                  </>
                ) : (
                  <div className="text-[10px] font-black tracking-widest text-[var(--teal)]">
                    EDITING {activeFile}
                  </div>
                )}

                {/* Copy button inline */}
                <button
                  onClick={copyFile}
                  className={`text-[10px] font-black px-3 py-1.5 rounded-full border-2 transition-all
                    ${copied
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-[var(--border-med)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white hover:border-[var(--teal)]'
                    }`}
                >
                  {copied ? '✓ COPIED' : 'COPY'}
                </button>
              </div>

              {/* Editing / Preview area */}
              <div className="flex-1 overflow-hidden">
                {activeFile.endsWith('.md') ? (
                  <div className="flex flex-col md:flex-row h-full divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {/* Left Column: Monospace Editor */}
                    <div className={`w-full md:w-1/2 h-full relative ${activeSubTab === 'edit' ? 'block' : 'hidden md:block'}`}>
                      <textarea
                        value={files[activeFile] || ''}
                        onChange={e => onUpdateFile?.(activeFile, e.target.value)}
                        placeholder="Type your markdown rules here..."
                        className="w-full h-full p-4 text-[11px] font-mono text-slate-800 bg-slate-50 focus:outline-none resize-none"
                      />
                    </div>
                    {/* Right Column: HTML Rendered Preview */}
                    <div className={`w-full md:w-1/2 h-full overflow-y-auto p-5 bg-white prose max-w-none ${activeSubTab === 'preview' ? 'block' : 'hidden md:block'}`}>
                      <div className="hidden md:block text-[10px] font-black tracking-widest text-[var(--teal)] mb-3 pb-1 border-b border-slate-100">
                        LIVE PREVIEW
                      </div>
                      <div
                        className="text-xs leading-relaxed text-slate-700"
                        dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(files[activeFile]) }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Non-markdown Editor */
                  <textarea
                    value={files[activeFile] || ''}
                    onChange={e => onUpdateFile?.(activeFile, e.target.value)}
                    placeholder="Edit config file..."
                    className="w-full h-full p-4 text-[11px] font-mono text-slate-800 bg-white focus:outline-none resize-none"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Phase 4d: What's next — appears after ZIP download */}
      {showWhatsNext && (
        <div className="mt-4 bg-white border-2 border-[var(--petronas)] rounded-xl p-5 animate-fade-up">
          <div className="text-xs font-black tracking-widest text-[var(--teal)] mb-3">WHAT'S NEXT</div>
          <div className="flex flex-col gap-2 text-xs text-[var(--text-muted)] leading-relaxed">
            <div className="flex gap-2">
              <span className="text-[var(--petronas)] font-black">▸</span>
              <span><strong className="text-[var(--teal-dark)]">New project:</strong> Extract zip → open folder in your editor → run <code className="font-mono bg-[var(--bg)] px-1 rounded">npm install</code> (or equivalent)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--petronas)] font-black">▸</span>
              <span><strong className="text-[var(--teal-dark)]">Existing project:</strong> Add AGENTS.md to your repo root → Claude Code and Copilot will pick it up automatically on next session</span>
            </div>
          </div>
        </div>
      )}

      {/* Why block */}
      <div className="mt-4 bg-white border-2 border-[var(--border)] rounded-xl p-5">
        <div className="text-xs font-black tracking-widest text-[var(--teal)] mb-3">WHY THESE RULES EXIST</div>
        <div className="text-xs text-[var(--text-muted)] leading-relaxed border-l-4 border-[var(--petronas)] pl-4">
          <strong className="text-[var(--teal-dark)]">Surgical Changes</strong> — prevents AI from quietly refactoring files you didn't touch. Saved a hackathon team 45 min of reverting.<br /><br />
          <strong className="text-[var(--teal-dark)]">Assumptions block</strong> — forces the model to surface guesses before writing 200 lines you'll throw away.<br /><br />
          <strong className="text-[var(--teal-dark)]">One prompt = one goal</strong> — keeps context small and output precise, especially under time pressure.
        </div>
      </div>
    </div>
  )
}
