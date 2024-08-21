import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
// import logo from '../assets/img/logo2.png'
import magen from '../assets/img/magen.png'

import Typography from './Typography'
import Button from './Button'

export default function Header() {
  const currentTheme = document.documentElement.classList

  return (
    <header className="border border-secondary relative backdrop-blur">
            

      <Wrapper as='nav' className='flex justify-between py-3'>
        <div className='flex items-center gap-8'>
      <Button onClick={() =>
            currentTheme.value === 'dark'
              ? currentTheme.toggle('dark', false)
              : currentTheme.toggle('dark', true)
          }>Light/Dark</Button>
      <Link to="/faq" className="[&.active]:font-bold">
        FAQ
      </Link>
      </div>
      {/* <Link to="/"><img src={logo} className='w-20' alt='logo' /></Link> */}
            
      <Link className='flex gap-2 items-center' to="/"><Typography variant='heading2' fontWeight='normal' className='font-secular'> זהב</Typography>
      <img src={magen} className='size-8' alt='logo' /></Link>
      </Wrapper>
    </header>
  )
}