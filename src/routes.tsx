import { Routes, Route } from 'react-router'

import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
