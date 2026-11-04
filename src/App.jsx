import React from "react";
import { doctorData } from "./data/linksData";
import { LinkCard } from "./components/LinkCard";
import { LocationCard } from "./components/LocationCard";
import { BackgroundBubbles } from "./components/BackgroundBubbles";
import { Sparkles, Crown } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-between p-4 sm:p-6 relative overflow-hidden">
      {/* Fondo animado */}
      <BackgroundBubbles />

      {/* Luz ambiental azul cielo y blanco */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-blue-400/5 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-md z-10 mx-auto pt-14 sm:pt-16 pb-12 flex flex-col items-center text-center">
        {/* Logotipo Oficial con marco sutil en azul cielo */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
          <img
            src={doctorData.avatar}
            alt="Dental Office Logo"
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-sky-400/40 shadow-2xl bg-zinc-950 p-2"
          />
        </div>

        {/* Título de la Clínica */}
        <h1 className="text-2xl sm:text-3xl font-light tracking-[0.15em] text-white uppercase mb-1">
          {doctorData.name}
        </h1>
        <p className="text-xs tracking-widest text-sky-300 uppercase mb-3">
          {doctorData.subtitle}
        </p>

        {/* Especialidad */}
        <p className="text-sm sm:text-base text-sky-200 font-medium mb-5 flex items-center justify-center gap-1.5 tracking-wide">
          <Sparkles size={16} className="text-sky-400" /> {doctorData.specialty}
        </p>

        {/* Insignia de Estado Exclusiva */}
        <div className="inline-flex items-center space-x-1.5 bg-zinc-900/90 border border-sky-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 mb-6 shadow-inner backdrop-blur-md">
          <Crown size={14} className="text-sky-400" />
          <span>{doctorData.status}</span>
        </div>

        {/* Tarjeta Interactiva de Ubicación */}
        <LocationCard location={doctorData.location} />

        {/* Lista Dinámica de Enlaces */}
        <div className="w-full space-y-1 text-left">
          {doctorData.links.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>

        {/* Sello de Garantía Alta Gama */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-zinc-500 tracking-wider uppercase">
          <span className="w-8 h-[1px] bg-sky-500/30"></span>
          <span>Excelencia & Alta Estética Dental</span>
          <span className="w-8 h-[1px] bg-sky-500/30"></span>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 text-center text-xs text-zinc-600 pb-4">
        Diseño Exclusivo • Alta Gama ✨
      </footer>
    </main>
  );
}
