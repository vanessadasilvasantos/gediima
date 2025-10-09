import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-Gedima.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#145745] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🔹 Logo e identidade */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={Logo}
            alt="Logo GEDIIMA"
            className="h-16 w-auto bg-white rounded-xl p-2 mb-4 shadow-md"
          />
          <p className="text-sm text-gray-200 max-w-[220px] leading-relaxed">
            GEDIIMA — Grupo de Estudos das Doenças Inflamatórias Intestinais do
            Maranhão.
          </p>
        </div>

        {/* 🔹 Redes sociais */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h6 className="font-semibold mb-3 text-lg">Local do evento</h6>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-300 mt-2">
              ITC – SÃO LUÍS -MA
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Rua Carutapera nº 5 – Jardim Renascença 
            </p>
            <p className="text-sm text-gray-300 mt-2">
              CEP: 65075-670
            </p>
          </div>
        </div>

        {/* 🔹 Contatos */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h6 className="font-semibold mb-3 text-lg">Contatos</h6>
          <div className="flex flex-col gap-1 text-gray-100">
            <a
              href="tel:+5598988229693"
              className="hover:text-[#ddd] transition-colors duration-200"
            >
              (98) 98822-9693
            </a>
            <p className="text-sm text-gray-300 mb-2">
              Raphaela Dias
            </p>
            <a
              href="mailto:raphaela@rota098.com.br"
              className="hover:text-[#ddd] transition-colors duration-200"
            >
              raphaela@rota098.com.br
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Linha inferior */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} GEDIIMA — Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
