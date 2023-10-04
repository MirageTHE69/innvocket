import * as React from "react"

function Section2() {
  return (
    <div className=" mt-7">
      <div class="h-screen w-screen bg-image-section1">
        <div class="flex h-full w-full flex-col  gap-16 backdrop-blur-3xl ">
          <span class="flex w-full   justify-center text-center text-6xl text-[#c2e2d4] capitalize">
            Innvocket is design and technology firm working
          </span>
          <div class="h-[50%] w-[40%] self-center">
            <div class="mt-8 h-full w-full bg-slate-200"></div>
          </div>
          <span class="flex w-full   justify-center  text-center text-6xl text-[#c2e2d4] capitalize">
            {" "}
            We gave solution to all over world{" "}
          </span>

          <div className="w-[15%] h-12 bg-green-500 self-center flex justify-center items-center text-white rounded-2xl text-2xl relative">
            <span>Know More</span>
            <svg
              className="w-6 h-6 ml-2 transform -rotate-45 absolute  -translate-y-1/2 right-5 top-1/2"
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
