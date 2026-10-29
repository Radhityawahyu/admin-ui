import { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { getPosts } from './Services'

function Exercise() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (requestError) {
        setError(`Gagal menampilkan post: ${requestError.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main className="min-h-screen bg-page p-6">
        <h1 className="mb-6 text-center font-poppins text-3xl font-bold text-primary-500">
          Post Cards
        </h1>
        {loading && <p className="text-center text-neutral-600">Memuat data post...</p>}
        {error && <p className="text-center text-semantic-error">{error}</p>}
        {!loading && !error && (
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Exercise
