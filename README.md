# Ledger

A drag-and-drop tracker for job and internship applications. Move cards through four stages, watch the pipeline bar rebalance, and pick your search back up the next day: everything is saved in your browser.

**Live demo:** https://anshraj18.github.io/ledger-application-tracker/

![Ledger screenshot](C:\Users\anshr\OneDrive\Desktop\ledger-application-tracker\ledger-application-tracker\docs)


## Features

- Drag cards between Wishlist, Applied, Interviewing and Offer, or use the arrow buttons (fully keyboard accessible)
- Pipeline bar that shows how your applications are split across stages
- Add, delete and search applications (press `/` to jump to search)
- Data persists in `localStorage`
- Light and dark themes: follows the system setting, with a manual switch that is remembered
- Responsive: the board scrolls horizontally on phones
- Respects `prefers-reduced-motion`

## Tech

- React 18 with function components and hooks
- Vite 5
- Plain CSS with custom properties (no UI library)
- Native HTML5 drag and drop and the native `<dialog>` element

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  App.jsx                 state and handlers, composes the page
  components/
    Header.jsx            title, search, theme switch, add button
    Pipeline.jsx          summary sentence and proportional stage bar
    Board.jsx             lays out the columns
    Column.jsx            one stage and its drop target
    Card.jsx              one application, draggable
    EntryDialog.jsx       native dialog with a controlled form
  hooks/
    useLocalStorage.js    persisted state with safe read and write
    useTheme.js           system, light or dark theme
  data/                   stage list and seed data
```

## Design decisions

- **State lives in `App`.** Components below it are presentational and receive callbacks, which keeps the data flow easy to follow without a state library.
- **Native platform features first.** `<dialog>` gives focus trapping and Esc handling; drag and drop has a keyboard alternative so nothing depends on a mouse.
- **Storage is treated as unreliable.** Every `localStorage` call is wrapped in `try/catch` and the app still works when storage is blocked.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.

## Ideas for next steps

- Edit an existing card
- Tags and deadlines with reminders
- Export and import as JSON
- Tests with Vitest and React Testing Library

## License

MIT
