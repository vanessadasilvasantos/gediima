import React from "react";
import TeamMember from "../components/TeamMember";

import Alexandre from "../assets/diretoria/alexandre.jpeg"
import Brenda from "../assets/diretoria/brenda.jpeg"
import Sandro from "../assets/diretoria/sandro.jpeg"
import Francisco from "../assets/diretoria/francisco.jpeg"
import Cyrla from "../assets/diretoria/cyrla.jpeg"
import Valbert from "../assets/diretoria/valbert.jpeg"
import Eduardo from "../assets/diretoria/eduardo.jpeg"
import Jose from "../assets/diretoria/jose.jpeg"
import Ramon from "../assets/diretoria/ramon.jpeg"

const Board = () => {
    return(
        <div className="mx-60 max-md:mx-5 max-xl:mx-30 max-lg:mx-10">
            <h1 className="font-semibold text-4xl mb-20 max-sm:text-3xl">Conheça os nossos palestrantes</h1>
            <div className="flex flex-wrap gap-10 mb-20 max-sm:gap-16">
                <TeamMember img={Alexandre} name='Alexander Rolim - SP' yourFunction={`Titular da Sociedade Brasileira de Coloproctologia e Cirurgia do Aparelho Digestivo.
                Mestre em Cirurgia do Aparelho Digestivo pela FMUSP.
                Preceptor pelo programa de residência de Coloproctologia do Hospital Santa Marcelina de Itaquera desde 1998.
                Responsável pelo ambulatório e atendimento dos pacientes com doença inflamatória intestinal do Hospital Santa Marcelina desde 2001.
                Supervisor e fundador do programa de residência médica de cirurgia geral do Centro Universitário São Camilo / São Paulo – SP desde 2021.
                Principal investigador dos estudos de DII na Pesquisare Saúde – Santo André/SP, onde consegui me posicionar como um dos maiores recrutadores de IBD trials da América Latina, e atualmente sócio fundador da Solare Trials em São Paulo/SP.
                `}/>
                <TeamMember img={Brenda} name='Brenda Alexia De Lima Theodosio - AL' yourFunction='Nutricionista formada pela Universidade Federal de Alagoas. Mestra em Ciências Médicas pela Faculdade de Medicina da Universidade Federal de Alagoas. Especialista em Saúde do Adulto e do Idoso pelo Programa de Residência do Hospital Universitário Professor Alberto Antunes - UFAL. Assessora Técnica da Nestlé Health Science.'/>
                <TeamMember img={Sandro} name='Sandro da Costa Ferreira - SP' yourFunction='Mestre e Doutor em Ciências pela FMRP-USP. Membro Titular do GEDIIB e da FBG. Assistente Doutor da Divisão de Gastroenterologia do HCRP. Coordenador do Ambulatório de DIIs da Divisão de Gastroenterologia.'/>
                <TeamMember img={Francisco} name='Francisco Guilherme Cancela e Penna - MG' yourFunction='Doutor em medicina pela UFMG.
                Membro do ambulatório de intestino do HC/UFMG. 
                Coordenador e responsável técnico do serviço de transplante hepático do HC/UFMG.'/>
                <TeamMember img={Cyrla} name='Cyrla zaltman - RJ' yourFunction='Professora Associada de Gastroenterologia da UFRJ. Membro do Pancco, do GEDIIB, da SOBED e da FBG.'/>
                <TeamMember img={Valbert} name='Valbert Alves Batista - MA' yourFunction='Graduação pela Universidade Federal do Maranhão (UFMA). Residências em Clínica Médica e Gastroenterologia pela Universidade Estadual Paulista (UNESP). Residência em Endoscopia Digestiva pelo Hospital Universitário da UFMA (HUUFMA). Preceptor da Residência de Endoscopia Digestiva do HUUFMA. Membro da Organização Brasileira de Doença de Crohn e Colite (GEDIIB). Responsável pelo ambulatório estadual especializado em Doenças Inflamatórias Intestinais, em São Luís.'/>
                <TeamMember img={Eduardo} name='Eduardo Medeiros Portela de Araújo - MA' yourFunction='Radiologista com Fellow em Medicina Interna e em Imagem Oncológica (PET-CT e RM de Corpo Inteiro) na Beneficência Portuguesa de São Paulo. Doutor em Oncologia pelo AC Camargo Cancer Center. Supervisor da Imagem do Abdome da residência da radiologia do Hospital São Domingos/DASA. Coordenador da Residência em Radiologia e Diagnóstico por Imagem do Hospital São Domingos/DASA. Revisor da revista científica BRADcases do Colégio Brasileiro de Radiologia (CBR). Membro do Colégio Brasileiro de Radiologia (CBR). Membro da International Cancer Imaging Society (ICIS).
                Vice-Preseidente da Sociedade Maranhense de Radiologia.'/>
                <TeamMember img={Jose} name='Dr. José Miguel Luz Parente - PI' yourFunction='Médico gastroenterologista.
                Graduado e com residência médica pela Universidade Federal Fluminense.
                Mestre e doutor em Ciências Médicas pela Unicamp.
                Professor associado de Gastroenterologia da Universidade Federal do Piauí.
                Membro fundador e titular do GEDIIB.'/>
                <TeamMember img={Ramon} name='Ramon Mendes - BA' yourFunction='Membro titular da Sociedade Brasileira de Coloproctologia.
                Membro titular do Colégio Brasileiro de Cirurgiões.
                Mestre pela FMUSP.'/>
            </div>
        </div>
    )
}

export default Board