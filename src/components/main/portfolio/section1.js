import React from "react"

function Section1() {
  return (
    <div className="w-screen h-screen bg-[#131325] custom-heading">
      <div className="w-screen h-screen flex flex-col justify-center items-center backdrop-blur-3xl gap-7">
        <span className="label-chip border-2 w-[15%] sm:w-[10%] md:w-[9%] text-green-800 text-base flex justify-center items-center border-green-400 p-2 rounded-md shadow-md">
          Idea
        </span>
        <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-center text-white">
          Droppable is designed specifically for creatives who repeatedly share
          large files like videos or photos. It combines the simplicity of a
          messenger and the capability of a file transfer tool, packaged in a
          small unobstructive app always available on your desktop.
        </p>
      </div>
    </div>
  )
}

export default Section1
