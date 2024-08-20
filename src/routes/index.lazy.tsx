import { createLazyFileRoute } from '@tanstack/react-router'
// import GlowBackground from '../components/style/GlowBackground'

export const Route = createLazyFileRoute('/')({
  loader: () => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.theme
    const toggle = document.documentElement.classList.toggle.bind(document.documentElement.classList, 'dark')
    toggle(!localTheme ? isSystemDark : localTheme === 'dark')
  },
  component: Index,
})

function Index() {
  return (
    <main>
      {/* <GlowBackground /> */}
      <div className="p-2">
        <h3>Welcome Home!!</h3>
      </div>
    </main>
  )
}
