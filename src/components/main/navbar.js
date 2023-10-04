import React, { useState } from "react"
import { Link } from "gatsby"
import logoImg from "../../images/Logo.png"
import Ham from "../../images/hamburger.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="fixed w-full h-20 flex flex-col justify-between items-center pb-10  z-50 ">
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <img
            src={logoImg}
            alt="LOGO"
            className="h-32 w-32 ml-10   top-0 object-contain"
          />
        </div>{" "}
        <ul className="w-full flex justify-center items-center space-x-10 text-2xl">
          <li className="relative">
            <span
              className="text-black flex items-center custom-heading cursor-pointer mt-5"
              onClick={toggleMenu}
            >
              <img
                src={Ham} // Replace with your image URL
                alt="Menu"
                className="h-7 w-7 mr-2"
              />
              Menu
            </span>
            {menuOpen && (
              <ul className="absolute top-12 right-0  bg-white p-4 space-y-4 text-xl rounded-md shadow-lg">
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
        <div className="w-1/2 sm:w-1/4 md:w-1/6 bg-green-500 rounded-full p-2 mr-5 mb-4 ml-5 flex items-center justify-center relative">
          <span className="text-base md:text-lg text-white mr-2">
            Get in Touch
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
