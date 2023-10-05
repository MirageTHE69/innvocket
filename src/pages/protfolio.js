import React, { useState, useEffect } from "react"
import Navbar from "../components/main/navBarPortfolio"
import Grid from "../components/main/portfolioGrid"

const Protfolio = () => (
  <div className=" w-screen h-screen bg-[#090c10]">
    <Navbar />
    <div>
      <Grid />
    </div>
  </div>
)

export default Protfolio
