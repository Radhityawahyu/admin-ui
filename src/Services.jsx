const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const response = await fetch(POSTS_API_URL)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}
