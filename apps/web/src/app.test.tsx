import { render } from '@testing-library/react'

import App from './app.component'

describe('App', () => {
  it('renders properly', () => {
    render(<App />)
  })

  expect(1 + 1).toBe(2)
})
