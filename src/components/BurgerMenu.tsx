import React, { useState } from "react";
import ScrollButton from "./ScrollButton";

export const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex lg:hidden">
      <button className="flex flex-col space-y-1" onClick={() => setShowMenu((prev) => !prev)}>
        <div className="w-16 h-2 bg-black rounded-full"></div>
        <div className="w-16 h-2 bg-black rounded-full"></div>
        <div className="w-16 h-2 bg-black rounded-full"></div>
      </button>
      {showMenu && (
        <div className="flex items-center gap-8 border-2 bg-white py-8 border-b-black w-[50%] h-fit flex-col absolute mt-10 right-0">
          <ScrollButton componentId="objectives" name="Objetivos" />
          <ScrollButton componentId="divisions" name="Divisiones" />
        </div>
      )}
    </div>
  );
};
