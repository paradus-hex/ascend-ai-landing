import React from "react";
import SecondaryButton from "../secondaryButton";

const Footer = () => {
  return (
    <footer className="mt-[15rem] block md:flex md:justify-between md:items-center bg-[#151934] p-10">
      <div className="">
        <p className="text-xs  md:text-lg text-center lg:text-left">
          All rights reserved Ascend AI © 2023
        </p>
      </div>
      <div className=" md:flex md:items-center text-center md:pt-0 pt-[2rem]">
        <SecondaryButton text={"Terms"} />
        <SecondaryButton text={"Privacy"} />
      </div>
    </footer>
  );
};
export default Footer;
