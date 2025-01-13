import { signUp } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'

export function useSignUp() {
  const mutation = useMutation({
    // TODO: move that away to its proper types file
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUp(email, password),
    onSuccess: () => {},
    onError: () => {},
  })

  return { signUpMutation: mutation }
}
