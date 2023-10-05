import React from "react"

function Hero() {
  return (
    <div className="w-screen h-screen bg-image-section custom-heading">
      <div className="w-screen h-screen flex justify-center items-center backdrop-blur-3xl">
        <div className="flex flex-col w-screen h-screen justify-center items-center">
          <h1 className="w-screen flex justify-center self-center text-white text-4xl sm:text-6xl lg:text-8xl font-medium text-center">
            Cro - Consumer Rights
          </h1>
          <span className="text-xl text-white mt-5 text-center">
            We work with this company as Mern stack
            <div className="flex justify-center mt-5 space-x-2">
              <span className="label-chip bg-green-500 bg-opacity-50 text-green-800  border-2  border-green-600 text-base p-2 rounded-md shadow-md backdrop-blur-md">
                Mern stack
              </span>

              <span className="label-chip bg-green-500 bg-opacity-50 text-green-800  border-2  border-green-600 text-base p-2 rounded-md shadow-md">
                React js
              </span>
              <span className="label-chip bg-green-500 bg-opacity-50 text-green-800 border-2  border-green-600   text-base p-2 rounded-md shadow-md">
                Web Development
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
