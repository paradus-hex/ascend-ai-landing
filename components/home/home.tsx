import React from 'react'
import SubHeading from "./subheading";
import Banner from "./banner";
import Heading from './heading';
const HomeSection = () => {
  return (
    <div className='z-10'>
      <Heading/>
      <SubHeading />
      <Banner source="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg" />
    </div>
  )
}

export default HomeSection