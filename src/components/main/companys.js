import React from "react"
import Logo1 from "../../images/logo1.png"
import Logo2 from "../../images/logo2.png"

const logos = [Logo1, Logo2, Logo1]

function Companys() {
  return (
    <div className="w-screen h-auto bg-image-section2 mt-10 mb-10 ">
      <div className="w-full h-full backdrop-blur-3xl">
        <span className="flex w-screen justify-center text-4xl mt-8 text-white pt-10 capitalize">
          Our clients
        </span>
        <div className="grid grid-cols-1 gap-6 bg-transparent p-4 mt-10 md:grid-cols-3">
          {logos.map((logo, index) => (
            <div className=" w-full flex items-center justify-center ">
              <div  
                key={index}
                className="rounded-xl     w-[60%] flex items-center justify-center  backdrop-blur-2xl"
              >
                <div className="p-4">
                  <img
                    className="rounded-md"
                    src={logo}
                    alt={`Card Image ${index + 1}`}
                    style={{ width: "100%", height: "auto", maxWidth: "150px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companys
