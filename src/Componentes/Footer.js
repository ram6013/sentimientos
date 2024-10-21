import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext'; 

function Footer() {
    const { isLanguageSpanish, toggleLanguageToSpanish, toggleLanguageToEnglish } = useLanguage();
    const navigate = useNavigate();

    const handleNavigate = (destiny) => {
        navigate(`/${destiny}`);
    };
    
    return (
            <footer className="flex flex-row justify-around mt-10">
                <div className="flex">
                    <p>&copy; {new Date().getFullYear()} {isLanguageSpanish? "Moodly. Todos los derechos reservados." : "Moodly. All rights reserved."}</p>
                </div>
                <div className="flex ">
                    <button onClick={() => handleNavigate("")} className="text-gray-400 text-xs ml-2 transition-transform duration-200 hover:scale-110 font-mochiy ">
                        {isLanguageSpanish? "Política de Privacidad" : "Privacy Policy"}
                    </button>
                    <button onClick={() => handleNavigate("")} className="text-gray-400 text-xs ml-2 transition-transform duration-200 hover:scale-110 font-mochiy">
                        {isLanguageSpanish? "Politica de Cookies" : "Cookie Policy"}
                    </button>
                </div>
            </footer>
    );
}
    export default Footer;
