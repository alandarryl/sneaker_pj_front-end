import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CardGrid from './components/cardGrid/CardGrid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardGrid />
    </>
  )
}

export default App
