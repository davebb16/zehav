import { createLazyFileRoute } from '@tanstack/react-router'
import SignUp from '../pages/SignUp'

export const Route = createLazyFileRoute('/sign-up')({
  component: () => <SignUp />,
})
