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
    <button className="text-orange-20 text-3xl lg:text-base font-kantumruy font-bold" onClick={handleClick}>
      {name}
    </button>
  );
};

export default ScrollButton;
