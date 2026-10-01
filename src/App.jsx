import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-neutral-800 px-6 py-12 text-center text-white">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img className="h-24 w-24" src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img className="h-24 w-24" src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold">Vite + React</h1>
        <h3 className="text-white">RADHITYA WAHYU SHANDRIA</h3>
        <div className="flex flex-col items-center gap-4">
          <button
            className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-500"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-neutral-400">
            Edit <code className="text-neutral-500">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-sm text-neutral-500">Click on the React and Vite logos to learn more</p>
      </div>
    </div>
  )
}

export default App
