import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
// import logo from '../assets/img/logo2.png'
import logo from '../assets/img/logo2.png'

import Typography from './Typography'
import Button from './Button'

export default function Header() {
  const currentTheme = document.documentElement.classList

  return (
    <header className='sticky top-0 z-10 border-b border-violet-400 bg-gradient-to-l from-purple-600/90 to-violet-500/90 shadow-md backdrop-blur'>
      <Wrapper as='nav' className='flex justify-between py-1'>
        <div className='flex items-center gap-8'>
          <Button
            className='text-white'
            onClick={() =>
              currentTheme.value === 'dark'
                ? currentTheme.toggle('dark', false)
                : currentTheme.toggle('dark', true)
            }
          >
            Light/Dark
          </Button>
          <a
            href='#faq'
            className='[&.active]:font-bold [&:hover_p]:drop-shadow-sm'
          >
            <Typography
              color='primaryForeground'
              className='hidden text-sm transition-all sm:block'
              fontWeight='medium'
            >
              Hebrew FAQ
            </Typography>
          </a>
        </div>
        <Link className='flex items-center gap-2' to='/'>
          <img src={logo} className='w-28' alt='זהב' />
        </Link>
      </Wrapper>
    </header>
  )
}
