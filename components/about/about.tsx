"use client"
import React from 'react'
import AboutHeading from './aboutHeading'
import ToggleTab from './toggleTab'
import Description from './description'
import { useState } from "react";

const About = () => {

  const aboutLists: string[] = ["#1 Discovery", "#2 Design", "#3 Development"]

  const [Selected, setSelected] = useState(0)

  const clickedTab = (index: number) =>{
    setSelected(index)
  }

  return (
    <div className='' >
        <AboutHeading/>
        <ToggleTab aboutLists={[...aboutLists]} Selected={Selected} setSelected={setSelected} clickedTab={clickedTab}/>
        <Description aboutLists={[...aboutLists]} Selected={Selected}/>
    </div>
  )
}

export default About