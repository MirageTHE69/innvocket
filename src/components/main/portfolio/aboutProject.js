import * as React from "react"

function AboutProject() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row h-screen w-screen bg-[#131325] justify-center items-center custom-heading">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center sm:w-1/2 h-[50%] p-8">
          <span className="label-chip border-2 w-1/5 text-green-800 md:text-base flex justify-center text-sm  items-center border-green-400 p-2 rounded-md shadow-md">
            Current Status
          </span>
          <p className="text-center mt-10 text-4xl text-white">
            Droppable is set to launch in beta in 2023. Together with the beta,
            we’ll launch a refreshed website. Stay tuned.
          </p>
        </div>

        {/* Divider */}
        <div class=" sm:bg-transparent  bg-silver h-[50%]  flex  self-center md:border-r border-gray-500"></div>

        {/* Right Side */}
        <div className="flex flex-col sm:w-1/2 h-[50%] items-center justify-center ">
          <span className="label-chip border-2 w-1/5 text-green-800 text-base flex justify-center items-center border-green-400 p-2 rounded-md shadow-md">
            Team
          </span>
          <span className="text-center mt-10 text-xl text-white">
            Aditya mohite (Web developer)
          </span>
          <span className="text-center mt-10 text-xl text-white">
            Aditya mohite (Web developer)
          </span>
          <span className="text-center mt-10 text-xl text-white">
            Aditya mohite (Web developer)
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutProject
