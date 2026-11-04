import React from "react";
import { MapPin, Navigation } from "lucide-react";

export const LocationCard = ({ location }) => {
  return (
    <a
      href={location.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full group bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-sky-400/50 p-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-between mb-4 backdrop-blur-md text-left"
    >
      <div className="flex items-center space-x-3.5">
        <div className="p-3 rounded-xl bg-zinc-800 text-sky-400 group-hover:scale-110 transition-transform">
          <MapPin size={22} />
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-0.5">
            Ubicación Consultorio
          </h4>
          <p className="text-sm font-medium text-zinc-200">{location.text}</p>
          <p className="text-xs text-zinc-400 mt-0.5">
            {location.city} 📍 Ver en Google Maps
          </p>
        </div>
      </div>
      <div className="p-2 rounded-full bg-zinc-800/80 text-sky-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        <Navigation size={18} />
      </div>
    </a>
  );
};
