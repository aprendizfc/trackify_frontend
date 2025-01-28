import { Link } from '@/components/shared/link/link'
import { Heading } from '@/components/shared/heading/heading'
import Button from '../../components/shared/Button/Button'
import Stack from '../../components/shared/Stack/Stack'
import TextField from '../../components/shared/TextField/TextField'
import ExistingAccount from '../../components/shared/ExistingAccount/ExistingAccount'

export default function Login() {
  return (
    <div className="w-full sm:w-100">
      <Heading appearance="h2" className="mb-10">
        Login
      </Heading>

      <div className="bg-white rounded-sm p-10">
        <form action="">
          <Stack>
            <TextField label="Email" id="email" name="email" />

            <TextField label="Password" id="password" name="password" type="password" />

            <Button shouldFitContainer type="submit">
              Sign In
            </Button>
          </Stack>

          <ExistingAccount>
            Don't have an account?
            <Link to="/register" className="font-medium">
              Sign Up
            </Link>
          </ExistingAccount>
        </form>
      </div>
    </div>
  )
}
