import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

import { RegisterForm } from '@/ui-auth/components/register-form/register-form.component'

const Register: React.FC = () => {
  return <RegisterForm />
}

export const Route = createFileRoute('/(auth)/_auth/register')({
  component: Register,
})
