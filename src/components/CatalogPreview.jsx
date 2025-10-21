import React from 'react';
import { Link } from 'react-router-dom';

// Имитация данных
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

// Стили
const CONTAINER_CLASSES = "container mx-auto px-4 max-w-7xl";
const CTA_BUTTON_CLASSES = "inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-xl border-2 border-orange-500 tracking-wider uppercase";

const CatalogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className={CONTAINER_CLASSES}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Подберем конвейер для ваших задач
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATALOG_PREVIEW.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="bg-white p-6 rounded-xl border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-orange-500/30 flex flex-col items-start text-left transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-orange-100 flex items-center justify-center transition duration-300 group-hover:bg-orange-200">
                <span className="text-3xl transition duration-300 group-hover:scale-110">
                  {item.symbol}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 transition duration-200 group-hover:text-orange-500">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {item.description}
              </p>

              <span className="text-orange-500 font-semibold mt-auto transition duration-200 flex items-center group-hover:text-orange-600">
                Подробнее
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog" className={CTA_BUTTON_CLASSES}>
            Полный каталог конвейеров
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;