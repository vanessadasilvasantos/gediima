import React from "react";
import Button from "../components/button";
import Values from "../components/Values";
import { useNavigate } from "react-router-dom";

const Enrollment = () => {
    const navigate = useNavigate()

    return(
        <div className="mx-60 max-xl:mx-30 max-lg:mx-10 max-md:mx-5">
            <div className="mb-16 flex justify-between items-center max-sm:block">
                <h1 className="font-semibold text-4xl">Tabela de valores</h1>
                <Button text='Garanta sua vaga' className='max-sm:w-[100%] max-sm:mt-8' onClick={() => window.open('https://forms.gle/AgRwCpNXgkdgoFtHA', '_blank')}/>
            </div>
            <div>
                <h2 className="text-xl sm:text-lg mb-5 text-[#333] font-semibold">Inscrição até dia 15/10</h2>
                <div className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 max-sm:grid-cols-2 ">
                    <Values text='Médicos' value='100,00'/>
                    <Values text='Residentes' value='80,00'/>
                    <Values text='Estudantes' value='60,00'/>
                    <Values text='Outros' value='60,00'/>
                </div>
                <h2 className="text-xl sm:text-lg mb-5 text-[#333] font-semibold mt-8">Inscrição do dia 15/10 a 04/11</h2>
                <div className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 max-sm:grid-cols-2 ">
                    <Values text='Médicos' value='150,00'/>
                    <Values text='Residentes' value='100,00'/>
                    <Values text='Estudantes' value='80,00'/>
                    <Values text='Outros' value='80,00'/>
                </div>
                <h2 className="text-xl sm:text-lg mb-5 text-[#333] font-semibold mt-8">Inscrição feitas no local</h2>
                <div className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-4 max-sm:grid-cols-2">
                    <Values showButton={false} text='Médicos' value='200,00'/>
                    <Values showButton={false} text='Residentes' value='150,00'/>
                    <Values showButton={false} text='Estudantes' value='100,00'/>
                    <Values showButton={false} text='Outros' value='100,00'/>
                </div>
            </div>
        </div>
    )
}

export default Enrollment