import { NavLink } from 'react-router'

import * as styles from './Aside.module.css'
import cx from '@/js/utils/classNames/classNames'
import { UserPanel } from './UserPanel/UserPanel'
import { links } from './links'

export function Aside() {
  return (
    <aside className={styles.aside}>
      <nav>
        {links.map(({ to, text, icon: Icon, iconSize }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cx(styles.navLink, { [styles.navActiveLink]: isActive })
            }
          >
            <Icon width={iconSize} height={iconSize} />
            {text}
          </NavLink>
        ))}
      </nav>

      <UserPanel />
    </aside>
  )
}
