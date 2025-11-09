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

import {
  loginFormSchema,
  type LoginFormSchema,
} from '../../schemas/login-form/login-form.schema'

export const LoginForm: React.FC = () => {
  const { formContext, useSubmit } = useForm<LoginFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    schema: loginFormSchema,
  })

  const handleSubmit = useSubmit((data) => {
    console.log('🚀 ~ LoginForm ~ data:', data)
  })

  return (
    <Form
      className="flex max-w-md flex-col gap-8"
      context={formContext}
      name="login"
      noValidate={true}
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold">Hi, Welcome Back</h1>

      <Stack direction="column" gap={10}>
        <FormTextField
          autoComplete="email"
          autoFocus={true}
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

        <Button size="md" type="submit">
          Login
        </Button>

        <Text align="center">
          Don't have an account?
          <Link
            asButton={true}
            rootProps={{ appearance: 'link', className: 'ml-2' }}
            to="/register"
          >
            Sign up
          </Link>
        </Text>
      </Stack>
    </Form>
  )
}
