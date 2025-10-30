import React from "react";
import Button from "../components/button";

const Schedule = () => {
    const PDF_URL = "/Programacao_simposio.pdf"

    const downloadProgramacao = () => {
        handleDownload(PDF_URL, 'Programacao_simposio.pdf');
    };

    return(
        <div className="mx-60 max-md:mx-5 max-xl:mx-30 max-lg:mx-10">
            <div className="flex items-center mb-16 justify-between max-sm:block max-sm:mb-8">
                <h1 className="font-semibold text-4xl max-sm:mb-6">Programação</h1>
                <Button text="Baixar programação" className="max-sm:w-[100%]" onClick={downloadProgramacao}/>
            </div>
            <div>
                <h2 className="text-xl font-bold text-[#145745] after:block after:w-[100%] after:h-[.01rem] after:rounded after:bg-[#145745] block mb-10">07 de novembro - Sexta Feira</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">19:00</span>
                    <p>Credenciamento</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">19:30 - 19:40</span>
                    <p>Abertura – Dra. Lícia Rodrigues - MA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">19:40 - 20:10</span>
                    <p className="font-semibold">Conferência:  Perspectivas atuais e futuras das DIIs: do diagnóstico ao tratamento - Dr. José Miguel Luz Parente - PI</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">20:10 - 21:30</span>
                    <p>Simpósio Johnson & Johnson</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">21:30 - 22:30</span>
                    <p>Coquetel de Abertura</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold text-[#145745] after:block after:w-[100%] after:h-[.01rem] after:rounded after:bg-[#145745] block mb-10">08 de novembro - Sábado</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">8:00</span>
                    <p>Boas Vindas – Dr. Flávio Roberto - MA </p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">8:10 – 9:35</span>
                    <div>
                        <div>
                            <p>Mesa redonda – Multidisciplinaridades na condução das DII</p>
                            <p className="text-xs font-semibold mt-1">Presidente: Aida Araújo</p>
                            <p className="text-xs font-semibold mt-1">Debatedores: Dra. Claúdia Nunes - MA e Dra. Lívia Arraes - MA</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">8:10 - 8:30</span>
                    <p>Doença Inflamatória Intestinal e Gestação:  Dra Cyrla Zaltman - RJ</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">8:30 - 8:50</span>
                    <p>Terapia nutricional na DII e em pacientes graves</p>
                    <p className="text-xs font-semibold mt-1">Dra. Brenda Alexia de Lima Theodosio - AL</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">8:50 - 9:10</span>
                    <p>As armadilhas das colites induzidas por drogas – Dr. Helio Rzetelna - RJ</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">9:10 - 9:20</span>
                    <p>Doença inflamatória na pediatria – desafios e inovações: Dra Vera Sdepanian - SP</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">9:20 - 9:35</span>
                    <p>Discussão</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">9:40 - 10:40</span>
                    <p className="font-semibold">Simpósio Abbvie </p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">10:40 – 12:15</span>
                    <div>
                        <p>Mesa redonda - Desafios no diagnóstico</p>
                        <p className="text-xs font-semibold mt-1">Presidente: Dra. Viviane Castelo Branco Ramos Rodrigues - MA</p>
                        <p className="text-xs font-semibold mt-1">Debatedores: Dra. Thais Medeiros – MA e Dra. Maura Tarciany Coutinho Cajazeiras de Oliveira - MA</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">10:40 a 11:00</span>
                    <p>Diagnóstico das DIIs: usando com sabedoria os exames laboratoriais – Dr. Francisco Guilherme Cancela e Pena - MG</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">11:00 a 11:20</span>
                    <p>Endoscopia na prática clínica das DII: ferramenta de ouro para o diagnóstico e tratamento – Dr. Tiago Vieira</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">11:20 a 11:40</span>
                    <p>Imagem no diagnóstico e no seguimento dos pacientes com DII – Dr. Eduardo Medeiros - MA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">11:40 a 12:00</span>
                    <p>Desvendando o papel da patologia no diagnóstico e acompanhamento das DIIs – Dr. Guilherme A. Medeiros - MA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">12:00 - 12:15</span>
                    <p>Discussão</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">12:15 - 12:30</span>
                    <p>Visita aos stands</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">12:30 - 13:30</span>
                    <p className="font-semibold">Simpósio Takeda</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">13:30</span>
                    <div>
                        <p>Mesa redonda:  Tratamento</p>
                        <p className="text-xs font-semibold mt-1">Presidente:  Dr. Diogo Fontes - MA</p>
                        <p className="text-xs font-semibold">Debatedores: Dra. Rosilma Barreto - MA e Dr. Kilson Martins Coelho - MA</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">13:30 - 13:50</span>
                    <p>Terapia convencional na DII: ainda tem espaço? -  Dr. Valbert Alves Batista - MA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">13:50 - 14:10</span>
                    <p>Biológico quando iniciar e como escolher - Dr. Alexander Rolim - SP</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">14:10 - 14:30</span>
                    <p>O cirurgião na linha de frente do tratamento - o que há de novo na doença perianal – Dr. Ramon Mendes - BA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">14:30 - 14:50</span>
                    <p>Paciente com DII e displasia em biópsias do cólon - Como conduzir? – Dr. Ramon Mendes - BA</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">14:50 - 15:10</span>
                    <p>Colite aguda grave como conduzir – Dr. Sandro da Costa Ferreira - SP</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">15:10 - 15:30</span>
                    <p>Discussão</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20">
                    <span className="font-bold">15:30</span>
                    <p>Encerramento</p>
                </div>
                <div className="w-full h-[1px] bg-[#ddd] my-4"></div>
            </div>
        </div>
    )
}

const handleDownload = (pdfUrl, fileName = 'documento.pdf') => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', fileName); 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default Schedule