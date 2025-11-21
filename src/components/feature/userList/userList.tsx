import { Box, Table, Image, Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
interface UserListProps {}

export const UserList: React.FC<UserListProps> = () => {
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
    <ul>
      <Table.Root size="lg" variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>User Name</Table.ColumnHeader>
            <Table.ColumnHeader>Account Name</Table.ColumnHeader>
            <Table.ColumnHeader>Company Name</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((user: any) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Flex gap="4" align="center">
                  <Box as="span">{user.id}.</Box>
                  <Box>
                    <Image
                      src={`https://i.pravatar.cc/150?img=${user.id}`}
                      alt={user.name}
                      boxSize="50px"
                      borderRadius="full"
                    />
                  </Box>
                  <Box as="span">{user.name}</Box>
                </Flex>
              </Table.Cell>
              <Table.Cell>{user.accountName}</Table.Cell>
              <Table.Cell>{user.companyName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </ul>
  )
}
