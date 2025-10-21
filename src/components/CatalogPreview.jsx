import React from 'react';
import { Link } from 'react-router-dom';

const CatalogPreview = () => {
    // Имитация данных обновлена для использования символов (эмодзи) вместо компонентов иконок.
    const CATALOG_PREVIEW = [
      {
        id: 1,
        title: "Ленточные конвейеры",
        description: "Универсальное решение для транспортировки сыпучих и штучных грузов.",
        link: "/catalog/belt",
        symbol: "⚙️", // Механизм
      },
      {
        id: 2,
        title: "Роликовые конвейеры",
        description: "Идеальны для коробок, паллет и грузов с плоским дном. Моторизованные и гравитационные.",
        link: "/catalog/roller",
        symbol: "📦", // Коробка
      },
      {
        id: 3,
        title: "Винтовые (Шнековые) конвейеры",
        description: "Для перемещения пылевидных, порошкообразных и мелкокусковых материалов.",
        link: "/catalog/screw",
        symbol: "🛠️", // Инструмент
      },
      {
        id: 4,
        title: "Пластинчатые конвейеры",
        description: "Надежное решение для тяжелых и горячих грузов, а также крупногабаритных изделий.",
        link: "/catalog/plate",
        symbol: "🏗️", // Строительство
      },
    ];
    
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Заголовок секции */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
            Подберем конвейер для ваших задач
          </h2>
          
          {/* Сетка каталога */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATALOG_PREVIEW.map(item => (
              <Link 
                to={item.link} 
                key={item.id} 
                className="bg-gray-50 p-6 rounded-xl border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-start text-left transform hover:-translate-y-1 group"
              >
                {/* Иконка заменена на <span> с эмодзи */}
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center transition duration-300 group-hover:bg-iris-orange/20">
                    <span className="text-3xl transition duration-300 group-hover:scale-110">
                        {item.symbol}
                    </span>
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition duration-200 group-hover:text-iris-orange">
                  {item.title}
                </h3>
                
                {/* Описание */}
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                
                {/* Ссылка */}
                <span className="text-iris-orange font-semibold mt-auto  transition duration-200 flex items-center group-hover:text-orange-600">
                  Подробнее 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 12h-11M14.5 9l3 3-3 3"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          
          {/* Кнопка "Перейти в каталог" */}
          <div className="text-center mt-12">
            <Link 
              to="/catalog" 
              className="inline-block bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-xl border-2 border-iris-orange tracking-wider uppercase"
            >
              Полный каталог конвейеров
            </Link>
          </div>
        </div>
      </section>
    );
};

export default CatalogPreview;
