import {
  Button,
  Form,
  FormPasswordField,
  FormTextField,
  Link,
  Stack,
  Text,
  useForm,
} from '@trackify/ui-kit'

import type { RegisterSchema } from '../../schemas/register-form/register-form.schema'

import { registerSchema } from '../../schemas/register-form/register-form.schema'

export const RegisterForm: React.FC = () => {
  const { formContext, useSubmit } = useForm<RegisterSchema>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    schema: registerSchema,
  })

  const handleSubmit = useSubmit((data) => {
    console.log('🚀 ~ RegisterForm ~ data:', data)
  })

  return (
    <Form
      className="flex w-full max-w-md flex-col gap-8"
      context={formContext}
      name="register"
      noValidate={true}
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold">Join Us Today!</h1>

      <Stack gap={4}>
        <FormTextField
          autoFocus={true}
          id="firstName"
          isRequired={true}
          label="First Name"
          name="firstName"
          placeholder="John"
        />

        <FormTextField
          id="lastName"
          isRequired={true}
          label="Last Name"
          name="lastName"
          placeholder="Doe"
        />
      </Stack>

      <FormTextField
        id="email"
        isRequired={true}
        label="Email"
        name="email"
        placeholder="john.doe@example.com"
      />

      <FormPasswordField
        id="password"
        isRequired={true}
        label="Password"
        name="password"
        placeholder="••••••••"
      />

      <FormPasswordField
        id="confirmPassword"
        isRequired={true}
        label="Confirm Password"
        name="confirmPassword"
        placeholder="••••••••"
      />

      <Button size="md" type="submit">
        Create Account
      </Button>

      <Text align="center">
        Already have an account?
        <Link
          asButton={true}
          href="/login"
          rootProps={{ appearance: 'link', className: 'ml-2' }}
        >
          Login
        </Link>
      </Text>
    </Form>
  )
}
