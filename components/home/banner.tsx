"use client";
import React from "react";
import { motion } from "framer-motion";
const Banner = (props: { source: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex items-center justify-center">
        <img className="rounded-2xl" src={props.source} />
      </div>
    </motion.div>
  );
};

export default Banner;
