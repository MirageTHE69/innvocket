import React, { useState } from "react"

function Navbar() {
  const [activeTab, setActiveTab] = useState("home")

  const handleTabClick = tabName => {
    setActiveTab(tabName)
  }

  return (
    <div className="flex justify-center font-roboto pt-10 ">
      <div className="w-[50%] bg-rebeccapurple flex flex-row flex-wrap justify-between rounded-2xl shadow-md border border-gray-400 bg-black p-2">
        <a
          href="#"
          className={`nav home flex-1 p-4 text-center text-sm no-underline ${
            activeTab === "home"
              ? "text-green-300 w-full h-full backdrop-blur-2xl bg-transparent  border border-green-500 p-2 rounded-xl"
              : "text-white "
          }`}
          onClick={() => handleTabClick("home")}
        >
          <i className="fa fa-home mr-1.5 text-1.2rem"></i>All
        </a>
        <a
          href="#"
          className={`nav search flex-1 p-4 text-center text-sm no-underline ${
            activeTab === "search"
              ? "text-green-300 w-full h-full backdrop-blur-2xl bg-transparent  border border-green-500 p-2 rounded-xl"
              : "text-white "
          }`}
          onClick={() => handleTabClick("search")}
        >
          <i className="fa fa-search mr-1.5 text-1.2rem"></i>Mobile Apps
        </a>
        <a
          href="#"
          className={`nav following flex-1 p-4 text-center text-sm no-underline ${
            activeTab === "following"
              ? "text-green-300 w-full h-full backdrop-blur-2xl bg-transparent  border border-green-500 p-2 rounded-xl"
              : "text-white "
          }`}
          onClick={() => handleTabClick("following")}
        >
          <i className="fa fa-user-plus mr-1.5 text-1.2rem"></i>Websites
        </a>
        <a
          href="#"
          className={`nav settings flex-1 p-4 text-center text-sm no-underline ${
            activeTab === "settings"
              ? "text-green-300 w-full h-full backdrop-blur-2xl bg-transparent  border border-green-500 p-2 rounded-xl"
              : "text-white "
          }`}
          onClick={() => handleTabClick("settings")}
        >
          <i className="fa fa-cog mr-1.5 text-1.2rem"></i>Ui / Ux
        </a>
      </div>
    </div>
  )
}

export default Navbar
