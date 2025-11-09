import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

import { LoginForm } from '@/ui-auth/components/login-form/login-form.component'

const LoginPage: React.FC = () => {
  return <LoginForm />
}

export const Route = createFileRoute('/(auth)/_auth/login')({
  component: LoginPage,
})
