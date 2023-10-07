import React, { useState, useEffect } from "react"

function ProjectImg() {
  return (
    <div className="w-screen h-screen bg-image-section1">
      <div className="flex h-full w-full backdrop-blur-2xl p-20 my-auto">
        <div className="flex h-full w-[60%] flex-wrap items-center justify-center gap-4">
          <div className="h-[45%] w-[40%] p-4 rounded-2xl bg-black"></div>
          <div className="h-[45%] w-[40%] p-4 rounded-2xl bg-red-500"></div>
          <div className="h-[45%] w-[40%] p-4 rounded-2xl bg-green-500"></div>
          <div className="h-[45%] w-[40%] p-4 rounded-2xl bg-slate-500"></div>
        </div>
        <div className="h-full w-[50%] my-auto flex items-center">
          {/* Adjust the height of the white box here */}
          <div className="h-[95%] w-[80%] rounded-lg bg-white p-4 shadow-md"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImg
