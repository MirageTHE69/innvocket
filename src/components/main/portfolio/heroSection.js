import React from "react"

function Hero() {
  // Define the chips data
  const chipsData = ["Mern stack", "React js", "Web Development"]

  return (
    <div className="w-screen h-screen bg-image-section1 custom-heading">
      <div className="w-screen h-screen flex justify-center items-center backdrop-blur-3xl">
        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 justify-center items-center p-4">
          <h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Cro - Consumer Rights
          </h1>
          <p className="text-lg sm:text-xl text-white mb-5 text-center">
            We work with this company as Mern stack
          </p>
          <div className="flex justify-center mt-5 space-x-2">
            {chipsData.map((chip, index) => (
              <span
                key={index}
                className="label-chip bg-gradient-to-r from-green-400 to-green-600 text-white border-2 border-green-600 text-base py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
