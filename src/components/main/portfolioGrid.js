import React from "react"

function Grid({ selectedTab }) {
  // Hardcoded card data
  const cardData = {
    All: ["card 1", "card 2", "card 3", "card 4", "card 5", "card 6"],
    Mobile: ["card 2", "card 3"],
    Web: ["card 3"],
    UIUX: ["card 4"],
  }

  // Get the cards based on the selected tab
  const selectedCards =
    selectedTab === "All" ? cardData.All : cardData[selectedTab] || []

  // Define a class to control the blur effect
  const blurClass = "blur-sm" // You can define the blur class in your CSS or Tailwind CSS

  // Separate the selected card from the rest
  const selectedCard = selectedCards.length > 0 ? selectedCards[0] : null
  const otherCards = cardData.All.filter(content => content !== selectedCard)

  // Reorder the cards so that the selected card comes first
  const orderedCards = selectedCard ? [selectedCard, ...otherCards] : otherCards

  return (
    <div>
      <div className="h-screen w-screen p-5 md:p-16 md:mt-5 text-white grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-3">
        {orderedCards.map((content, index) => (
          <div
            key={index}
            className={`bg-[#0d1117] rounded p-3 md:p-5 ${
              selectedCards.includes(content) ? "" : blurClass
            }`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
