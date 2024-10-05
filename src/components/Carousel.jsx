import React from 'react'

import item1 from "../assets/img/img (9).png"
import item2 from "../assets/img/img (10).png"
import item3 from "../assets/img/img (11).jpeg"
import item4 from "../assets/img/img (11).png"
export default function Carousel() {
  return (

    <div className="ml-0 md:ml-16  overflow-x-auto text-white">
      <div className="carousel  flex gap-5 justify-start items-center">
        <div className="carousel-item flex-shrink-0">
          <div className="card   ">
            <figure>
              <img
                className='rounded-lg  w-80 h-80'
                src={item1}

                alt="Shoes" />
            </figure>
            <div className=" my-2">
              <p>Army Green Active Short Sleeve</p>
              <div className="flex gap-2">
                <p>$ 34.95</p>
                <p className='line-through text-gray-200'>$ 34.95</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item flex-shrink-0">
          <div className="card   ">
            <figure>
              <img
                className='rounded-lg  w-80 h-80'
                src={item2}
                alt="Shoes" />
            </figure>
            <div className=" my-2">
              <p>Army Green Active Short Sleeve</p>
              <div className="flex gap-2">
                <p>$ 34.95</p>
                <p className='line-through text-gray-200'>$ 34.95</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item flex-shrink-0">
          <div className="card   ">
            <figure>
              <img
                className='rounded-lg  w-80 h-80'
                src={item3}
                alt="Shoes" />
            </figure>
            <div className=" my-2">
              <p>Army Green Active Short Sleeve</p>
              <div className="flex gap-2">
                <p>$ 34.95</p>
                <p className='line-through text-gray-200'>$ 34.95</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item flex-shrink-0">
          <div className="card   ">
            <figure>
              <img
                className='rounded-lg  w-80 h-80'
                src={item4}
                alt="Shoes" />
            </figure>
            <div className=" my-2">
              <p>Army Green Active Short Sleeve</p>
              <div className="flex gap-2">
                <p>$ 34.95</p>
                <p className='line-through text-gray-200'>$ 34.95</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item flex-shrink-0">
          <div className="card   ">
            <figure>
              <img
                className='rounded-lg  w-80 h-80'
                src={item3}
                alt="Shoes" />
            </figure>
            <div className=" my-2">
              <p>Army Green Active Short Sleeve</p>
              <div className="flex gap-2">
                <p>$ 34.95</p>
                <p className='line-through text-gray-200'>$ 34.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
