import { formatMoney } from './formatMoney'

describe('formatMoney', () => {
  it('Formats money properly', () => {
    expect(formatMoney(1000)).toBe('$1,000.00')
  })

  it('Limits decimals ', () => {
    const formattedMoney = formatMoney(1000.1234, { maximumFractionDigits: 3 })

    expect(formattedMoney).toBe('$1,000.123')
  })
})
