"use client";
import React from "react";
import Button from "../button";
import SecondaryButton from "../secondaryButton";
import { motion } from "framer-motion";

const SubHeading = () => {
  return (
    <div>
      <div className="font-inter text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-inter -mt-16 text-lg lg:px-[10rem] text-[#8F9BB7]">
            Elevate Your Business To Exceptional Performance and Growth With Our
            State-of-the-Art Artificial Intilligence and Automation Solutions
          </h2>
          <div className="content-center gap-4 py-[2rem]">
            <Button text={"Join"} />
            <SecondaryButton text={"Let's Talk"} />
          </div>
        </motion.div>
        <div className="fixed top-0 -z-10 h-full " />
        <div className="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#121f6b] opacity-50 blur-[80px] md:z-[-1] lg:z-[-1] z-[-5]" />
        <div className="absolute inset-0 -z-10 h-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_10%,#121f6b_180%)]"></div>
      </div>
    </div>
  );
};

export default SubHeading;
