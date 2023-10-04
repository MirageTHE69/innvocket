import React, { useState } from "react"
import { Link } from "gatsby"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="fixed w-full h-20 flex flex-col justify-between items-center pt-5 backdrop-filter backdrop-blur-lg bg-black bg-opacity-0 z-50 shadow-2xl">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-black text-3xl font-bold">Logo</div>
        <ul className="w-full flex justify-center items-center space-x-10 text-2xl">
          <li className="relative">
            <span
              className="text-black flex items-center custom-heading cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              Menu
            </span>
            {menuOpen && (
              <ul className="absolute top-12 right-0 bg-white p-4 space-y-4 text-xl rounded-md shadow-lg">
                {/* Add your menu items here */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            )}
          </li>
        </ul>
        <div className="w-[15%] md:w-[15%] mr-3 h-10 md:h-10  mb-7 md:mb-5 bg-green-500 self-center flex justify-center items-center text-white rounded-2xl text-xl md:text-lg relative">
          <span className="text-sm md:text-base">Know More</span>
          <svg
            className="w-6 h-6 md:w-5 md:h-5 transform -rotate-45 absolute -translate-y-1/2 right-3 md:right-2 top-1/2"
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
