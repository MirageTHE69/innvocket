import * as React from "react"
import Android from "../../images/mobile.png"
import UiUx  from "../../images/uiux.png"
import Web from "../../images/web.png"

function Projects() {
  return (
    <div class="mainScreen flex h-screen w-screen items-center justify-center bg-black pt-30">
      <div class="flex h-screen w-screen items-center justify-center">
        <div class="flex h-full flex-col items-center space-y-4">
          <div class="flex flex-col items-center">
            <span class="block  font-bold text-white text-6xl"> Recent </span>
            <span class="block text-6xl font-bold text-white"> Work </span>
          </div>
          <hr class="border-t-1 w-screen border-gray-400" />
          <span class="block w-3/4 text-center text-4xl text-white">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            molestias quo veniam dicta, placeat architecto aperiam quae{" "}
          </span>
          <div class="justify-between flex h-[90%] w-3/4 space-x-4">
            <div class="group relative flex-1  bg-gradient-to-r from-blue-500 to-blue-300 p-4 text-white">
              <img
                src={Android}
                alt="Card 1 Image"
                class="w-full h-full  object-cover absolute inset-0"
              />
              <div class="absolute inset-0 flex items-center justify-center rounded-md bg-white bg-opacity-20 p-2 opacity-0 backdrop-blur-md group-hover:opacity-100">
                View Project
              </div>
            </div>

            <div class="group relative flex-1  bg-gradient-to-r from-blue-500 to-blue-300 p-4 text-white">
              <img
                src={UiUx}
                alt="Card 1 Image"
                class="w-full h-full  object-cover absolute inset-0"
              />
              <div class="absolute inset-0 flex items-center justify-center rounded-md bg-white bg-opacity-20 p-2 opacity-0 backdrop-blur-md group-hover:opacity-100">
                View Project
              </div>
            </div>
          </div>
          <div class="group relative  h-56 w-3/4 bg-gradient-to-r from-blue-500 to-yellow-100 p-4 text-white">
          <img
                src={Web}
                alt="Card 1 Image"
                class="w-full h-full  object-cover absolute inset-0"
              />
            <button class="absolute inset-0 flex items-center justify-center rounded-md bg-white bg-opacity-20 p-2 opacity-0 backdrop-blur-md group-hover:opacity-100">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
