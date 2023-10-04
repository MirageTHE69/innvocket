import React from "react"
import Team1 from "../../images/team1.jpg"
import Team2 from "../../images/team2.jpg"
import Team3 from "../../images/team3.jpg"

function Team() {
  return (
    <div>
      <div className="h-full w-dull bg-image-section1">
        <div className="h-full w-full backdrop-blur-3xl">
          <div className="flex flex-col items-center mb-16">
            <span className="block text-white text-6xl"> Expert </span>
            <span className="block text-6xl text-white"> Member </span>
          </div>
          <div className="px-4 sm:px-10 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-16">
              {/* Card 1 */}
              <div className="flex flex-col bg-gray-50 p-4 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
                <div className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden">
                  <img
                    src={Team1}
                    className="w-full h-full rounded-full object-cover"
                    alt="Team Member"
                  />
                </div>
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
                <div className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden">
                  <img
                    src={Team2}
                    className="w-full h-full rounded-full object-cover"
                    alt="Team Member"
                  />
                </div>
                <div className="text-center mt-4 pt-4 text-white">
                  <span className="text-lg block mt-5">Aditya Mohite</span>
                  <span className="text-sm block mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque non necessitatibus corrupti. Obcaecati,
                    aspernatur. D
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-tranparent p-4 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
                <div className="mx-auto bg-black rounded-full w-44 h-68 overflow-hidden">
                  <img
                    src={Team3}
                    className="w-full h-full rounded-full object-cover"
                    alt="Team Member"
                  />
                </div>
                <div className="text-center mt-4 pt-4 text-white">
                  <span className="text-lg block mt-5">Aditya Mohite</span>
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
