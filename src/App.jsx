import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import Carousel from './components/Carousel'
import Products from './components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nabvar />
      <Carousel />
      <Products />
    </div>
  )
}

export default App
