import React from "react"

function Section1() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#131325] to-[#232337] custom-heading flex justify-center items-center p-4">
      <div className="max-w-3xl h-auto flex flex-col justify-center items-center backdrop-blur-md p-6 rounded-xl gap-7">
        <span className="label-chip border-2 w-[15%] sm:w-[10%] md:w-[9%] text-green-800 text-base flex justify-center items-center border-green-400 py-2 px-4 hover:bg-green-400 hover:text-[#131325] transition-all duration-300 rounded-md shadow-md">
          Idea
        </span>
        <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-center text-white font-medium leading-relaxed">
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
