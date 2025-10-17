import React from "react";
import { useNavigate } from "react-router-dom";
import LogoEvento from '../assets/oioi.png'
import CircleGreen from '../assets/greenCircle.png'
import CircleBlue from '../assets/blueCircle.png'
import CircleGreenBlue from '../assets/green-blueCircle.png'
import HollowCircle from '../assets/hollowCircle.png'
import Button from "../components/button";
import User from '../assets/board.jpeg'
import { Plus } from "lucide-react";
import LogoPng from '../assets/Logo-Gedima.png'
import Takeada from '../assets/takeada.png'
import Rima from '../assets/Rima.jpeg'
import Odos from '../assets/Odos.png'
import Zilfarma from '../assets/Zilfarma.png'
import Clinica from '../assets/clinica.png'
import Anima from '../assets/Anima.jpeg'
import Abbvie from '../assets/abbvie.png'
import Gediib from '../assets/Gediib.jpeg'
import Cedro from '../assets/Cedro.png'
import Jhonson from '../assets/Jhonson.jpeg'
import Nestle from '../assets/Nestle.png'

const About = () => {
    const navigate = useNavigate();
    return(
        <div className="mx-60 pt-80 max-md:mx-5 max-sm:pt-4 max-md:pt-50 max-lg:pt-40 max-lg:mx-10 max-xl:pt-40 max-xl:mx-30">
            <img src={CircleGreen} className="max-sm:hidden h-25 absolute -left-[60px] top-[100px] max-sm:h-10 max-sm:left-[-20px]"/>
            <img src={CircleGreen} className=" h-5 absolute left-[150px] top-[550px] max-sm:h-3 max-sm:top-[100px] max-sm:left-[300px]"/>
            <img src={CircleGreenBlue} className="max-sm:hidden h-20 absolute -right-[40px] top-[200px] max-sm:top-[150px] max-sm:h-18"/>
            <img src={HollowCircle} className="max-sm:hidden h-25 absolute -right-[40px] top-[400px] max-sm:top-[350px]"/>
            <Plus className="absolute text-[#154d7b] left-100 top-50 max-sm:hidden" size={40}/>
            <Plus className="absolute text-[#154d7b] left-70 top-40 max-xl:left-[100px] max-lg:hidden" size={25}/>
            <Plus className="absolute text-[#154d7b] left-110 top-100 max-sm:hidden" size={40}/>
            <Plus className="absolute text-[#154d7b] left-110 top-166 max-xl:top-30 max-xl:left-190 max-lg:hidden" size={30}/>
            <Plus className="absolute text-[#154d7b] right-110 top-170 max-xl:top-130 max-lg:hidden" size={50}/>
            <Plus className="absolute text-[#154d7b] right-150 top-150 max-lg:hidden" size={30}/>
            <Plus className="absolute text-[#154d7b] right-150 top-90 max-xl:top-50 max-lg:hidden" size={30}/>
            <div className="relative ml-30 max-sm:ml-0">
                <img src={LogoEvento} className="h-70 absolute -left-[160px] top-[-190px] max-sm:static max-sm:h-25 max-sm:mx-auto max-md:left-[-120px] max-md:top-[-150px] max-md:h-50 max-lg:h-50 max-lg:left-[-110px] max-lg:top-[-130px] max-xl:h-60 max-xl:left-[-130px] max-xl:top-[-160px]"/>
                <h1 className="uppercase font-semibold text-[#154d7b] text-5xl max-sm:text-[1.37rem] max-md:text-3xl max-lg:text-4xl">I Simpósio multidisciplinar</h1>
                <h2 className="uppercase font-semibold text-[2.15rem] max-sm:text-[.98rem] text-[#cf4033] max-md:text-[1.34rem] max-lg:text-[1.61rem]">de doenças inflamatórias intestinais</h2>
                <h2 className="uppercase text-[#154d7b] text-xl mb-4 max-sm:text-sm">do Maranhão</h2>
                <Button text='inscrição' className='mt-4 max-sm:w-[100%]' onClick={() => navigate("/inscricao")}/>
                <img src={CircleBlue} className="h-5 absolute right-[60px] top-[200px] max-sm:top-[8px] max-sm:right-[310px] max-sm:h-2"/>
            </div>

            <div className="mt-50 pt-10 flex items-start pb-20 justify-center gap-10 max-sm:mt-10 max-sm:block">
                <img src={User} className="h-80 rounded-4xl border border-[#154d7b] p-2 max-sm:h-50 max-sm:mx-auto"/>
                    <p className="text-md mt-4 text-[#616161] text-justify max-sm:text-sm">É com grande satisfação que convidamos todos os colegas para participar do I Simpósio de Doenças Inflamatórias Intestinais do Maranhão, que acontecerá nos dias 7 e 8 de novembro de 2025, no ITC, na cidade de São Luís/MA. Esse evento está sendo cuidadosamente elaborado pelo Grupo de Estudos das Doenças Inflamatórias do Maranhão - GEDIIMA.
                    Neste evento reuniremos profissionais médicos, multiprofissionais, pesquisadores e estudantes para discutir avanços, experiências clínicas e estratégias no diagnóstico e tratamento das Doenças Inflamatórias Intestinais, promovendo a troca de conhecimentos e o fortalecimento da comunidade científica do nosso Estado. Contaremos com a presença de profissionais de renome nacional no manejo dessas patologias na nossa programação científica, que desde já agradeço pela disponibilidade.
                    Sua presença será de grande valor para enriquecer as discussões e contribuir para o sucesso do simpósio. Venha fazer parte desse evento. Aguardamos todos.</p>
            </div>
            <div className="my-30 max-xl:my-20">
                <h2 className="text-xl max-sm:text-lg font-semibold mb-5  mt-10">Realização:</h2>
                <img src={LogoPng} className="h-40 max-lg:h-30 max-sm:h-20"/>
                <h2 className="text-xl max-sm:text-lg font-semibold mb-5  mt-10">Patrocínio premium:</h2>
                <div className="flex items-center gap-2">
                    <img src={Jhonson} className="h-8 max-lg:h-8 max-sm:h-3"/>
                    <img src={Abbvie} className="h-12 max-lg:h-8 max-sm:h-5"/>
                    <img src={Takeada} className="h-26 max-lg:h-20 max-sm:h-10"/>
                </div>
                <h2 className="text-xl max-sm:text-lg font-semibold mb-5 mt-10 ">Patrocínio plus:</h2>
                <div className="flex items-center gap-2 flex-wrap">
                    <img src={Nestle} className="h-28 max-lg:h-20 max-sm:h-15"/>
                    <img src={Rima} className="h-20 mb-4 max-lg:h-15 max-sm:h-10"/>
                    <img src={Odos} className="h-30 max-lg:h-20 max-sm:h-15"/>
                    <img src={Zilfarma} className="h-30 max-lg:h-20 max-sm:h-15"/>
                    <img src={Clinica} className="h-20 max-lg:h-15 max-sm:h-12"/>
                    <img src={Anima} className="h-30 max-lg:h-20"/>
                    <img src={Cedro} className="h-40 max-lg:h-30"/>
                </div>
                <h2 className="text-xl max-sm:text-lg font-semibold mb-5  mt-10">Apoio:</h2>
                <img src={Gediib} className="h-16 max-lg:h-10 max-sm:h-8"/>
            </div>
        </div>
    )
}

export default About