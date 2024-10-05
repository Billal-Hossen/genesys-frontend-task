import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo2 from "../../src/assets/Logo/logo2.png"
import card1 from "../assets/Icon/american-express .svg"
import card2 from "../assets/Icon/visa 1.svg"
import card3 from "../assets/Icon/apple-pay 1.svg"
import card4 from "../assets/Icon/visa 2.svg"
import card6 from "../assets/Icon/amex 1.svg"
import card5 from "../assets/Icon/paypal 1.svg"
import card7 from "../assets/Icon/diners-club 1.svg"
export default function Footer() {
  return (
    <div className=' bg-black text-white py-10'>
      <div className="items-start">
        <a className="btn btn-ghost"><img className='h-16 w-16 text-red-700 ml-2' src={logo2} alt="" /><span className='text-6xl font-bold'>VTMERCH</span></a>
      </div>
      <hr className='mx-10 text-gray-200' />

      <footer className="footer  p-10">
        <nav>
          <h6 className="text-lg font-semibold">Subscribe and be the first to receive <br />notifications about our upcoming releases <br /> and the latest news. </h6>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter your email..."
              className="  border-green-500  max-w-xs  h-8 w-80 text-center"
            /><br />
            <button className="bg-gray-50 rounded-md text-black mt-2 h-8 w-80 text-center font-semibold">Subscribe</button>
          </div>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Customer Services</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Search</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Refund policy</a>
          <a className="link link-hover">Track Order</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Products</h6>
          <a className="link link-hover">Featured</a>
          <a className="link link-hover">Bestseller</a>
          <a className="link link-hover">Latest product</a>
          <a className="link link-hover">All collections</a>
          <a className="link link-hover">All products</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Contact Us</h6>
          <a className="link link-hover">Available between 8AM to 8PM. <br /> Ready to answer your questions.</a>
          <a className="link link-hover flex items-center gap-2"> <FaPhoneAlt />013456789</a>
          <a className="link link-hover flex items-center gap-2"><MdOutlineMailOutline />store@valuetainment.com</a>
          <a className="link link-hover flex items-center gap-3"><FaFacebookF /><FaTwitterSquare /><FaLinkedin /><FaInstagram /></a>
        </nav>
      </footer>
      <div className='md:flex justify-between mx-10'>
        <p className=' '>&copy; 2024 Valuetainment Store. All rights reserved.</p>
        <div className='flex items-center gap-2'>
          <img src={card2} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card3} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card7} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card4} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card5} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card1} className='h-10 w-10 text-white link link-hover' alt="" />
          <img src={card6} className='h-10 w-10 text-white link link-hover' alt="" />
        </div>
      </div>

    </div>
  )
}

