import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
// import logo from '../assets/img/logo2.png'
import logo from '../assets/img/header-logo-v2.png'

import Typography from './Typography'
import Button from './Button'

export default function Header() {
  const currentTheme = document.documentElement.classList

  return (
    <header className="border-b sticky top-0 z-10 backdrop-blur bg-gradient-to-l from-purple-600/90 to-violet-500/90 border-violet-400">
            

      <Wrapper as='nav' className='flex justify-between py-1'>
        <div className='flex items-center gap-8'>
      <Button className='text-white' onClick={() =>
            currentTheme.value === 'dark'
              ? currentTheme.toggle('dark', false)
              : currentTheme.toggle('dark', true)
          }>Light/Dark</Button>
      <a href="#faq" className="[&.active]:font-bold">
      <Typography color='primaryForeground'>Hebrew FAQ</Typography>
        
      </a>
      </div>
      {/* <Link to="/"><img src={logo} className='w-20' alt='logo' /></Link> */}
            
      <Link className='flex gap-2 items-center' to="/">
      <img src={logo} className='size-16' alt='זהב' /></Link>
      </Wrapper>
    </header>
  )
}