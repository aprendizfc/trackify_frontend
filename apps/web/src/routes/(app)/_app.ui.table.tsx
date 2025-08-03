import { createFileRoute } from '@tanstack/react-router'
import { Table } from '@trackify/ui-kit'
import { createColumnHelper } from '@tanstack/react-table'

interface Person {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('age', {
    cell: (info) => info.getValue(),
    header: () => <span>Age</span>,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
  }),
]

const data: Person[] = [
    {
        firstName: 'Tanner',
        lastName: 'Linsley',
        age: 33,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'Kevin',
        lastName: 'Vance',
        age: 24,
        visits: 200,
        status: 'Single',
        progress: 100,
    },
]

const TablePage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Table Component</h1>
    <Table columns={columns} data={data} />
  </div>
)

export const Route = createFileRoute('/(app)/_app/ui/table')({
  component: TablePage,
})
