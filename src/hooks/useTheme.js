import { useEffect, useState } from 'react'

const KEY = 'ledger.theme'

// null = follow the system; 'light' / 'dark' = the person's explicit choice.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(KEY)
    } catch {
      return null
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme) root.dataset.theme = theme
    else delete root.dataset.theme
    try {
      if (theme) localStorage.setItem(KEY, theme)
    } catch {}
  }, [theme])

  const toggle = () => {
    const isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'light' : 'dark')
  }

  return [theme, toggle]
}
