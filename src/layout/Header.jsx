import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        // Усилена тень для лучшей видимости
        <header className="sticky top-0 z-50 bg-white shadow-xl">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                
                {/* Логотип */}
                <div className="text-3xl font-extrabold text-gray-900 tracking-tighter">
                    <Link to="/" className="transition-colors uppercase">
                        ИРИС<span className="text-iris-orange text-4xl">.</span>
                    </Link>
                </div>

                {/* Навигация */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link 
                        to="/" 
                        // Добавлен стильный эффект подчеркивания при наведении
                        className="text-gray-700 hover:text-iris-orange font-medium transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-iris-orange after:transition-all after:duration-300"
                    >
                        Главная
                    </Link>
                    <Link 
                        to="/catalog" 
                        className="text-gray-700 hover:text-iris-orange font-medium transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-iris-orange after:transition-all after:duration-300"
                    >
                        Каталог
                    </Link>
                    <Link 
                        to="/services" 
                        className="text-gray-700 hover:text-iris-orange font-medium transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-iris-orange after:transition-all after:duration-300"
                    >
                        Услуги
                    </Link>
                    <Link 
                        to="/projects" 
                        className="text-gray-700 hover:text-iris-orange font-medium transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-iris-orange after:transition-all after:duration-300"
                    >
                        Проекты
                    </Link>
                    <Link 
                        to="/about" 
                        className="text-gray-700 hover:text-iris-orange font-medium transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-iris-orange after:transition-all after:duration-300"
                    >
                        О компании
                    </Link>
                </nav>

                {/* Контакты и CTA */}
                <div className="flex items-center space-x-4">
                    {/* Сделал шрифт меньше, чтобы лучше умещалось на десктопе */}
                    <p  className="text-gray-900 font-semibold flex items-center hover:text-iris-orange transition-colors  lg:flex text-sm">
                       
                        +7 (495) 000-00-00
                    </p>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
