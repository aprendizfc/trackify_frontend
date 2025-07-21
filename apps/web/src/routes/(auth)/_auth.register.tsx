import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

const Register: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="mb-4 text-4xl font-bold">Register</h1>
      <p className="text-lg text-gray-600">
        Please fill in your details to create an account
      </p>
    </React.Fragment>
  )
}

export const Route = createFileRoute('/(auth)/_auth/register')({
  component: Register,
})
