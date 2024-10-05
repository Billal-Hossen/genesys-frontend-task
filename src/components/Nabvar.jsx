import React from 'react'
import logo from "../../src/assets/Logo/Valuetainment.svg"
export default function Nabvar() {
  return (
    // <div className="navbar mx-0">
    //   <div className="navbar-start text-white">
    //     <div className=" flex items-center gap-4"><img className='h-10 w-10' src={logo} alt="" /><span className='text-4xl font-bold '>VTMERCH</span></div>
    //   </div>
    //   <div className="navbar-end">
    //     <div className="dropdown ">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           className="inline-block h-5 w-5 stroke-current">
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"></path>
    //         </svg>
    //       </div>
    //       <div className='mr-24 md:mr-20'>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
    //           <li><a>Homepage</a></li>
    //           <li><a>Portfolio</a></li>
    //           <li><a>About</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="navbar ">
      <div className="flex-1">
        <div className=" text-white">
          <div className=" flex items-center gap-4"><img className='h-10 w-10' src={logo} alt="" /><span className='text-4xl font-bold '>VTMERCH</span></div>
        </div>
      </div>
      <div className="flex-none gap-2">

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
