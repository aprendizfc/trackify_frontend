import { Outlet } from 'react-router'
import { Aside } from './Aside/Aside'

export default function HomeLayout() {
  return (
    <div className="flex bg-gray-50">
      <Aside />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
