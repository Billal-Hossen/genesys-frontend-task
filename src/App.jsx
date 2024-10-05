import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nabvar />
      <Carousel />
    </div>
  )
}

export default App
