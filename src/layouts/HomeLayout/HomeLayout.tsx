import { Outlet } from 'react-router'
import Header from '../../components/shared/Header/Header'
import Container from '../../components/shared/Container/Container'
import styles from './HomeLayout.module.css'

export default function HomeLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}
