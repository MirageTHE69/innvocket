import React, { useState, useEffect } from "react"

function Grid() {
  return (
    <div>
      <div class=" h-screen w-screen p-20 bg-[#090c10] text-blue-800 grid grid-cols-3 grid-rows-3 gap-3">
        <div class="bg-blue-100 rounded p-5">card 1</div>
        <div class="row-span-2 bg-blue-100 rounded p-5">card 2</div>
        <div class="bg-blue-100 rounded p-5">card 3</div>
        <div class="row-span-2 bg-blue-100 rounded p-5">card 4</div>
        <div class="row-span-2 bg-blue-100 rounded p-5">card 5</div>
        <div class="bg-blue-100 rounded p-5">card 6</div>
      </div>
    </div>
  )
}

export default Grid
