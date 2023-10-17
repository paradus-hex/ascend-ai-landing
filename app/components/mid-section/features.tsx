import React from "react";
import Card from "./card";

interface DataItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const data: DataItem[] = [
  {
    id: 1,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },
  {
    id: 2,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 3,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 4,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 5,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 6,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 7,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 8,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },

  {
    id: 9,
    icon: "",
    title: "User information",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis",
  },
];

const Features = () => {
  return (
    <div>
      <div className="font-nunito text-center">
        <h1 className="font-bold text-6xl pt-[18rem] pb-[6rem] bg-gradient-to-t from-stone-950 via-stone-200 to-stone-100 inline-block text-transparent bg-clip-text">
          Creating a Digital Ecosystem Tailored to Your Needs
        </h1>
      </div>
      <div>
        <Card feature={[...data]} />
      </div>
    </div>
  );
};

export default Features;
