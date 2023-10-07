import * as React from "react"

function AboutProject() {
  return (
    <div className="h-screen w-screen bg-[#131325] p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row h-full justify-center items-center custom-heading">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center sm:w-1/2 h-full p-2 sm:p-4 md:p-6">
          <span className="label-chip border-2 w-full sm:w-1/4 text-green-800 md:text-base flex justify-center text-sm items-center border-green-400 py-1 px-2 sm:p-2 rounded-md shadow-md">
            Current Status
          </span>
          <p className="text-center mt-6 sm:mt-8 text-2xl sm:text-3xl text-white">
            Droppable is set to launch in beta in 2023. Together with the beta,
            we’ll launch a refreshed website. Stay tuned.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block sm:bg-transparent bg-silver h-full w-px flex self-center md:border-r border-gray-500"></div>

        {/* Right Side */}
        <div className="flex flex-col sm:w-1/2 h-full items-center justify-center p-2 sm:p-4 md:p-6">
          <span className="label-chip border-2 w-full sm:w-1/4 text-green-800 text-base flex justify-center items-center border-green-400 py-1 px-2 sm:p-2 rounded-md shadow-md">
            Team
          </span>
          <span className="text-center mt-4 sm:mt-6 text-lg sm:text-xl text-white">
            Aditya mohite (Web developer)
          </span>
          <span className="text-center mt-4 sm:mt-6 text-lg sm:text-xl text-white">
            Aditya mohite (Web developer)
          </span>
          <span className="text-center mt-4 sm:mt-6 text-lg sm:text-xl text-white">
            Aditya mohite (Web developer)
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutProject
