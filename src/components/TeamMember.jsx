import React from "react";

const TeamMember = ({img, name, yourFunction}) => {
    return(
        <div className="text-center flex flex-col ">
            <img src={img} className="h-40 object-contain"/>
            <p className="font-semibold">{name}</p>
            <span className="text-center">{yourFunction}</span>
        </div>
    )
}

export default TeamMember