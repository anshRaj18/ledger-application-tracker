export default function Header({ query, onQuery, onAdd, onToggleTheme, searchRef }) {
  return (
    <header className="header">
      <h1>Where things stand</h1>
      <div className="tools">
        <input
          ref={searchRef}
          className="search"
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search applications  ( / )"
          aria-label="Search applications"
        />
        <button type="button" className="btn" onClick={onToggleTheme}>
          Switch theme
        </button>
        <button type="button" className="btn primary" onClick={onAdd}>
          Add application
        </button>
      </div>
    </header>
  )
}
