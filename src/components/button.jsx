import React from "react";

const Button = ({text, onClick, className}) => {
    return(
        <button onClick={onClick} className={`
        relative inline-flex items-center justify-center px-6 h-8 overflow-hidden
        font-medium text-[#175644] border border-[#175644]
        hover:border-transparent rounded-full cursor-pointer group
        transition-all duration-300 ease-out capitalize
        ${className} /* 👉 permite classes externas */
      `} >
            <span className="absolute inset-0 bg-[#175644] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded"></span>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {text}
            </span>
        </button>
    )
}

export default Button