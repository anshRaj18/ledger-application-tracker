import { STAGES } from '../data/stages.js'

// One bar, split by stage in proportion to how many applications sit there.
export default function Pipeline({ items }) {
  const counts = STAGES.map((s) => items.filter((i) => i.stage === s.key).length)
  const submitted = items.length - counts[0]
  const late = counts[2] + counts[3]

  return (
    <section className="pipeline" aria-label="Pipeline summary">
      <p className="summary">
        {items.length} tracked, {submitted} submitted, {late} at interview or beyond.
      </p>
      <div className="rail" role="img" aria-label={STAGES.map((s, i) => `${s.label}: ${counts[i]}`).join(', ')}>
        {STAGES.map((s, i) =>
          counts[i] ? <span key={s.key} className={`seg s-${s.key}`} style={{ flexGrow: counts[i] }} /> : null
        )}
      </div>
      <ul className="legend">
        {STAGES.map((s, i) => (
          <li key={s.key}>
            <span className={`dot s-${s.key}`} /> {s.label} <b>{counts[i]}</b>
          </li>
        ))}
      </ul>
    </section>
  )
}
