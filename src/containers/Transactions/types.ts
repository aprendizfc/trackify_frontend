// This can be updated once we have the API
export interface Transaction {
  id: string
  type: 'income' | 'expense' | 'transfer'
  amount: number
  description: string
  category: string
  date: string
  account: string
}
