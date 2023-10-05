import * as React from "react"
import Hero from "../components/main/portfolio/heroSection"
import Section1 from "../components/main/portfolio/section1"
import ProjectImg from "../components/main/portfolio/projectImg"
import AboutProject from "../components/main/portfolio/aboutProject"

const ProjectDetails = () => {
  return (
    <div className=" w-screen h-screen bg-[#131325]">
      <Hero />
      <div className=" w-screen h-screen">
        <Section1 />
      </div>
      <div className=" w-screen h-screen bg-[#131325]">
        <ProjectImg />
      </div>
      <div className=" w-screen h-screen">
        <AboutProject />
      </div>
    </div>
  )
}

export default ProjectDetails
