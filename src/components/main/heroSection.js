import * as React from "react"

function HeroSection() {
  return (
    <div class=" h-screen w-screen bg-image-section custom-heading ">
      <div class="flex h-screen w-screen backdrop-blur-3xl">
        <div className=" w-screen h-screen flex flex-col justify-center ">
          <div>
            <span className="  text-9xl text-black flex justify-center">
              We design for You{" "}
            </span>
          </div>
          <div>
            <div class=" w-screen flex justify-center  ml-7 mt-8  ">
              <div class=" w-[60%]  flex gap-11  ">
                <div className="w-full h-16 bg-white rounded-full p-2 flex items-center justify-center relative">
                  <span className="text-4xl text-green-500 mr-4">
                    Get in Touch
                  </span>
                  <svg
                    className="w-9 h-9 text-green-500 absolute  right-10 transform -rotate-45"
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

                <p className=" text-4xl text-black custom-heading">
                  tal realm, where code speaks and pixels dream. With more
                  computer hours than family dinners,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
