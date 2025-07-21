import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="mb-4 text-4xl font-bold">Login</h1>
      <p className="text-lg text-gray-600">Please enter your credentials</p>
    </React.Fragment>
  )
}

export const Route = createFileRoute('/(auth)/_auth/login')({
  component: LoginPage,
})
