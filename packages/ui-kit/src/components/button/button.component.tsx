export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button
      className={`rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
      {...props}
    >
      hola
    </button>
  )
}
