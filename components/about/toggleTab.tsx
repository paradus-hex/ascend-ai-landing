"use client";

import { motion } from "framer-motion";

const ToggleTab = (props: any) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{opacity:1}}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6 }}>
      <div className="flex justify-center mt-32 font-nunito md:text-2xl text-xs">
        <div className="bg-gradient-to-br from-indigo-900/[0.09] via-violet-900/[0.1] to-purple-900/[0.3] flex justify-between items-center rounded-full w-[23rem] md:w-[50rem] bg-[#151934] h-[3rem] md:h-[5rem] px-8">
          {props.aboutLists.map((aboutList: string, i: number) => (
            <h3
              key={i}
              onClick={() => props.setSelected(i)}
              className={`${
                props.Selected == i ? "bg-[#7214ffe2]" : ""
              } transition duration-700 cursor-default w-[13rem] md:w-[15rem] h-[2rem] md:h-[4rem] flex justify-center items-center rounded-full`}
            >
              {aboutList}
            </h3>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ToggleTab;
