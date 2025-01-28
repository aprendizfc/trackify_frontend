interface ColProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function Col({ children }: ColProps) {
  return <div className="sm:basis-0 grow max-w-full">{children}</div>
}
