import { NavLink } from 'react-router'
import styles from './Header.module.css'
import Container from '../Container/Container'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/accounts">Accounts</NavLink>
          <NavLink to="/records">Records</NavLink>
        </nav>
      </Container>
    </header>
  )
}
