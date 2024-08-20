import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="p-2 gap-2 flex flex-col flex-1 bg-orange-500">
      <div className="p-2 gap-2 flex flex-1 bg-red-500">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}

      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
