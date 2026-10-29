import { useState } from 'react'

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <article
      className={`cursor-pointer rounded-lg p-6 shadow-card transition-colors ${
        clicked ? 'bg-blue-100' : 'bg-white'
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <h2 className="mb-3 text-xl font-semibold capitalize text-ink">{title}</h2>
      <p className="leading-relaxed text-neutral-600">{body}</p>
    </article>
  )
}

export default PostCard
