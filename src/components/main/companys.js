import React from "react"
import Logo1 from "../../images/logo1.png"
import Logo2 from "../../images/logo2.png"

const logos = [
  // Add your logo URLs or images here
  // Example: 'logo1.png', 'logo2.png', ...
  Logo1,Logo2,Logo1
]

function Companys() {
  return (
    <div className="w-screen h-auto bg-image-section2">
      <div className="w-full h-full backdrop-blur-3xl">
        <span className="flex w-screen justify-center text-4xl text-white pt-10 capitalize">
          Our clients
        </span>
        <div className="grid grid-cols-1 gap-6 bg-transparent p-10 md:grid-cols-3">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-xl border flex items-center justify-center border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
            >
              <div className="p-10">
                <img
                  className="rounded-md"
                  src={logo}
                  alt={`Card Image ${index + 1}`}
                  style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companys
