export function timeAgo(ts) {
  const days = Math.max(0, Math.floor((Date.now() - ts) / 864e5))
  if (days === 0) return 'Updated today'
  if (days === 1) return 'Updated yesterday'
  return `Updated ${days} days ago`
}
