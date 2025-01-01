import { Outlet } from 'react-router'
import { Aside } from './Aside/Aside'
import * as styles from './HomeLayout.module.css'

export default function HomeLayout() {
  return (
    <div className={styles.wrapper}>
      <Aside />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
