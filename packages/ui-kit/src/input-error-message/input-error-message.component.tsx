import React from 'react'
import { AlertTriangle } from 'react-feather'

import type { InputErrorMessageProps } from './input-error-message.type'

export const ErrorMessage: React.FC<InputErrorMessageProps> = ({ id, message }) => {
  return (
    <span
      aria-live="assertive"
      className="mt-1 flex items-center gap-1 text-xs text-red-600"
      id={id}
    >
      {typeof message === 'string' ? (
        <React.Fragment>
          <AlertTriangle focusable="false" height={12} role="presentation" width={12} />
          {message}
        </React.Fragment>
      ) : null}
    </span>
  )
}
