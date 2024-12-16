import { NavLink } from 'react-router'
import styles from './Header.module.css'
import Container from '../Container/Container'
import Avatar from '../Avatar/Avatar'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <nav className={styles.nav}>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/accounts">Accounts</NavLink>
            <NavLink to="/records">Records</NavLink>
          </nav>

          <Avatar
            img="https://mighty.tools/mockmind-api/content/cartoon/32.jpg"
            altText="Gravatar"
          />
        </div>
      </Container>
    </header>
  )
}
