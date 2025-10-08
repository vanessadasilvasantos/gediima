import React from "react";
import Button from "./button";

const Values = ({ text, value, showButton = true }) => {
  return (
    <div className="border border-[#154d7b] rounded-2xl p-6 text-center">
      <h3 className="text-xl font-bold text-[#575757] max-sm:text-lg">{text}</h3>
      <div className="flex items-end justify-center">
        <span className="block font-semibold text-md uppercase mt-1 text-[#154d7b]">
          R$
        </span>
        <span className="block font-semibold text-4xl uppercase mt-1 text-[#154d7b] max-sm:text-2xl">
          {value}
        </span>
      </div>

    </div>
  );
};

export default Values;
