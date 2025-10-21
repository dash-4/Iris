import React from "react";
import { Link } from "react-router-dom";

const AboutBrief = () => {
  // Имитация текста, который ранее импортировался из '../data/homeData'
  const ABOUT_BRIEF_TEXT =
    "Компания ООО «ИРИС»  специализируется на полном цикле проектирования, производства, монтажа и обслуживания конвейерных систем и оборудования для автоматизации производственных линий. Наша миссия — предоставить каждому клиенту индивидуальное, надежное и эффективное решение, оптимизирующее логистику и сокращающее эксплуатационные расходы. Мы используем европейские комплектующие и гарантируем качество каждого узла, произведенного на нашем собственном заводе.";

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая колонка */}
          <div className="about-text-column">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              ООО «ИРИС»: Ваш эксперт в{" "}
              <span className="text-iris-orange">конвейерных системах</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {ABOUT_BRIEF_TEXT}
            </p>

            {/* Кнопка "Узнать больше" */}
            <Link
              to="/about"
              className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-iris-orange hover:border-iris-orange hover:text-white shadow-lg tracking-wider"
            >
              Узнать больше о нашем производстве и команде →
            </Link>
          </div>

          {/* Визуальная колонка (Placeholder for Production Photo) */}
          <div className="about-visual-column hidden lg:block relative overflow-hidden rounded-xl shadow-2xl h-80 w-full">
            {/* Имитация производственного фото с градиентом */}
            <div className="w-full h-full flex items-center justify-center bg-gray-800 border border-gray-700">
              <span className="text-gray-500 text-xl font-medium tracking-widest uppercase">
                [Имитация: Фото с производства] 🏭
              </span>
            </div>

            {/* Небольшой оранжевый акцент */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-iris-orange opacity-10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-iris-orange opacity-10 rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;
