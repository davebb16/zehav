import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import GlowBackground from '../components/GlowBackground'
import Header from '../components/Header'
import Footer from '../components/Footer'


export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="bg-[url('/src/assets/svg/repeating-magen-david.svg')] bg-repeat bg-[size:5rem] absolute h-full w-full opacity-10 mask-pattern" />
      <GlowBackground />
      <Header />

      
      <div className='flex-1'>
      <Outlet />
      </div>
      <TanStackRouterDevtools />
      <Footer />
    </div>
  ),
})
