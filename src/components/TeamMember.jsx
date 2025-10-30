import React from "react";

const TeamMember = ({img, name, yourFunction}) => {
    return(
        <div className="text-center flex max-sm:flex-col max-sm:items-center max-sm:gap-4">
            <img src={img} className="h-60 w-50 object-cover flex-shrink-0 rounded-md max-sm:h-50 max-sm:w-40"/>
            <div className="flex flex-col ml-4 items-start">
                <p className="font-semibold mb-4">{name}</p>
                <span className="text-justify text-sm max-sm:text-xs">{yourFunction}</span>
            </div>
        </div>
    )
}

export default TeamMember