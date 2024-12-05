import { Link } from 'react-router'
import Button from '../../components/shared/Button/Button'
import Stack from '../../components/shared/Stack/Stack'
import TextField from '../../components/shared/TextField/TextField'
import styles from './Login.module.css'
import ExistingAccount from '../../components/shared/ExistingAccount/ExistingAccount'

export default function Login() {
  return (
    <>
      <h1>Login</h1>

      <div className={styles.container}>
        <form action="">
          <Stack>
            <TextField label="Email" id="email" name="email" />

            <TextField label="Password" id="password" name="password" type="password" />

            <Button size="full" type="submit">
              Sign In
            </Button>
          </Stack>

          <ExistingAccount>
            Don't have an account?
            <Link to="/register">Sign Up</Link>
          </ExistingAccount>
        </form>
      </div>
    </>
  )
}
