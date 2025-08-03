import { render, screen } from '@testing-library/react'
import { createColumnHelper } from '@tanstack/react-table'
import { Table } from './table.component'

interface Person {
  firstName: string
  lastName: string
  age: number
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
]

const data: Person[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
  },
]

describe('Table', () => {
  it('should render with data', () => {
    render(<Table columns={columns} data={data} />)

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()

    // Check headers
    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(screen.getByText('Last Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()

    // Check data
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Jane')).toBeInTheDocument()
  })

  it('should render "No results." when data is empty', () => {
    render(<Table columns={columns} data={[]} />)

    const noResults = screen.getByText('No results.')
    expect(noResults).toBeInTheDocument()
  })
})
