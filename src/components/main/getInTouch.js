import * as React from "react"

function GetInTouch() {
  return (
    <div className="w-full h-auto lg:h-screen px-6 lg:px-16">
      <div className="w-full bg-black p-6 lg:p-10 text-white">
        <h2 className="text-4xl lg:text-5xl mb-6 lg:mb-16 text-center custom-heading">
          Get In Touch
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-6 text-lg lg:text-xl">
          <div className="lg:w-1/2">
            <span className="px-4 lg:px-10">
              Get in Touch Your Connection to Our Creative Universe
            </span>
            <p className="mt-6 lg:mt-8 px-4 lg:px-10 text-center lg:text-left">
              Step into our digital universe where connections thrive and
              visions come alive. We're not just code and pixels; we're creators
              and collaborators. Whether it's ideas, partnerships, or a friendly
              hello, we are here, ears and keyboards at the ready.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <input
              className="w-full h-10 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your name"
            ></input>

            <input
              className="w-full h-10 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your email"
            ></input>
            <input
              className="w-full h-10 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your phone number"
            ></input>

            <textarea
              className="w-full h-32 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your message"
            ></textarea>

            <button className="w-full h-12 mt-8 lg:mt-12 bg-gradient-to-r from-green-700 via-green-500 to-green-600 rounded-lg backdrop-blur-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
