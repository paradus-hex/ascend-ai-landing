import React from "react";

const SecondaryButton = (props: { text: string }) => {
  return (
    <button className="bg-[#282D45] opacity-50 hover:opacity-100 mx-[1rem] text-sm py-2 px-8 rounded-full">
      {props.text}
    </button>
    
  );
};

export default SecondaryButton;
