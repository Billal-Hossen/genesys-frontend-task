import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import Carousel from './components/Carousel'
import Products from './components/Products'
import Collection from './components/Collection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nabvar />
      <Carousel />
      <Products />
      <Collection />
    </div>
  )
}

export default App
