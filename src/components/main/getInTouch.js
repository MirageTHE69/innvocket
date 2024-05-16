import React, { useState } from "react"
import apiService from "../../apiService" // Assuming this is the path to your API service

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await apiService.post("/contacts", formData)

      if (response.status === 201) {
        setFormSubmitted(true)
      } else {
        setError(
          "An error occurred while submitting the form. Please try again later."
        )
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setError(
        "An error occurred while submitting the form. Please try again later."
      )
    }
  }

  const closeModal = () => {
    setFormSubmitted(false)
    setFormData({ name: "", email: "", message: "" })
    setError("") // Clear any previous error messages
  }

  return (
    <div id="contact" className="w-full h-auto lg:h-screen px-6 lg:px-16">
      <div className="w-full bg-black p-6 lg:p-10 text-white">
        <h2 className="text-4xl lg:text-5xl mb-6 lg:mb-16 text-center custom-heading">
          Get In Touch
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-6 text-lg lg:text-xl">
          <div className="lg:w-1/2">
            <span className="px-4 lg:px-10">
              Get in Touch Your Connection to Our Creative Universe
            </span>
            <p className="mt-6 lg:mt-8 px-4 lg:px-10 text-center lg:text-left">
              Step into our digital universe where connections thrive and
              visions come alive. We're not just code and pixels; we're creators
              and collaborators. Whether it's ideas, partnerships, or a friendly
              hello, we are here, ears and keyboards at the ready.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <input
              id="name"
              type="text"
              className="w-full h-10 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              id="email"
              type="email"
              className="w-full h-10 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="example@gmail.com"
              value={formData.email}
              pattern="[a-zA-Z0-9._%+-]+@gmail.com"
              onChange={handleChange}
              title="Please enter a valid Gmail address"
              required
            />

        

            <textarea
              id="message"
              className="w-full h-32 p-4 lg:p-5 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              onClick={handleSubmit}
              className="w-full h-12 mt-8 lg:mt-12 bg-gradient-to-r from-green-700 via-green-500 to-green-600 rounded-lg backdrop-blur-2xl"
            >
              Submit
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl mb-4">Form Submitted Successfully!</p>
            <button
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GetInTouch
