import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap"

function Grid({ selectedTab }) {
  const cardData = {
    All: [
      {
        name: "card 1",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596653/Images/innvocket/1_kdiocj.png",
      },
      {
        name: "card 2",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596649/Images/innvocket/3_vtectv.png",
      },
      {
        name: "card 3",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596648/Images/innvocket/4_h23jlp.png",
      },
      {
        name: "card 4",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
      {
        name: "card 5",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
      {
        name: "card 6",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
    ],
    Mobile: [
      {
        name: "card 2",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
      {
        name: "card 3",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
    ],
    Web: [
      {
        name: "card 3",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
    ],
    UIUX: [
      {
        name: "card 4",
        imageURL:
          "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696596647/Images/innvocket/2_yyu2hw.png",
      },
    ],
  }

  const [items, setItems] = useState(cardData[selectedTab] || cardData.All)
  const gridRef = useRef(null)
  const positions = useRef({})

  useEffect(() => {
    const gridElement = gridRef.current

    // Store the initial positions of the items
    items.forEach(item => {
      const domNode = gridElement.querySelector(`[data-id="${item.name}"]`)
      if (domNode) {
        const rect = domNode.getBoundingClientRect()
        positions.current[item.name] = rect
      }
    })

    let selectedCards = []
    if (selectedTab === "All") {
      selectedCards = cardData.All
    } else {
      selectedCards = cardData[selectedTab] || []
      const remainingCards = cardData.All.filter(
        card =>
          !selectedCards.some(selectedCard => selectedCard.name === card.name)
      )
      selectedCards = [...selectedCards, ...remainingCards]
    }

    // Sort the selectedCards array
    selectedCards.sort((a, b) => {
      const aSpan = getSpanClass(a.name)
      const bSpan = getSpanClass(b.name)
      if (aSpan === "col-span-1" && bSpan !== "col-span-2") return -1
      if (bSpan === "col-span-2" && aSpan !== "col-span-1") return 1
      if (aSpan === "row-span-2" && bSpan !== "row-span-1") return -1
      if (bSpan === "row-span-2" && aSpan !== "row-span-1") return 1
      return 0
    })

    setItems(selectedCards)
  }, [selectedTab])

  useEffect(() => {
    const gridElement = gridRef.current

    // Animate the items to their new positions
    items.forEach(item => {
      const domNode = gridElement.querySelector(`[data-id="${item.name}"]`)
      if (domNode && positions.current[item.name]) {
        const initialPosition = positions.current[item.name]
        const finalPosition = domNode.getBoundingClientRect()

        const dx = initialPosition.left - finalPosition.left
        const dy = initialPosition.top - finalPosition.top

        gsap.fromTo(domNode, { x: dx, y: dy }, { x: 0, y: 0, duration: 0.5 })
      }
    })
  }, [items])

  const getSpanClass = name => {
    switch (name) {
      case "card 1":
        return "col-span-2"
      case "card 4":
        return "row-span-2"
      default:
        return ""
    }
  }
  return (
    <div className="h-screen w-screen py-10 flex items-center justify-center">
      {/* Adjust grid columns for mobile and larger screens */}
      <div
        className={`grid gap-3 w-full sm:w-3/4 lg:w-4/5 h-full px-4 ${
          selectedTab === "All"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
        ref={gridRef}
      >
        {items.map((item, index) => (
          <div
            key={item.name}
            data-id={item.name}
            className={`bg-gray-300 p-2 sm:p-4 rounded-xl ${getSpanClass(
              item.name
            )} relative`}
          >
            <img
              src={item.imageURL}
              alt={item.name}
              className="object-cover w-full h-full transition-transform duration-300 rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
