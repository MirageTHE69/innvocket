import React, { useState, useEffect } from "react"
import Navbar from "../components/main/navBarPortfolio"
import Grid from "../components/main/portfolioGrid"

const Protfolio = () => {
  const [selectedTab, setSelectedTab] = useState("All")

  const handleTabClick = tabName => {
    setSelectedTab(tabName)
  }

  return (
    <div className=" w-screen  bg-[#090c10] bg-image-section1">
      <div className=" w-screen  backdrop-blur-2xl">
        <Navbar onTabClick={handleTabClick} selectedTab={selectedTab} />
        <div>
          <div className=" mt-10 bg-[#090c10] pb-64 ">
          <Grid selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Protfolio