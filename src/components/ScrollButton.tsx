import React from "react";

type props = {
  componentId: string;
  name: string;
};

const ScrollButton = ({ componentId, name }: props) => {
  const handleClick = () => {
    const objectives = document.getElementById(componentId);
    if (objectives) {
      objectives.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${componentId}" not found`);
    }
  };

  return (
    <button
      className="text-orange-20 hover:text-black hover:border-black lg:px-8 text-4xl h-[120px] rounded-full lg:h-[40px] w-[90%] lg:w-fit lg:text-base font-kantumruy font-bold border-2 border-orange-20"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default ScrollButton;
