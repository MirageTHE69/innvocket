import * as React from "react"

function Section2() {
  return (
    <div className="mt-7 mb-14">
      <div className="h-screen w-screen bg-image-section1">
        <div className="flex h-full w-full flex-col gap-6 md:gap-16 backdrop-blur-3xl">
          <span className="text-2xl md:text-4xl lg:text-6xl text-[#c2e2d4] capitalize text-center">
            Innvocket is a design and technology firm working
          </span>
          <div className="h-80 w-80 md:h-96 md:w-96 self-center">
            <div className="mt-8 h-full w-full bg-slate-200"></div>
          </div>
          <span className="text-2xl md:text-4xl lg:text-6xl mt-10 text-[#c2e2d4] capitalize text-center">
            We provide solutions to clients worldwide
          </span>

          <div className="w-[50%] md:w-[15%] h-12 bg-green-500 self-center flex  gap-5 justify-around items-center text-white rounded-2xl text-lg md:text-2xl relative">
            <span className=" mr-5">Know More</span>
            <svg
              className="w-6 h-6 md:w-8 md:h-8 ml-2 transform -rotate-45 absolute -translate-y-1/2 right-5 top-1/2"
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
        </div>
      </div>
    </div>
  )
}

export default Section2
