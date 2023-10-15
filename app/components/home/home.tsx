import React from 'react'
import SubHeading from "./subheading";
import Banner from "./banner";
const HomeSection = () => {
  return (
    <div>
      <div className="font-nunito text-center">
        <h1 className="font-bold text-5xl py-[4rem]">
          Ascend Beyond Boundaries with AI
        </h1>
      </div>
      <SubHeading />
      <Banner source="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg" />
    </div>
  )
}

export default HomeSection