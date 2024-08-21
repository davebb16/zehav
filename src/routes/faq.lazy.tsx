import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/faq')({
  component: () => <div>Hello /faq!</div>
})