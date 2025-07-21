import { createFileRoute } from '@tanstack/react-router'

const Index: React.FC = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Welcome to Trackify</h1>
      <p className="text-lg text-gray-600">Your personal finance tracker</p>
    </div>
  )
}

export const Route = createFileRoute('/(app)/_app/')({
  component: Index,
})
