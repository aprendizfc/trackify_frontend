export const Container: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <div className="mx-auto max-w-242">{children}</div>
}
