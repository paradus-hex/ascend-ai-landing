import React from "react";

const ToggleTab = () => {
  return (
    <div className="flex justify-center mt-32 font-nunito text-3xl">
      <div className="flex justify-between items-center rounded-full w-[60rem] bg-[#151934] h-[5.5625rem] px-16">
        <h3 className="bg-[#7214ffe2] w-[16rem] h-[4rem] flex justify-center items-center rounded-full">#1 Discovery</h3>
        <h3 className="bg-[#7214ffe2] w-[16rem] h-[4rem] flex justify-center items-center rounded-full">#2 Design</h3>
        <h3 className="bg-[#7214ffe2] w-[16rem] h-[4rem] flex justify-center items-center rounded-full">#3 Development</h3>
      </div>
    </div>
  );
};

export default ToggleTab;
