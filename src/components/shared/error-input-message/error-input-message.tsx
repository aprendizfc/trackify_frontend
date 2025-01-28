interface ErrorInputMessageProps {
  message: React.ReactNode
  id: string
}

export function ErrorInputMessage({ message, id }: ErrorInputMessageProps) {
  return (
    <div id={`error-${id}`} className="text-xs mt-1 text-red-600">
      {message}
    </div>
  )
}
