type FormatMoneyOptions = Intl.NumberFormatOptions

const DEFAULT_OPTIONS: FormatMoneyOptions = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
}

export function formatMoney(amount: number, options?: FormatMoneyOptions): string {
  const formatOptions = { ...DEFAULT_OPTIONS, ...options }
  const formatter = new Intl.NumberFormat('en-US', formatOptions)

  return formatter.format(amount)
}
