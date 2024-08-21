import { createLazyFileRoute } from '@tanstack/react-router'
import Wrapper from '../components/Wrapper'
import Typography from '../components/Typography'
import magen from '../assets/img/magen.png'
import Button from '../components/Button'


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
    <Wrapper paddingY as='main' className='flex flex-col items-center gap-4'>
      <img src={magen} className='w-60' alt='מגן דוד של זהב' />
      <div className='flex flex-col items-center gap-4 w-full'>
        <Typography variant='heading1' className='font-secular' fontWeight='normal' >!ברכים הבאים לזהב</Typography>
        <Typography variant='body2' className='max-w-4xl text-center'>Learning Hebrew? Bypass challenges by discovering answers to frequently asked questions that come up during the learning journey. <span className='text-primary'>Hebrew</span>.</Typography>

      </div>
      <Button>Frequently Asked Questions</Button>
    </Wrapper>
  )
}
