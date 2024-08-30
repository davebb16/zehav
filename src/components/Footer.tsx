import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
import logo from '../assets/img/logo2.png'
import headerlogo from '../assets/img/header-logo.png'
import headerlogov2 from '../assets/img/header-logo-v2.png'
import og from '../assets/img/logo.png'


import Typography from './Typography'


export default function Footer() {
  return (
    <header className="p-2 gap-2 flex">
      <Wrapper>
        <div className='py-6'>
          <img src={logo} className='w-24' alt='זהב' />
          

          <Typography variant='heading4' fontWeight='normal' className='font-secular text-foreground'>לומד עברית</Typography>
      </div>
      <img src={headerlogo} className='w-24' alt='זהב' />

          <img src={og} className='w-48' alt='זהב' />
          <img src={headerlogov2} className='w-24' alt='זהב' />

      </Wrapper>
    </header>
  )
}