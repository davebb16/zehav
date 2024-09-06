import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import GlowBackground from '../components/GlowBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className='flex min-h-screen flex-col bg-background-dimmed1/50 dark:bg-background'>
      <div className='mask-pattern absolute h-full w-full bg-repeating-magen bg-[size:5rem] bg-repeat opacity-10' />
      <GlowBackground />
      <Header />

      <div className='flex flex-1 flex-col'>
        <Outlet />
      </div>
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
      <Footer />
    </div>
  ),
})
