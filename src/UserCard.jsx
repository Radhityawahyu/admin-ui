import { useState } from 'react'

function formatAddress(...parts) {
  return parts.filter(Boolean).join(', ')
}

function UserCard({ name, email, street, city, age }) {
  const [clicked, setClicked] = useState(false)

  return (
    <article className="rounded-lg bg-surface p-6 shadow-card transition-shadow hover:shadow-xl">
      <h2 className="mb-2 text-xl font-semibold text-ink">{name}</h2>
      <p className="text-neutral-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-neutral-600">
        <span className="font-medium">Address:</span> {formatAddress(street, city)}
      </p>
      <p className="text-neutral-600">
        <span className="font-medium">Age:</span> {age}
      </p>
      <button
        className={`${clicked ? 'bg-primary-500' : 'bg-neutral-800'} mt-5 rounded-md px-3 py-2 text-sm text-white transition-colors hover:opacity-90`}
        onClick={() => setClicked(true)}
        type="button"
      >
        {clicked ? 'Sudah diklik' : 'Silakan Klik'}
      </button>
    </article>
  )
}

export default UserCard
