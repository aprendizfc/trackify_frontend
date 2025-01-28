import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from '@/components/shared/link/link'
import { Col } from '@/components/shared/grid/col/col'
import { Row } from '@/components/shared/grid/row/row'
import Button from '@/components/shared/Button/Button'
import Stack from '@/components/shared/Stack/Stack'
import TextField from '@/components/shared/TextField/TextField'
import ExistingAccount from '@/components/shared/ExistingAccount/ExistingAccount'
import { Heading } from '@/components/shared/heading/heading'
import { useSignUp } from './hooks/use-sign-up'
import { registerSchema } from './schema/register-schema'
import { RegisterData } from './register-types'

export default function Register() {
  const { signUpMutation } = useSignUp()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) })

  const onSubmit = (data: RegisterData) => {
    signUpMutation.mutate(data)
  }

  return (
    <div className="w-full sm:w-125">
      <Heading appearance="h2" className="mb-10">
        Register
      </Heading>

      <div className="bg-white rounded-sm p-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack>
            <Row>
              <Col>
                <TextField
                  {...register('firstName')}
                  autoFocus
                  isRequired
                  label="First Name"
                  id="firstName"
                  errorMessage={errors.firstName?.message}
                />
              </Col>

              <Col>
                <TextField
                  {...register('lastName')}
                  isRequired
                  label="Last Name"
                  id="lastName"
                  errorMessage={errors.lastName?.message}
                />
              </Col>
            </Row>
            <TextField
              {...register('email')}
              isRequired
              type="email"
              label="Email"
              id="email"
              errorMessage={errors.email?.message}
            />

            <TextField
              {...register('password')}
              isRequired
              label="Password"
              id="password"
              type="password"
              errorMessage={errors.password?.message}
            />

            <TextField
              {...register('confirmPassword')}
              isRequired
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              errorMessage={errors.confirmPassword?.message}
            />

            <Button
              shouldFitContainer
              className="mt-2"
              type="submit"
              isDisabled={signUpMutation.isPending}
            >
              Sign Up
            </Button>
          </Stack>

          <ExistingAccount>
            Have an account?
            <Link to="/login" className="font-medium">
              Sign In
            </Link>
          </ExistingAccount>
        </form>
      </div>
    </div>
  )
}
