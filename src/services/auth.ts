import { VITE_API } from '../../config'

export async function signUp(email: string, password: string) {
  const response = await fetch(`${VITE_API}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error('Something went wrong!')
  }

  const data = await response.json()

  return data
}
