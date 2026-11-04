import React from "react";
import { Globe, Mail, ExternalLink } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.02-.84-.42-1.59-1-2.18-1.7v7.66c.02 3.07-1.69 6.01-4.48 7.35-2.79 1.34-6.19.78-8.41-1.39-2.22-2.17-2.88-5.59-1.59-8.44 1.29-2.85 4.3-4.66 7.42-4.3v4.13c-1.28-.18-2.58.45-3.13 1.61-.55 1.16-.27 2.62.7 3.45.97.83 2.37.95 3.48.29 1.11-.66 1.76-1.9 1.68-3.18V.02z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const iconMap = {
  whatsapp: WhatsAppIcon,
  globe: Globe,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
  mail: Mail,
};

export const LinkCard = ({ title, subtitle, url, icon, primary }) => {
  const IconComponent = iconMap[icon] || ExternalLink;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between p-4 mb-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${
        primary
          ? "bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-400 text-zinc-950 font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 border border-white/60"
          : "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 hover:border-sky-400/50 shadow-xl backdrop-blur-md"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${
            primary
              ? "bg-zinc-950/10 text-zinc-950"
              : "bg-zinc-800 text-sky-400"
          }`}
        >
          <IconComponent />
        </div>
        <div>
          <h3
            className={`font-semibold text-base sm:text-lg tracking-wide ${primary ? "text-zinc-950" : "text-zinc-100"}`}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className={`text-xs sm:text-sm ${primary ? "text-zinc-900 font-medium" : "text-zinc-400"}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div
        className={`p-2 rounded-full opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${
          primary ? "text-zinc-950" : "text-sky-400"
        }`}
      >
        <ExternalLink size={18} />
      </div>
    </a>
  );
};
