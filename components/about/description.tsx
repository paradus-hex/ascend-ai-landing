import React from "react";

const Description = (props: any) => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3] w-[30rem] h-[25rem] md:w-[45.0625rem] md:h-[23.125rem] mt-14 py-16 px-16 rounded-3xl">
        <h4 className="font-nunito text-m md:text-3xl font-bold pb-10 transition duration-700  ">
          Stage - {props.aboutLists[props.Selected]}
        </h4>
        <p className="text-m">
          The path to outstanding products is marked by a well-structured
          process. At WGMI Labs we set our scope early, aligning the vision,
          ideas, and timeframes. For businesses we take a deep dive into your
          existing workflows, processes, tools, and goals to spot areas ready
          for improvement. Based on this research we propose customized
          solutions that address your precise needs and specifications.
        </p>
      </div>
    </div>
  );
};

export default Description;
