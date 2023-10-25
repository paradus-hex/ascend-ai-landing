import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Card = (props: any) => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto lg:mt-14 md:mt-10 -mt-[40rem] ">
        <motion.ul
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="flex flex-wrap justify-center gap-8 lg:pt-0 md:pt-0 pt-[40rem]"
        >
          {props.feature.map((item: any) => (
            <motion.li
              key={item.id}
              variants={{
                hidden: { y: 0, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="bg-gradient-to-b from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3] w-[350px] h-[250px] p-4 rounded-lg flex-shrink-0 hover:border border-[#282D45]"
            >
              <Image
                src={item.icon}
                width={500}
                height={500}
                alt="icon"
                className="w-12 h-12 inline-block mb-4 text-xs"
              />
              <h3 className="text-xl font-medium mt-2 text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#8F9BB7]">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Card;
