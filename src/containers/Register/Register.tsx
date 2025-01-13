import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Col } from '@/components/shared/grid/col/col'
import { Row } from '@/components/shared/grid/row/row'
import Button from '@/components/shared/Button/Button'
import Stack from '@/components/shared/Stack/Stack'
import TextField from '@/components/shared/TextField/TextField'
import ExistingAccount from '@/components/shared/ExistingAccount/ExistingAccount'
import { useSignUp } from './hooks/use-sign-up'
import { registerSchema } from './schema/register-schema'
import { RegisterData } from './register-types'
import * as styles from './Register.module.css'

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
    <>
      <h1>Register</h1>

      <div className={styles.container}>
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

            <Button size="full" type="submit" isDisabled={signUpMutation.isPending}>
              Sign Up
            </Button>
          </Stack>

          <ExistingAccount>
            Have an account?
            <Link to="/login">Sign In</Link>
          </ExistingAccount>
        </form>
      </div>
    </>
  )
}
