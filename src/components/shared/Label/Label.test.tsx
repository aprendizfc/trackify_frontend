import { render, screen } from '@testing-library/react'
import Label from './Label'

describe('Label', () => {
  it('Renders properly', () => {
    render(
      <>
        <Label htmlFor="username">Username</Label>
        <input type="text" id="username" />
      </>
    )

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
  })
})
