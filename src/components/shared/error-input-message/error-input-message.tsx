import * as styles from './error-input-message.module.css'

interface ErrorInputMessageProps {
  message: React.ReactNode
  id: string
}

export function ErrorInputMessage({ message, id }: ErrorInputMessageProps) {
  return (
    <div id={`error-${id}`} className={styles.errorMessage}>
      {message}
    </div>
  )
}
