import * as React from "react"
import Rocket from "../../images/rocket.png"
import second from "../../images/teamImages.png"

function Section2() {
  return (
    <div className="mt-7 mb-14">
      <div className="h-screen w-screen bg-image-section1">
        <div className="flex h-full w-full flex-col gap-6 md:gap-16 backdrop-blur-3xl">
          <span className="text-2xl md:text-4xl lg:text-6xl text-[#c2e2d4] capitalize text-center">
            Innvocket is a design and technology firm working
          </span>
          <div className="h-80 w-80 md:h-96 md:w-96 self-center">
            <div className="mt-8 h-full w-full bg-slate-200 relative">
              <img
                src={second} // Replace with your image URL
                alt="Image"
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </div>
          </div>
          <span className="text-2xl md:text-4xl lg:text-6xl mt-10 text-[#c2e2d4] capitalize text-center">
            We provide solutions to clients worldwide
          </span>

          <div className=" w-full flex items-center justify-center">
            <div className="w-1/2 sm:w-1/3 md:w-1/6 bg-green-500 rounded-full p-2 mr-5 mb-4 ml-5 flex items-center justify-center relative">
              <span className="text-base md:text-lg text-white mr-2">
                Get in Touch
              </span>
              <svg
                className="w-6 md:w-8 h-6 md:h-8 text-green-500 absolute ml-4 right-2 md:right-0 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 32 32"
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
        </div>
      </div>
    </div>
  )
}

export default Section2
