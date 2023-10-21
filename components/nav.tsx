"use client";
import React, { useState } from "react";
import Button from "./button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center font-nunito mt-[2rem] mr-[15rem] ml-[15rem]">
      <div className="font-extrabold text-3xl  tracking-[0.375rem] max-w-[1250px]">
        Ascend.Ai
      </div>
      <div className="hidden md:flex">
        <ul className="flex text-lg">
          <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer">
            Home
          </li>
          <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer">
            About
          </li>
          <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer">
            Features
          </li>
          <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer">
            Contact
          </li>
        </ul>
        <div>
          <Button text={"Login"} />
        </div>
      </div>

      <div onClick={navHandler} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="bg-gray-900 h-full md:hidden">
          <div className="font-extrabold text-3xl  tracking-[0.375rem] m-4">
            Ascend.Ai
          </div>

          <ul className="p-4">
            <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer border-b border-gray-600">
              Home
            </li>
            <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer border-b border-gray-600">
              About
            </li>
            <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer border-b border-gray-600">
              Features
            </li>
            <li className="p-4 text-[#8F9BB7] hover:text-white cursor-pointer border-b border-gray-600">
              Contact
            </li>
          </ul>
          <div className="p-4">
            <Button text={"Login"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
