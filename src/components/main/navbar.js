import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LogoImg from "../../images/Logo.png"
import Ham from "../../images/hamburger.png"

import "/src/styles/tailwind.css"

gsap.registerPlugin(ScrollTrigger)

function Navbar({ textColor }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const navbarRef = useRef(null)
  const floatingNavbarRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: navbarRef.current,
      start: "top+=100",
      end: "bottom bottom",
      onUpdate: self => {
        if (self.progress === 0) {
          setIsScrolled(false)
        } else {
          setIsScrolled(true)
        }
      },
    })

    // Cleanup function to kill the ScrollTrigger instance when the component unmounts
    return () => {
      trigger.kill()
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    gsap.to(floatingNavbarRef.current, { width: "30%", duration: 0.5 })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    gsap.to(floatingNavbarRef.current, { width: "15%", duration: 0.5 })
  }

  return (
    <div className=" w-screen">
      {/* Main Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed w-full h-20 flex mt-5 flex-col justify-between items-center pb-10 z-50 ${textColor} ${
          isScrolled ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <img
              src={LogoImg}
              alt="LOGO"
              className="h-32 w-32 ml-10 object-contain"
            />
          </div>
          <div className="relative">
            <span
              className="text-black flex items-center mr-7 custom-heading cursor-pointer"
              onClick={toggleMenu}
            >
            
            </span>
           
          </div>
        </div>
      </nav>

      {/* Floating Navbar */}
      {isScrolled && (
        <div
          ref={floatingNavbarRef}
          className={`fixed top-4 left-1/2 w-[15%] transform -translate-x-1/2 z-50 bg-transparent shadow-xl   rounded-lg flex items-center justify-between  ${
            isHovered ? "" : "px-6 py-4 border border-gray-300"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? (
            <><div className=" w-screen">
              <div className="flex  h-full   bg-gradient rounded-xl w-[110%] flex-col justify-between  items-center ">
              <img src={LogoImg} alt="LOGO" className="w-[20%] mt-6" />

                <div></div>
                <div class="grid grid-cols-3 gap-6 pb-5 px-6 text-white ">
                  <div class=" border border-gray-400 bg-gradient h-[80%]  py-7  p-8  rounded-xl text-center  space-y-2 ">
                    <div className=" py-1  px-1 rounded-md bg-[#323743] border  space-y-2 ">
                    <svg 
                      class="h-6 w-6 mx-auto mb-2 "
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 14a4 4 0 014-4h8a4 4 0 014 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
                      ></path>
                    </svg>
                    </div>
                    <span className="block pb-3">    <Link className=" no-underline text-white text-sm"to="/">Home</Link></span>
                  </div>

                  <div class=" border border-gray-400 bg-gradient h-[80%]  py-7  p-8  rounded-xl text-center  space-y-2 ">
                    <div className=" py-1  px-1 rounded-md bg-[#323743] border   ">
                    <svg 
                      class="h-6 w-6 mx-auto mb-2 "
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 14a4 4 0 014-4h8a4 4 0 014 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
                      ></path>
                    </svg>
                    </div>
                    <span className="block pb-3">    <Link className=" no-underline text-white text-sm"to="/">Portfolio</Link></span>
                  </div>
                  <div class=" border border-gray-400 bg-gradient h-[80%]  py-7  p-8  rounded-xl text-center  space-y-2  ">
                    <div className=" py-1  px-1 rounded-md bg-[#323743] border   ">
                    <svg 
                      class="h-6 w-6 mx-auto mb-2 "
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 14a4 4 0 014-4h8a4 4 0 014 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
                      ></path>
                    </svg>
                    </div>
                    <span className="block pb-3">    <Link className=" no-underline text-white text-sm"to="#contact">contact</Link></span>
                  </div>
                </div>
              </div>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center  justify-between">
              <img src={LogoImg} alt="LOGO" className="h-1/2 w-[55%] my-auto" />
              <img
                src={Ham}
                alt="Menu"
                className="h-6 w-6 cursor-pointer ml-4 my-auto"
                onClick={toggleMenu}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
