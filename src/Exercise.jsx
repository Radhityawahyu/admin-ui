import { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getUsers } from './Services'

function Exercise() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (requestError) {
        setError(`Gagal menampilkan data: ${requestError.message}`)
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
          User Cards
        </h1>
        {loading && <p className="text-center text-neutral-600">Memuat data user...</p>}
        {error && <p className="text-center text-semantic-error">{error}</p>}
        {!loading && !error && (
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.email} {...user} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Exercise
