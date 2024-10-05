import React from 'react'
import cap1 from "../assets/img/img (4).jpeg"
import cap2 from "../assets/img/img (6).jpeg"
import cap3 from "../assets/img/img (7).jpeg"
import cap4 from "../assets/img/img (10).jpeg"
export default function Products() {
  return (
    <div className='bg-slate-200  py-6 mt-10'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-4xl font-bold uppercase my-10 text-center md:text-left'>Buy 1 get 1 Free <br />on best selling products</h3>
        <div className='card-parent grid grid-cols-1 md:grid-cols-4 mt-4 gap-4 mx-4 md:mx-0'>
          <div className="card card-compact bg-base-100 shadow-xl ">
            <div className='mx-2 mt-2 px-3 pt-3'>
              <figure>
                <img
                  className='rounded-md'
                  src={cap1}
                  alt="Shoes" />
              </figure>
              <div className=" font-semibold space-y-1 p-2">
                <h5 className="text-lg ">Army Green Active Short Sleeve</h5>
                <div className="flex gap-2">
                  <p>$ 34.95</p>
                  <p className='line-through text-gray-500'>$ 34.95</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl ">
            <div className='mx-2 mt-2 px-3 pt-3'>
              <figure>
                <img
                  className='rounded-md'
                  src={cap2}
                  alt="Shoes" />
              </figure>
              <div className=" font-semibold space-y-1 p-2">
                <h5 className="text-lg ">Army Green Active Short Sleeve</h5>
                <div className="flex gap-2">
                  <p>$ 34.95</p>
                  <p className='line-through text-gray-500'>$ 34.95</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl ">
            <div className='mx-2 mt-2 px-3 pt-3'>
              <figure>
                <img
                  className='rounded-md'
                  src={cap3}
                  alt="Shoes" />
              </figure>
              <div className=" font-semibold space-y-1 p-2">
                <h5 className="text-lg ">Army Green Active Short Sleeve</h5>
                <div className="flex gap-2">
                  <p>$ 34.95</p>
                  <p className='line-through text-gray-500'>$ 34.95</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl ">
            <div className='mx-2 mt-2 px-3 pt-3'>
              <figure>
                <img
                  className='rounded-md'
                  src={cap4}
                  alt="Shoes" />
              </figure>
              <div className=" font-semibold space-y-1 p-2">
                <h5 className="text-lg ">Army Green Active Short Sleeve</h5>
                <div className="flex gap-2">
                  <p>$ 34.95</p>
                  <p className='line-through text-gray-500'>$ 34.95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
