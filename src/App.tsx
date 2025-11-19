import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        'https://691c92533aaeed735c915ef6.mockapi.io/api/v1/users'
      )
      return response.json()
    },
  })

  if (isLoading) return <div>Loading...</div>

  if (error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
