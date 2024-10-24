import React from 'react'
import { useLanguage } from "../LanguageContext";
function Nostros({nombre, oficioEsp, oficioEng, linkedin, src}){
    const { isLanguageSpanish } = useLanguage();
    return(
        <div className="text-center mt-20">
        <img src={src} alt="Ricardo" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
        <h2 className="text-white text-xl font-bold">{nombre}</h2>
        <p className="text-gray-300">{isLanguageSpanish? oficioEsp : oficioEng}</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          LinkedIn
        </a>
    </div>
    )
}
export default Nostros;