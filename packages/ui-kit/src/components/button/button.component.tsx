interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={`rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
      {...props}
    >
      {children}
    </button>
  )
}
