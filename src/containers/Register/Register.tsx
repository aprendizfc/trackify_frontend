import { Link } from 'react-router'
import Button from '../../components/shared/Button/Button'
import Stack from '../../components/shared/Stack/Stack'
import TextField from '../../components/shared/TextField/TextField'
import styles from './Register.module.css'
import ExistingAccount from '../../components/shared/ExistingAccount/ExistingAccount'

export default function Register() {
  return (
    <>
      <h1>Register</h1>

      <div className={styles.container}>
        <form action="">
          <Stack>
            <TextField label="Email" id="email" name="email" />

            <TextField label="Password" id="password" name="password" type="password" />

            <TextField
              label="Confirm Password"
              id="confirmPassword"
              name="confirm-password"
              type="password"
            />

            <Button size="full" type="submit">
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
