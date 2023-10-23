import React from "react";

const AboutHeading = () => {
  return (

    <div id="about" className=" lg:pt-[5rem] font-inter lg:flex lg:justify-between lg:items-center lg:mx-[5rem]">
      <h1 className="text-primary text-3xl font-bold md:text-start text-center md:text-4xl sm:text-center lg:text-5xl pt-[5rem] font-nunito bg-gradient-to-t from-stone-600 via-stone-400 to-stone-100 text-transparent bg-clip-text">
        Pushing Boundaries with Advanced AI Automation
      </h1>
      
      <p className=" lg:w-[38rem] lg:text-md pt-[2rem] text-center lg:text-start my-5 text-[#8F9BB7]">
        At Ascend AI, we believe in harnessing the power of artificial
        intelligence to drive innovation and efficiency. Empower your business
        with custom AI and automation solutions, designed to boost productivity
        by up to 70%. Embrace the digital transformation with us, and watch your
        business ascend to new heights.
      </p>
    </div>
  );
};

export default AboutHeading;
