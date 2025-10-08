import React from "react";
import Logo from "../assets/Logo-Gedima.jpg";
import { Wrench, Hammer, Construction } from "lucide-react";
import Development from '../assets/WebDevelopment.svg'

export default function Join() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff] text-center px-4">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo Gedima"
        className="h-20 w-auto mb-8 opacity-90 "
      />

      {/* Ícones animados */}
      <div className="flex items-center justify-center gap-4 mb-6 text-[#154d7b]">
        <img src={Development} width={200} />
      </div>

      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#154d7b] mb-3">
        Página em Desenvolvimento
      </h1>

      {/* Texto descritivo */}
      <p className="max-w-lg text-[#555] text-base md:text-lg leading-relaxed">
        Estamos trabalhando com muito carinho para concluir esta seção do site.
        Em breve você poderá acessar todos os recursos e informações aqui.
      </p>

      {/* Ilustração de progresso */}
      <div className="relative mt-10">
        <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-[#154d7b] animate-pulse"></div>
        </div>
        <p className="text-sm text-[#154d7b] mt-2 font-medium">
          Progresso: 50% concluído
        </p>
      </div>

      {/* Rodapé simpático */}
      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} GEDIIMA — Todos os direitos reservados.
      </p>
    </div>
  );
}
