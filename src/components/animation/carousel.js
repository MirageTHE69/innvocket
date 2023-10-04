import React, { useRef, useEffect } from "react"

const Carousel = ({ items }) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    let animation = null

    const scroll = () => {
      if (container.scrollLeft + container.offsetWidth >= content.offsetWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const startScroll = () => {
      animation = requestAnimationFrame(startScroll)
      scroll()
    }

    const stopScroll = () => {
      cancelAnimationFrame(animation)
    }

    container.addEventListener("mouseenter", stopScroll)
    container.addEventListener("mouseleave", startScroll)

    startScroll()

    return () => {
      container.removeEventListener("mouseenter", stopScroll)
      container.removeEventListener("mouseleave", startScroll)
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden w-full bg-gray-200 py-4">
      <div ref={contentRef} className="flex space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-white shadow-md flex items-center justify-center"
          >
            {/* Your content, e.g., logo or small picture */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
