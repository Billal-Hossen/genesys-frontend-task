import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import Carousel from './components/Carousel'
import Products from './components/Products'
import Collection from './components/Collection'
import Banner from './components/Banner'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <div className='bg-red-700 pb-10'>
        <Nabvar />
        <Carousel />
      </div>
      <Products />
      <Collection />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
