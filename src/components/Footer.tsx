import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'
import logo from '../assets/img/logo2.png'
import Typography from './Typography'


export default function Footer() {
  return (
    <header className="p-2 gap-2 flex">
      <Wrapper>
        <div className='border-t border-background-border py-6'>
          <img src={logo} className='w-24' alt='זהב' />
          <Typography variant='heading4' fontWeight='normal' className='font-secular text-foreground'>לומד עברית</Typography>
      </div>
      </Wrapper>
    </header>
  )
}