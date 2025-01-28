import { useMemo } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../../js/utils/formatMoney/formatMoney'

export default function Accounts() {
  const accounts = useMemo(() => {
    return Array.from({ length: 500 }, (_, k) => k).map((account) => (
      <Link to={String(account)} className="account" key={account}>
        <span className="flex justify-between">
          <span className="text-base font-medium text-gray-900">Cash</span>
          <span className="text-sm text-gray-900">Saving Account</span>
        </span>

        <span>{formatMoney(1000.12)}</span>
      </Link>
    ))
  }, [])

  return (
    <div className="accounts-wrapper">
      <div className="accounts">{accounts}</div>
    </div>
  )
}
