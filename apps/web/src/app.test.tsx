import { render } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders properly', () => {
    render(<App />)
  })

  expect(1 + 1).toBe(2)
})
