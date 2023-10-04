import * as React from "react"

function GetInTouch() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-black p-10 text-white">
        <span className="text-3xl">Get In Touch</span>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <span>
              -- Get in Touch Your Connection to Our Creative Universe
            </span>
            <p className="mt-8">
              Step into our digital universe where connections thrive and
              visions come alive. We're not just code and pixels; we're creators
              and collaborators. Whether it's ideas, partnerships, or a friendly
              hello, we are here, ears and keyboards at the ready.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <input
              className="w-full h-10 p-3 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your name"
            ></input>

            <input
              className="w-full h-10 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your email"
            ></input>
            <input
              className="w-full h-10 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your phone number"
            ></input>

            <input
              className="w-full h-24 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your message"
            ></input>

            <button className="w-full h-14  mt-12 bg-gradient-to-r from-green-700 via-green-500 to-green-600 rounded-2xl backdrop-blur-2xl">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
