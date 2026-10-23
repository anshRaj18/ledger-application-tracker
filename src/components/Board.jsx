import { STAGES } from '../data/stages.js'
import Column from './Column.jsx'

export default function Board({ items, onMove, onRemove }) {
  return (
    <main className="board">
      {STAGES.map((stage, index) => (
        <Column
          key={stage.key}
          stage={stage}
          index={index}
          items={items.filter((i) => i.stage === stage.key)}
          onMove={onMove}
          onRemove={onRemove}
        />
      ))}
    </main>
  )
}
