import { useState } from 'react'
import { STAGES } from '../data/stages.js'
import Card from './Card.jsx'

export default function Column({ stage, index, items, onMove, onRemove }) {
  const [over, setOver] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setOver(false)
    const id = Number(e.dataTransfer.getData('text/plain'))
    if (id) onMove(id, stage.key)
  }

  return (
    <section className={`col s-${stage.key}`}>
      <h2>
        <span className="dot" />
        {stage.label}
        <span className="count">{items.length}</span>
      </h2>
      <div
        className={`drop${over ? ' over' : ''}`}
        onDragOver={(e) => {
          e.preventDefault()
          setOver(true)
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOver(false)
        }}
        onDrop={handleDrop}
      >
        {items.length === 0 && <p className="empty">Drag a card here or add a new application.</p>}
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            stageLabel={stage.label}
            canBack={index > 0}
            canForward={index < STAGES.length - 1}
            onBack={() => onMove(item.id, STAGES[index - 1].key)}
            onForward={() => onMove(item.id, STAGES[index + 1].key)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>
    </section>
  )
}
