import * as React from "react"

function HeroSection() {
  
  return (
    <div className="h-screen w-screen bg-image-section custom-heading">
      <div className="flex h-screen w-screen backdrop-blur-3xl">
        <div className="w-screen h-screen flex flex-col justify-center">
          <div className="w-full flex items-center justify-center">
            <span className="text-xl md:text-4xl lg:text-7xl px-1 text-black flex items-center justify-center">
              <i className=" italic">R</i>
              ocketing Your Digital Vision to Reality
            </span>
          </div>
          <div className="w-screen flex justify-center mt-8 md:ml-20">
            <div className="w-full md:w-3/4 px-4 md:px-0 md:ml-4 flex flex-col md:flex-row gap-4 items-center">
              <div className="w-1/2 sm:w-1/3 md:w-1/6 bg-white rounded-full p-2 mr-5 mb-4 ml-5 flex items-center justify-center relative">
                <span className="text-base md:text-lg text-green-500 mr-2">
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

              <p className="text-base md:text-lg md:w-3/4 text-black custom-heading">
                In the expansive IT cosmos, we drive businesses with pioneering
                solutions. Like rockets defying gravity, our strategies elevate
                your business above rivals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
