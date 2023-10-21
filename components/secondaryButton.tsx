import React from "react";

const SecondaryButton = (props: { text: string }) => {
  return (
    <button className="bg-[#282D45] hover:bg-[#202437] mx-[1rem] text-sm md:text-m py-2 px-8 rounded-full">
      {props.text}
    </button>
    
  );
};

export default SecondaryButton;