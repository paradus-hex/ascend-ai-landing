"use client"
import { motion } from "framer-motion";
import React from "react";

const AboutHeading = () => {
  return (

    <div id="about" className=" lg:pt-[5rem] font-inter lg:flex lg:justify-between lg:items-center lg:mx-[5rem]">
      <motion.div
      initial={{x: "var(--x-from)",opacity:"var(--opacity-from)"}}
      whileInView={
        {x: "var(--x-to)",
        opacity:"var(--opacity-to",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8}
        }
      }
      viewport={{  amount: 0.8 }}
      className="card-container lg:[--x-from:-10rem] lg:[--x-to:0rem] lg:[--opacity-from:100%] lg:[--opacity-to:100%] md:[--opacity-from:0%] md:[--opacity-to:100%] [--opacity-from:0%] [--opacity-to:100%]"
      >

      <h1 className="text-primary text-3xl font-bold  md:text-start text-center md:text-4xl sm:text-center lg:text-5xl pt-[2.5rem] font-nunito bg-gradient-to-t from-stone-600 via-stone-400 to-stone-100 text-transparent bg-clip-text">
        Pushing Boundaries with Advanced AI Automation
      </h1>
      </motion.div>
      <motion.div
      initial={{x: "var(--x-from)",opacity:"var(--opacity-from)"}}
      whileInView={
        {x: "var(--x-to)",
        opacity:"var(--opacity-to)",
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8}
          }
        }
        className=" lg:w-[38rem] lg:text-md pt-[2rem] text-center lg:text-start my-5 text-[#8F9BB7] lg:[--x-from:10rem] lg:[--x-to:0rem] lg:[--opacity-from:100%] lg:[--opacity-to:100%] md:[--opacity-from:0%] md:[--opacity-to:100%] [--opacity-from:0%] [--opacity-to:100%]"
      viewport={{ amount: 0.8 }}
      >

      <p>
        At Ascend AI, we believe in harnessing the power of artificial
        intelligence to drive innovation and efficiency. Empower your business
        with custom AI and automation solutions, designed to boost productivity
        by up to 70%. Embrace the digital transformation with us, and watch your
        business ascend to new heights.
      </p>
      </motion.div>
    </div>
  );
};

export default AboutHeading;
