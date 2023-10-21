import React from "react";

const SecondaryButton = (props: { text: string }) => {
  return (
    <button className="bg-[#282D45] opacity-75 hover:opacity-100 mx-[1rem] text-m py-2 px-8 rounded-full">
      {props.text}
    </button>
    
  );
};

export default SecondaryButton;