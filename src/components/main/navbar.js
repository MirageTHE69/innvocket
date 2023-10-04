// Navbar.js

import React from "react"
import { span } from "gatsby" // Import span for Gatsby routing

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between h-20 pt-5   items-center  backdrop-filter backdrop-blur-lg  bg-black bg-opacity-0 z-50 shadow-2xl ">
      <div className="container mx-auto  flex items-center justify-center">
        <div>logo</div>
        <ul className="w-full space-x-10 pr-8 flex justify-center gap-7 items-center text-2xl ">
          <li>
            <span className="text-black flex items-center custom-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Menu
            </span>
          </li>
        </ul>
        <div className="w-[15%] h-10 mb-7 bg-green-500 self-center flex justify-center items-center text-white rounded-2xl text-xl relative">
          <span>Know More</span>
          <svg
            className="w-6 h-6  transform -rotate-45 absolute  -translate-y-1/2 right-5 top-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5l7 7-7 7M5 12h14"
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
