import React from "react";
import Image from 'next/legacy/image'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"
const CaseCard = () => {
  return (
    <div className="flex justify-center items-center md:mx-0 mx-10">
      <div className="flex flex-col-reverse justify-end items-center md:flex md:flex-row md:justify-between md:items-center bg-gradient-to-r from-purple-900/[0.3] via-violet-900/[0.3] via-80% to-indigo-900/[0.1] text-sm w-[30rem] h-[40rem] md:w-[55.0625rem] md:h-[33.125rem] mt-14 md:py-16 md:px-16 py-5 rounded-3xl">
        <div className="px-6 md:px-0 md:mt-0 mt-7">
          <h4 className="font-nunito text-center md:text-left text-lg md:text-3xl font-bold md:pb-10 pb-3 transition duration-700  ">
            Case Study- 1
          </h4>
          <p className="text-m md:text-left text-center md:text-xl md:w-[20rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            sapiente quasi laudantium unde a, at consectetur atque corporis
            recusandae commodi perspiciatis nisi nulla repudiandae velit?
          </p>
        </div>
        <div className="text-sm w-[17rem] h-[20rem] bg-gradient-to-l from-indigo-300/[0.3] to-purple-300/[0.3] md:w-[20.0625rem] md:h-[25.125rem]  md:p-10 p-5  rounded-3xl">
          <div className="flex justify-center items-center">
            <Image src="/human.png" alt="Human" width={115} height={115} />
          </div>
          <div className="text-center border-2 border-gray-200 mt-[2rem] rounded-3xl p-5">
            <h4 className="font-nunito text-m md:text-xl font-bold  transition duration-700  ">
              Company-1
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              tempora.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CaseCard;
