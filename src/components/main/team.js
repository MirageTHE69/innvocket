import * as React from "react"
import Team1 from "../../images/team1.jpg"
import Team2 from "../../images/team2.jpg"
import Team3 from "../../images/team3.jpg"

function Team() {
  return (
    <div>
      <div class="flex flex-col items-center mb-16">
        <span class="block   text-white text-6xl"> Expert </span>
        <span class="block text-6xl  text-white"> Member </span>
      </div>{" "}
      <div class="card-container flex justify-center items-center">
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Team3} alt="Avatar" />
              </div>
              <div class="flip-card-back flex flex-colk">
                <h1>Person 3</h1>
                <p>Full Stack Developer</p>
                <p>Visit profile</p>
              </div>
            </div>
          </div>
          <div className=" w-full  flex items-center justify-center mt-10">
            <span className="   text-xl text-white  self-center font-medium text-center">
              Person 3
            </span>
          </div>
        </div>
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Team3} alt="Avatar" />
              </div>
              <div class="flip-card-back flex flex-col">
                <h1>Person 3</h1>
                <p>Full Stack Developer</p>
                <p>Visit profile</p>
              </div>
            </div>
          </div>
          <div className=" w-full  flex items-center justify-center mt-10">
            <span className="   text-xl text-white  self-center font-medium text-center">
              Person 3
            </span>
          </div>
        </div>
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Team3} alt="Avatar" />
              </div>
              <div class="flip-card-back flex flex-col">
                <h1>Person 3</h1>
                <p>Full Stack Developer</p>
                <p>Visit profile</p>
              </div>
            </div>
          </div>
          <div className=" w-full  flex items-center justify-center mt-10">
            <span className="   text-xl text-white  self-center font-medium text-center">
              Person 3
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
