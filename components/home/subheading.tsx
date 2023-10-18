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
      </div>
    </div>
  );
};

export default SubHeading;