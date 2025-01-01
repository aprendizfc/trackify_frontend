import { Routes, Route } from 'react-router'

import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Accounts from './containers/Accounts/Accounts'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<HomeLayout />}>
        <Route index element={<p>Dashboard</p>} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="transactions" element={<p>Transactions</p>} />
      </Route>
    </Routes>
  )
}
