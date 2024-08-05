import React, { useState } from "react";
import ScrollButton from "./ScrollButton";

export const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex lg:hidden mr-12 relative z-50">
      <button className="flex flex-col space-y-1" onClick={() => setShowMenu((prev) => !prev)}>
        <div className="w-16 h-2 bg-black rounded-full"></div>
        <div className="w-16 h-2 bg-black rounded-full"></div>
        <div className="w-16 h-2 bg-black rounded-full"></div>
      </button>
      <div
        className={`flex items-center gap-8 border-b-2 bg-white py-8 border-black w-[24rem] h-fit flex-col absolute mt-10 right-0 overflow-hidden transition-all duration-500 ease-in-out ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ScrollButton componentId="objectives" name="Objetivos" />
        <ScrollButton componentId="divisions" name="Divisiones" />
      </div>
    </div>
  );
};
