interface ModalActionsProps {
  children: React.ReactNode
}

export function ModalActions({ children }: ModalActionsProps) {
  return <div className="mt-6">{children}</div>
}
