import React from "react";

const Card = (props: any) => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto mt-14">
        <div className="flex flex-wrap justify-center gap-8">
          {props.feature.map((item: any) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3] w-[400px] h-[250px] p-4 rounded-lg flex-shrink-0 hover:border border-[#282D45]"
            >
              <img
                src={item.icon}
                alt="user-icon"
                className="w-12 h-12 inline-block mb-4 text-xs"
              />
              <h3 className="text-xl font-medium mt-2 text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#8F9BB7]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
