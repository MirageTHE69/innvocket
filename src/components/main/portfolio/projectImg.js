import React, { useState, useEffect } from "react"

function ProjectImg() {
  return (
    <div className=" w-screen h-screen bg-image-section1">
      <div class="flex h-screen w-screen  backdrop-blur-2xl">
        <div class="flex h-full w-[60%] flex-wrap items-center justify-center  p-8 gap-7 ">
          <div class="h-[50%] w-[40%] p-4 rounded-2xl bg-black"></div>
          <div class="h-[50%] w-[40%] p-4  rounded-2xl bg-red-500"></div>
          <div class="h-[50%] w-[40%] p-4 rounded-2xl bg-green-500"></div>
          <div class="h-[50%] w-[40%] p-4  rounded-2xl bg-slate-500"></div>
        </div>
        <div class="h-full w-[50%] mt-2  flex items-center">
          <div class=" h-[95%] w-[80%] rounded-lg bg-white p-4 shadow-md"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImg
