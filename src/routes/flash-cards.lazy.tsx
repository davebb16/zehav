import { createLazyFileRoute } from '@tanstack/react-router'
import Wrapper from '../components/Wrapper'

export const Route = createLazyFileRoute('/flash-cards')({
  component: () => <Wrapper>Hello /flash-cards!</Wrapper>,
})
