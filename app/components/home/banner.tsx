import React from "react";

const Banner = (props: { source: string }) => {
  return (
    <div className="flex items-center justify-center px-[10rem] mb-20">
      <img className="rounded-2xl" src={props.source} />
    </div>
  );
};

export default Banner;