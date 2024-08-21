import { Link } from '@tanstack/react-router'
import Wrapper from './Wrapper'

export default function Footer() {
  return (
    <header className="p-2 gap-2 flex bg-red-500">
      <Wrapper>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      </Wrapper>
    </header>
  )
}