import { Badge, Link } from '@trackify/ui-kit'
import React from 'react'

import { AccountListItem } from './account-list-item.component'

export const AccountList: React.FC = () => {
  return (
    <React.Fragment>
      {Array.from({ length: 5 }).map((_, index) => (
        <AccountListItem key={index} />
      ))}

      <Link
        className="flex items-center gap-2 p-2 text-sm hover:rounded-lg hover:bg-slate-50"
        to="/accounts"
      >
        <Badge appearance="secondary" size="small">
          +2
        </Badge>{' '}
        View all accounts
      </Link>
    </React.Fragment>
  )
}
