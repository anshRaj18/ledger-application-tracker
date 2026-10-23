const DAY = 864e5
const ago = (d) => Date.now() - d * DAY

export const SEED = [
  { id: 1, stage: 'wish', company: 'Northwind Labs', role: 'Frontend Intern', note: 'Design systems team. Ask about the React 19 migration.', updatedAt: ago(2) },
  { id: 2, stage: 'applied', company: 'Fieldnote', role: 'UI Engineer Intern', note: 'Referred by a senior from the robotics club.', updatedAt: ago(6) },
  { id: 3, stage: 'applied', company: 'Brightwell', role: 'Web Developer Trainee', note: 'Portfolio link sent with the application.', updatedAt: ago(9) },
  { id: 4, stage: 'interview', company: 'Parcel & Co.', role: 'Frontend Developer Intern', note: 'Round two: build a small component live.', updatedAt: ago(14) },
  { id: 5, stage: 'offer', company: 'Lumen Works', role: 'Software Intern', note: 'Reply before the end of the month.', updatedAt: ago(21) },
]
