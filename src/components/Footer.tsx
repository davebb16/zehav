import Wrapper from './Wrapper'
import headerlogov2 from '../assets/img/header-logo-v2.png'

export default function Footer() {
  return (
    <header className='py-2 gap-2 flex'>
      <Wrapper>
        {/* the -margin (🤮) is to make the logo line up with the wrapper. It's needed because of the glow on the logo */}
        <img src={headerlogov2} className='w-48 -ml-4' alt='זהב' />
      </Wrapper>
    </header>
  )
}
