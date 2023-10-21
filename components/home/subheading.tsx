import React from "react";
import Button from "../button";
import SecondaryButton from "../secondaryButton";

const SubHeading = () => {
  return (
    <div>
      <div className="font Inter text-center">
        <h2 className="font-inter text-lg px-[10rem] text-[#8F9BB7]">
          Elevate Your Business To Exceptional Performance and Growth With Our
          State-of-the-Art Artificial Intilligence and Automation Solutions
        </h2>
        <div className="content-center gap-4 py-[2rem]">
          <Button text={"Join"} />
          <SecondaryButton text={"Let's Talk"} />
        </div>
        <div className="absolute top-0 -z-10 h-full w-full"/>
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#121f6b] opacity-50 blur-[80px]"/>
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_10%,#121f6b_180%)]"></div>
      </div>
    </div>
  );
};

export default SubHeading;