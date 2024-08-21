import { createLazyFileRoute } from '@tanstack/react-router'
import Wrapper from '../components/Wrapper'
import Typography from '../components/Typography'

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
    <Wrapper paddingY as='main'>
      <div className='flex flex-col items-center gap-2 w-full'>
        <Typography variant='heading1' className='font-secular' fontWeight='medium'>לימוד עברית עם דוד</Typography>
        <Typography variant='body2'>Let's look at some frequently asked questions while learning <span className='text-primary'>Hebrew</span>.</Typography>

      </div>
    </Wrapper>
  )
}
