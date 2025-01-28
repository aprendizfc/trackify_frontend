interface RowProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function Row({ children }: RowProps) {
  return <div className="flex flex-wrap gap-6">{children}</div>
}
