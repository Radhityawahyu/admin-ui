const products = [
  {
    name: 'Starter Plan',
    description: 'A simple plan for trying out the essential features.',
    status: 'Active',
  },
  {
    name: 'Professional Plan',
    description: 'Everything you need to run a growing project.',
    status: 'Active',
  },
  {
    name: 'Business Plan',
    description: 'Advanced tools for teams that need more control.',
    status: 'Active',
  },
  {
    name: 'Enterprise Plan',
    description: 'Flexible solutions designed for larger organizations.',
    status: 'Active',
  },
  {
    name: 'Custom Plan',
    description: 'Build a plan around the needs of your organization.',
    status: 'Active',
  },
]

function ProductCard({ name, description, status }) {
  return (
    <article className="flex min-h-56 flex-col justify-between rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <span className="text-sm font-semibold text-green-500">{status}</span>
      </div>

      <p className="py-6 text-gray-800">{description}</p>

      <div className="flex justify-end gap-2">
        <button
          className="rounded bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 active:bg-gray-400"
          type="button"
        >
          Cancel
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
          type="button"
        >
          Buy
        </button>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </main>
  )
}

export default App
