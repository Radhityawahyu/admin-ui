const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers() {
  const response = await fetch(USERS_API_URL)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const users = await response.json()

  return users.map(({ name, email, address, ...userDetails }) => {
    const { street, city } = address
    const age = userDetails.id + 20

    return { name, email, street, city, age }
  })
}
