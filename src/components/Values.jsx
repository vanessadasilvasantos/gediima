import React from "react";
import Button from "./button";

const Values = ({ text, value, showButton = true }) => {
  return (
    <div className="border border-[#145745] rounded-3xl p-8 text-center bg-white max-w-xs">
      <h3 className="text-xl font-bold text-gray-700 max-sm:text-lg mb-4">{text}</h3>

      <div className="flex items-baseline justify-center gap-1">
        <span className="text-lg font-semibold text-[#145745]">R$</span>
        <span className="text-3xl font-extrabold text-[#145745] max-sm:text-2xl">{value}</span>
      </div>
    </div>
  );
};

export default Values;
