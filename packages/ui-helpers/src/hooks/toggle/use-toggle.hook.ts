import React from 'react'

export const useToggle = (initialState = false) => {
  const [state, setState] = React.useState(initialState)

  const toggle = React.useCallback(() => {
    setState((prev) => !prev)
  }, [])

  return { isActive: state, toggle }
}
