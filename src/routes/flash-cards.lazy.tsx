import { createLazyFileRoute } from '@tanstack/react-router'
import FlashCards from '../pages/FlashCards'

export const Route = createLazyFileRoute('/flash-cards')({
  component: FlashCards,
})
