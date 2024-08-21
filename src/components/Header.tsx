import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'

export default function Header() {
  return (
    <header className="py-5 gap-2 border border-secondary z-5 relative w-ful backdrop-blur">
      <Wrapper as='nav'>
      <Link to="/" className="[&.active]:font-bold">
        HEADER
      </Link>
      </Wrapper>
    </header>
  )
}