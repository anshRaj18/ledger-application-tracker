import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Pipeline from './components/Pipeline.jsx'
import Board from './components/Board.jsx'
import EntryDialog from './components/EntryDialog.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { useTheme } from './hooks/useTheme.js'
import { SEED } from './data/seed.js'

export default function App() {
  const [items, setItems] = useLocalStorage('ledger.v2', SEED)
  const [query, setQuery] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [, toggleTheme] = useTheme()
  const searchRef = useRef(null)

  // "/" jumps to search, unless the person is already typing somewhere
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((i) => `${i.company} ${i.role} ${i.note}`.toLowerCase().includes(q))
  }, [items, query])

  const addItem = (data) =>
    setItems((prev) => [...prev, { id: Date.now(), stage: 'wish', updatedAt: Date.now(), ...data }])

  const moveItem = (id, stage) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.stage !== stage ? { ...i, stage, updatedAt: Date.now() } : i))
    )

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="app">
      <Header
        query={query}
        onQuery={setQuery}
        onAdd={() => setDialogOpen(true)}
        onToggleTheme={toggleTheme}
        searchRef={searchRef}
      />
      <Pipeline items={items} />
      <Board items={visible} onMove={moveItem} onRemove={removeItem} />
      <EntryDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onAdd={addItem} />
    </div>
  )
}
