import * as React from "react"

function HeroSection() {
  return (
    <div className="h-screen w-screen bg-image-section custom-heading">
      <div className="flex h-screen w-screen backdrop-blur-3xl">
        <div className="w-screen h-screen flex flex-col justify-center">
          <div>
            <span className="text-4xl md:text-6xl lg:text-9xl  text-black flex justify-center">
              We design for You
            </span>
          </div>
          <div className="w-screen flex justify-center mt-8">
            <div className="w-full md:w-[70%] px-10 flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full lg:w-[100%] md:w-[50%] bg-white rounded-full p-2  mb-4  flex items-center justify-center relative">
                <span className="text-lg   md:text-2xl  text-green-500 md:mr-4">
                  Get in Touch
                </span>
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-green-500 absolute  ml-5 right-2 md:right-4 transform -rotate-45"
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
              <p className="text-lg md:text-2xl px-10 text-black custom-heading">
                A digital realm, where code speaks and pixels dream. With more
                computer hours than family dinners.A digital realm, where code speaks and pixels dream. With more
                computer hours than family dinners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
