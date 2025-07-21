import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import React from 'react'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Outlet />
      {/* <div className="flex h-screen">
        <div className="w-54 flex-col bg-gray-100 p-4">
          <nav className="inline-flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/accounts">Accounts</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div> */}
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
})
