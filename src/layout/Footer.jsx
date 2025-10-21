import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    // В React-проектах из одного файла часто определяют стили, 
    // чтобы имитировать корпоративный цвет, если он не настроен в Tailwind
    const irisOrange = 'hover:text-[#ff9900] transition-colors'; // Имитация corporate orange

    return (
        <footer className="bg-gray-900 text-white py-12 mt-20 rounded-t-xl shadow-inner shadow-gray-700">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
                    
                    {/* Информация о компании */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-extrabold mb-3 text-iris-orange tracking-wider">
                            Этикетки.PRO
                        </h3>
                        <p className="text-gray-400 max-w-sm text-sm">
                            Ваш надёжный партнёр в мире промышленной маркировки. Качество, инновации и индивидуальный подход с 2010 года.
                        </p>
                    </div>

                    {/* Навигация */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                            Разделы
                        </h4>
                        <ul className="space-y-3 text-base">
                            <li><Link to="/labels" className={`text-gray-400 ${irisOrange}`}>Виды этикеток</Link></li>
                            <li><Link to="/info" className={`text-gray-400 ${irisOrange}`}>Полезная информация</Link></li>
                            <li><Link to="/about" className={`text-gray-400 ${irisOrange}`}>О нас</Link></li>
                            <li><Link to="/contact" className={`text-gray-400 ${irisOrange}`}>Контакты</Link></li>
                        </ul>
                    </div>

                    {/* Контакты и соцсети */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                            Свяжитесь с нами
                        </h4>
                        <ul className="space-y-3 text-base">
                            <li className="text-gray-400">
                                Email: <a href="mailto:info@etiketki.pro" className={`text-gray-400 ${irisOrange}`}>info@etiketki.pro</a>
                            </li>
                            <li className="text-gray-400">
                                Телефон: <a href="tel:+74959876543" className={`text-gray-400 ${irisOrange}`}>+7 (495) 987-65-43</a>
                            </li>
                        </ul>
                        
                        {/* Иконки соцсетей */}
                        <div className="flex space-x-4 mt-6">
                            {/* Telegram */}
                            <a href="#" className={`text-gray-400 ${irisOrange}`} aria-label="Telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </a>
                            {/* Vkontakte */}
                            <a href="#" className={`text-gray-400 ${irisOrange}`} aria-label="Vkontakte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-vk"><path d="M12 21.6c-5.8 0-10.4-4.6-10.4-10.4S6.2 0.8 12 0.8 22.4 5.4 22.4 11.2 17.8 21.6 12 21.6zM15 9.6h-1.6c-0.8 0-1.2 0.4-1.2 1.2v2.4h2.4l-0.4 2.4h-2V20h-2.4v-4.4c0-0.4-0.4-0.8-0.8-0.8h-2.8V12h2c0.8 0 1.2-0.4 1.2-1.2V8.4c0-0.4-0.4-0.8-0.8-0.8H6.4V5.6h3.2c0.8 0 1.2-0.4 1.2-1.2V2.8h-2c-0.8 0-1.2 0.4-1.2 1.2v2.4h-1.2c-0.4 0-0.8 0.4-0.8 0.8s0.4 0.8 0.8 0.8h1.2v2.4c0 0.4 0.4 0.8 0.8 0.8H12z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера с копирайтом */}
                <div className="mt-8 pt-4 text-center">
                    <p className="text-gray-500 text-sm">© 2025 ООО «ИРИС». Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
