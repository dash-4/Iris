import React, { useState } from 'react';

// Имитация данных (должны быть импортированы)
const SLIDER_DATA = [
  {
    title: "Проектируем и производим конвейеры «под ключ»",
    subtitle: "Комплексные решения для повышения эффективности вашего производства.",
    ctaText: "Получить расчет проекта",
  },
  {
    title: "Увеличьте пропускную способность до 30%",
    subtitle: "Разработка и внедрение надежных конвейерных систем с гарантией 24 месяца.",
    ctaText: "Заказать консультацию инженера",
  },
];

const KEY_BENEFITS = [
  { id: 1, title: "Собственное производство" },
  { id: 2, title: "Срок от проекта до запуска – 30 дней" },
  { id: 3, title: "Гарантия 24 месяца" },
];

// Упрощенные и стилизованные константы для переиспользования классов
const CONTAINER_CLASSES = "container mx-auto px-4";
const CTA_BUTTON_CLASSES = "bg-iris-orange hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg uppercase tracking-widest transition duration-300 transform hover:scale-[1.02] shadow-2xl"; // Усиленный эффект

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = SLIDER_DATA[currentSlide];

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white border-b-4 border-iris-orange/50">
      
      {/* Фоновое изображение с более заметным затемнением для контраста */}
      <div className="absolute inset-0 bg-black/60 z-0" style={{ 
        backgroundImage: `url('/images/hero-bg-default.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>

      {/* Основной контент */}
      <div className={`${CONTAINER_CLASSES} text-center z-10 max-w-5xl`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-2xl">
          {slide.title}
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 md:mb-12 opacity-90 drop-shadow-xl">
          {slide.subtitle}
        </p>
        <button className={CTA_BUTTON_CLASSES}>
          {slide.ctaText}
        </button>
      </div>

      {/* Блок преимуществ: более строгий промышленный вид */}
      <div className="absolute bottom-0 w-full bg-iris-blue-dark/95 backdrop-blur-sm z-20 border-t border-gray-700">
        <div className={`${CONTAINER_CLASSES} py-4 flex flex-col md:flex-row justify-between items-center`}>
          {KEY_BENEFITS.map(benefit => (
            <div 
              key={benefit.id} 
              className="flex items-center text-sm md:text-base font-medium py-1 md:py-0 w-full md:w-auto justify-center text-gray-100"
            >
              {/* Используем более заметную, стилизованную иконку */}
              <svg className="w-5 h-5 text-iris-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="truncate">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderBanner;