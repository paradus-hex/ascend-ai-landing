import React from "react";

const ToggleTab = () => {
  return (
    <div className="flex justify-center mt-32 font-nunito text-2xl">
      <div className="bg-gradient-to-br from-indigo-900/[0.09] via-violet-900/[0.1] to-purple-900/[0.3] flex justify-between items-center rounded-full w-[50rem] bg-[#151934] h-[5rem] px-8">
        <h3 className="hover:bg-[#7214ffe2] transition duration-700 cursor-default w-[15rem] h-[4rem] flex justify-center items-center rounded-full">
          #1 Discovery
        </h3>
        <h3 className="hover:bg-[#7214ffe2] transition duration-700 cursor-default w-[15rem] h-[4rem] flex justify-center items-center rounded-full">
          #2 Design
        </h3>
        <h3 className="hover:bg-[#7214ffe2] transition duration-700 cursor-default w-[15rem] h-[4rem] flex justify-center items-center rounded-full">
          #3 Development
        </h3>
      </div>
    </div>
  );
};

export default ToggleTab;
