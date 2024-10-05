import React from 'react'
import bg from '../assets/Icon/quotes.svg'
import choice from "../assets/img/img (5).png"
import signature from "../assets/img/signature.png"
import { FaArrowRight } from "react-icons/fa";
export default function Banner() {
  return (
    <div className=' bg-red-700 text-white relative' >
      <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat ' }} className='max-w-6xl mx-auto'>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={choice}
            className="max-w-sm -mt-28 e " />
          <div className="space-y-2 text-3xl font-bold uppercase">
            <h1 >Our mission is to enlighten, entertain <br />and empower current and future <br />leaders around the world</h1>
          </div>

        </div>
      </div>
    </div>
  )
}
