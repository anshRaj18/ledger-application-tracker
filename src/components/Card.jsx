import { useState } from 'react'
import { timeAgo } from '../utils.js'

const Icon = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

export default function Card({ item, stageLabel, canBack, canForward, onBack, onForward, onRemove }) {
  const [dragging, setDragging] = useState(false)

  return (
    <article
      className={`card${dragging ? ' dragging' : ''}`}
      draggable
      tabIndex={0}
      aria-label={`${item.company}, ${item.role}, ${stageLabel}`}
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', String(item.id))
        e.dataTransfer.effectAllowed = 'move'
        setDragging(true)
      }}
      onDragEnd={() => setDragging(false)}
    >
      <h3>{item.company}</h3>
      <p className="role">{item.role}</p>
      {item.note && <p className="note">{item.note}</p>}
      <footer>
        <span className="when">{timeAgo(item.updatedAt)}</span>
        <span className="actions">
          <button type="button" onClick={onBack} disabled={!canBack} aria-label="Move to previous stage">
            <Icon d="M10 3 5 8l5 5" />
          </button>
          <button type="button" onClick={onForward} disabled={!canForward} aria-label="Move to next stage">
            <Icon d="m6 3 5 5-5 5" />
          </button>
          <button type="button" onClick={onRemove} aria-label={`Delete ${item.company}`}>
            <Icon d="m4 4 8 8M12 4l-8 8" />
          </button>
        </span>
      </footer>
    </article>
  )
}
