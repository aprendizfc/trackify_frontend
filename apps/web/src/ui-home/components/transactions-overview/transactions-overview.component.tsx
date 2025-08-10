import { createColumnHelper } from '@tanstack/react-table'
import {
  Link,
  Stack,
  Table,
  TableCell,
  TableHead,
  Text,
  useTable,
} from '@trackify/ui-kit'
import { ChevronRight } from 'react-feather'

interface Transaction {
  account: string
  amount: number
  category: string
  date: string
}

const transactions: Transaction[] = [
  {
    account: 'Checking',
    amount: -75.5,
    category: 'Groceries',
    date: '2025-08-01',
  },
  {
    account: 'Checking',
    amount: 2500.0,
    category: 'Salary',
    date: '2025-08-02',
  },
  {
    account: 'Credit Card',
    amount: -120.0,
    category: 'Utilities',
    date: '2025-08-02',
  },
  {
    account: 'Checking',
    amount: -45.25,
    category: 'Dining Out',
    date: '2025-08-03',
  },
  {
    account: 'Savings',
    amount: 500.0,
    category: 'Transfer',
    date: '2025-08-03',
  },
  {
    account: 'Credit Card',
    amount: -60.0,
    category: 'Gas',
    date: '2025-08-04',
  },
  {
    account: 'Checking',
    amount: -55.0,
    category: 'Internet',
    date: '2025-08-05',
  },
  {
    account: 'Checking',
    amount: 800.0,
    category: 'Freelance',
    date: '2025-08-05',
  },
  {
    account: 'Credit Card',
    amount: -130.75,
    category: 'Shopping',
    date: '2025-08-06',
  },
  {
    account: 'Checking',
    amount: -40.0,
    category: 'Gym',
    date: '2025-08-07',
  },
]

const columnHelper = createColumnHelper<Transaction>()

const columns = [
  columnHelper.accessor('date', {
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
    header: () => <TableHead>Date</TableHead>,
    id: 'date',
    meta: {
      minWidth: '150px',
    },
  }),
  columnHelper.accessor('category', {
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
    header: () => <TableHead>Category</TableHead>,
    id: 'category',
    meta: {
      minWidth: '190px',
    },
  }),
  columnHelper.accessor('account', {
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
    header: () => <TableHead>Account</TableHead>,
    id: 'account',
  }),
  columnHelper.accessor('amount', {
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
    header: () => <TableHead>Amount</TableHead>,
    id: 'amount',
  }),
]

export const TransactionsOverview: React.FC = () => {
  const table = useTable({
    columns,
    data: transactions,
  })
  return (
    <Stack direction="column" gap={4}>
      <Stack alignItems="center" gap={4}>
        <Text size="lg">Transactions</Text>

        <Link
          asButton={true}
          href="/transactions"
          rootProps={{
            adornment: <ChevronRight />,
            adornmentPosition: 'end',
            appearance: 'link',
          }}
        >
          View all
        </Link>
      </Stack>
      <Table table={table} />
    </Stack>
  )
}
