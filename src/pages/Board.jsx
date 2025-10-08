import React from "react";
import TeamMember from "../components/TeamMember";

const Board = () => {
    return(
        <div className="mx-60 max-md:mx-5 max-xl:mx-30 max-lg:mx-10">
            <h1 className="font-semibold text-4xl mb-20 max-sm:mb-10">Conheça a nossa equipe</h1>
            <div className="flex flex-wrap gap-6 mb-20 max-sm:grid max-sm:grid-cols-2">
                <TeamMember img='https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80' name='DR. Ricardo' yourFunction='Advogado'/>
                <TeamMember img='https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80' name='DR. Ricardo' yourFunction='Advogado'/>
                <TeamMember img='https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80' name='DR. Ricardo' yourFunction='Advogado'/>
                <TeamMember img='https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80' name='DR. Ricardo' yourFunction='Advogado'/>
            </div>
        </div>
    )
}

export default Board