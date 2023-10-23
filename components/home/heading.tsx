'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Heading = () => {
  return (
    <div id='home' className="font-nunito text-center lg:pt-20 p-10">
      <motion.div initial={{ opacity: 0 }}
      whileInView={{opacity:1}}
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.2 }}>


        <h1 className="font-bold lg:text-6xl md:text-4xl text-2xl py-[4rem] bg-gradient-to-t from-stone-950 via-stone-200 to-stone-100 inline-block text-transparent bg-clip-text">
          Ascend Beyond Boundaries with AI
        </h1>
      </motion.div>
      </div>
  )
}

export default Heading