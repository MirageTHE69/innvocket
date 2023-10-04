import React, { useEffect } from "react"
import lottie from "lottie-web"
import Member1 from "../animation/team1.json" // Replace with the actual path to your Lottie JSON files
import Member2 from "../animation/team2.json"
import Member3 from "../animation/team3.json"

function Team() {
  useEffect(() => {
    const container1 = document.getElementById("lottie-container-1")
    const container2 = document.getElementById("lottie-container-2")
    const container3 = document.getElementById("lottie-container-3")

    if (container1) {
      lottie.loadAnimation({
        container: container1,
        animationData: Member1,
        renderer: "svg",
        loop: true,
        autoplay: true,
      })
    }

    if (container2) {
      lottie.loadAnimation({
        container: container2,
        animationData: Member2,
        renderer: "svg",
        loop: true,
        autoplay: true,
      })
    }

    if (container3) {
      lottie.loadAnimation({
        container: container3,
        animationData: Member3,
        renderer: "svg",
        loop: true,
        autoplay: true,
      })
    }
  }, [])

  return (
    <div className=" p-16">
      <div className="h-full w-full bg-image-section1 custom-heading">
        <div className="h-full w-full backdrop-blur-3xl">
          <div className="flex flex-col items-center mb-16">
            <span
              className="block text-white text-6xl"
              style={{ letterSpacing: "0.1em" }}
            >
              <i className="italic">E</i>xpert
            </span>{" "}
            <span className="block text-6xl text-white">Members</span>
          </div>
          <div className="px-4 sm:px-10 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Card 1 */}
              <div className="flex flex-col bg-gray-50 p-4 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
                <div
                  className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden"
                  id="lottie-container-1"
                ></div>
                <div className="text-center mt-4 pt-4 text-white">
                  <span className="text-lg block mt-5">Aditya Mohite</span>
                  <span className="text-sm block mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque non necessitatibus corrupti. Obcaecati,
                    aspernatur. D
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-gray-50 p-4 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
                <div
                  className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden"
                  id="lottie-container-2"
                ></div>
                <div className="text-center mt-4 pt-4 text-white">
                  <span className="text-lg block mt-5">Another Member</span>
                  <span className="text-sm block mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque non necessitatibus corrupti. Obcaecati,
                    aspernatur. D
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-gray-50 p-4 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
                <div
                  className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden"
                  id="lottie-container-3"
                ></div>
                <div className="text-center mt-4 pt-4 text-white">
                  <span className="text-lg block mt-5">Yet Another Member</span>
                  <span className="text-sm block mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque non necessitatibus corrupti. Obcaecati,
                    aspernatur. D
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
