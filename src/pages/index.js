import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import heroBack from "../images/Ellipse.png"
import HeroSection from "../components/main/heroSection"
import Section2 from "../components/main/section2"
import Projects from "../components/main/projects"
import Companys from "../components/main/companys"
import Team from "../components/main/team"
import GetInTouch from "../components/main/getInTouch"
import Navbar from "../components/main/navbar"
import Footer from "../components/main/footer"

const IndexPage = () => (
  <div className="w-screen h-screen custom-heading overflow-x-hidden bg-black">
    <Navbar />
    <div className="bg-slate-300 w-screen h-screen">
      <HeroSection />
    </div>
    <div className="bg-black pb-5 ">
      <Section2 />
    </div>
    <div className="bg-black w-full h-full">
      <Projects />
    </div>
    <div className="bg-black w-full h-full pt-10">
      <Companys />
    </div>
    <div className="w-full h-full bg-black">
      <Team />
    </div>
    <div className="bg-black pt-16">
      <GetInTouch />
    </div>
    <div className=" bg-[#0a120f]  backdrop-blur-3xl ">
      <Footer />
    </div>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
