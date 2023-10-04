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
  <div className="w-screen custom-heading overflow-x-hidden bg-black">
    <Navbar />
    <div className="bg-slate-300">
      <HeroSection />
    </div>
    <div className="bg-black pb-10">
      <Section2 />
    </div>
    <div className="bg-black pb-10">
      <Projects />
    </div>
    <div className="bg-black w-full h-full pb-14 pt-14">
      <Companys />
    </div>
    <div className="bg-black pb-10">
      <Team />
    </div>
    <div className="bg-black pb-10">
      <GetInTouch />
    </div>
    <div className="bg-[#0a120f]">
      <Footer />
    </div>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
