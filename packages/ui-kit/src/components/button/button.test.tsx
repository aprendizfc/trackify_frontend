import { render, screen } from '@testing-library/react'

import { Button } from './button.component'

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click Me</Button>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
  })
})
