"use client";
import React from "react";
import Card from "./card";
import data from "./dataItem";
import { motion } from "framer-motion";


const Features = () => {
  return (
    <div className="pb-[7rem]">
        <div className="bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#7214FF] opacity-30 blur-[80px] -z-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6 }}
        >
        <div id="features" className="font-nunito text-center">
          <h1 className="font-bold text-5xl md:text-6xl lg:-mt-[5rem] lg:pt-[12rem] pb-[3rem] bg-gradient-to-t from-stone-950 via-stone-200 to-stone-100 inline-block text-transparent bg-clip-text">
            Creating a Digital Ecosystem Tailored to Your Needs
          </h1>
        </div>
    </motion.div>
        <div>
          <Card feature={[...data]} />
        </div>
      </div>
  );
};

export default Features;
