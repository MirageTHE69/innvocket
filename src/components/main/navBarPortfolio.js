import React, { useState } from "react";
import logoImg from "../../images/Logo.png";

function Navbar({ onTabClick }) {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabClick(tabName); // Call the onTabClick prop to pass the selected tab to the parent component
  };

  return (
    <div className="px-4 md:px-12 font-roboto pt-5 md:pt-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={logoImg}
          alt="Logo"
          className="w-24 md:w-32 mr-2 hidden md:block"
        />
        <div className=" w-screen flex items-center justify-center">
        <div className="w-[80%] md:w-[50%] bg-rebeccapurple  flex flex-row flex-wrap justify-between rounded-3xl shadow-md border border-gray-400 bg-black p-2">
          <a
            href="#"
            className={`nav home flex-1 p-2 md:p-4 text-center text-white text-xs md:text-sm no-underline ${
              activeTab === "All" ? "border border-green-500 rounded-2xl" : ""
            }`}
            onClick={() => handleTabClick("All")}
          >
            <i className="fa fa-home mr-1.5 text-1.2rem md:text-1.5rem"></i>
            All
          </a>
          <a
            href="#"
            className={`nav home flex-1 p-2 md:p-4 text-center text-white text-xs md:text-sm no-underline ${
              activeTab === "Mobile" ? "border border-green-500 rounded-2xl" : ""
            }`}
            onClick={() => handleTabClick("Mobile")}
          >
            <i className="fa fa-home mr-1.5 text-1.2rem md:text-1.5rem"></i>
            Mobile
          </a>
          <a
            href="#"
            className={`nav home flex-1 p-2 md:p-4 text-center text-white text-xs md:text-sm no-underline ${
              activeTab === "Web" ? "border border-green-500 rounded-2xl" : ""
            }`}
            onClick={() => handleTabClick("Web")}
          >
            <i className="fa fa-home mr-1.5 text-1.2rem md:text-1.5rem"></i>
            Web
          </a>
          <a
            href="#"
            className={`nav home flex-1 p-2 md:p-4 text-center text-white text-xs md:text-sm no-underline ${
              activeTab === "UIUX" ? "border border-green-500 rounded-2xl" : ""
            }`}
            onClick={() => handleTabClick("UIUX")}
          >
            <i className="fa fa-home mr-1.5 text-1.2rem md:text-1.5rem"></i>
            UIUX
          </a>
        </div>
        </div>
        {/* Button */}
        <div className="w-[20%] md:w-[13%] bg-green-500 rounded-full px-2 md:px-4 mb-2 md:mb-4 flex items-center justify-center relative hidden md:block">
          <span className="text-xs md:text-lg text-white md:mr-2">
            Get In Touch
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
