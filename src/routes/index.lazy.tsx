import { createLazyFileRoute } from '@tanstack/react-router'
import Home from '../pages/Home'

export const Route = createLazyFileRoute('/')({
  loader: () => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.theme
    const toggle = document.documentElement.classList.toggle.bind(
      document.documentElement.classList,
      'dark'
    )
    toggle(!localTheme ? isSystemDark : localTheme === 'dark')
  },
  component: Home,
})
