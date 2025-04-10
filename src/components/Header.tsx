import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
// import logo from '../assets/img/logo2.png'
import logo from '../assets/img/logo3.png'

import Typography from './Typography'
import Button from './Button'

export default function Header() {
  const currentTheme = document.documentElement.classList

  return (
    <header className='sticky top-0 z-10 border-b border-background-dimmed2 bg-background/80 shadow-md backdrop-blur'>
      <Wrapper as='nav' className='flex justify-between py-1'>
        <Link className='flex items-center gap-2' to='/'>
          <img src={logo} className='w-20 md:w-24' alt='זהב' />
        </Link>
        <div className='flex items-center gap-8'>
          <a
            href='/#faq'
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
          {/* <a href='/flash-cards'>
            <Typography
              color='primaryForeground'
              className='hidden text-sm transition-all sm:block'
              fontWeight='medium'
            >
              Flash Cards
            </Typography>
          </a> */}
          <Button
            className='my-2 text-white'
            onClick={() =>
              currentTheme.value === 'dark'
                ? currentTheme.toggle('dark', false)
                : currentTheme.toggle('dark', true)
            }
          >
            Light/Dark
          </Button>
        </div>
      </Wrapper>
    </header>
  )
}
