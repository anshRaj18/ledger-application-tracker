import { useEffect, useRef, useState } from 'react'

const EMPTY = { company: '', role: '', note: '' }

// Uses the native <dialog>: focus trapping, Esc to close and the backdrop come for free.
export default function EntryDialog({ open, onClose, onAdd }) {
  const ref = useRef(null)
  const [form, setForm] = useState(EMPTY)

  useEffect(() => {
    const dialog = ref.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    onAdd({
      company: form.company.trim(),
      role: form.role.trim(),
      note: form.note.trim(),
    })
    setForm(EMPTY)
    onClose()
  }

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      <form onSubmit={submit}>
        <h2>Add application</h2>
        <label>
          Company
          <input value={form.company} onChange={set('company')} required maxLength={40} autoFocus />
        </label>
        <label>
          Role
          <input value={form.role} onChange={set('role')} required maxLength={50} />
        </label>
        <label>
          Note
          <textarea value={form.note} onChange={set('note')} rows={3} maxLength={120} />
        </label>
        <div className="row">
          <button type="button" className="btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn primary">
            Save application
          </button>
        </div>
      </form>
    </dialog>
  )
}
