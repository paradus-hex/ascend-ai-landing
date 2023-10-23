import React from "react";
import Card from "./card";
import data from "./dataItem"

const Features = () => {
  return (
    <div className="">
      <div className="bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#7214FF] opacity-30 blur-[80px] -z-0"></div>
      <div id="features" className="font-nunito text-center">
        <h1 className="font-bold text-5xl md:text-6xl -mt-[5rem] pt-[12rem] pb-[6rem] bg-gradient-to-t from-stone-950 via-stone-200 to-stone-100 inline-block text-transparent bg-clip-text">
          Creating a Digital Ecosystem Tailored to Your Needs
        </h1>
      </div>
      <div>
        <Card feature={[...data]} />
      </div>
    </div>
  );
};

export default Features;
