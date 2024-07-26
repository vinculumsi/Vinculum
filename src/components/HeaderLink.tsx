// components/ScrollButton.jsx
import React from 'react';

const ScrollButton = ({ id, ...props }) => {
  const handleClick = () => {
    const objectives = document.getElementById(id);
    objectives?.scrollIntoView();
  };

  return (
    <button 
      {...props} 
      className="text-orange-20 text-3xl lg:text-base font-kantumruy font-bold" 
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default ScrollButton;
