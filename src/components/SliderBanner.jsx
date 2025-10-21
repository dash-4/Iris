import React, { useState, useEffect } from 'react';

// Имитация данных
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

const ADVANTAGES_DATA = [
  {
    icon: "⏱",
    title: "Срок от проекта до запуска – 30 дней",
    description: "Быстрое проектирование и внедрение для минимизации простоев.",
  },
  {
    icon: "🛠",
    title: "Гарантия 24 месяца",
    description: "Надежность и поддержка на каждом этапе эксплуатации.",
  },
  {
    icon: "🏭",
    title: "Собственное производство",
    description: "Полный контроль качества от чертежа до готового конвейера.",
  },
];

// Стили
const CONTAINER_CLASSES = "container mx-auto px-4";
const CTA_BUTTON_CLASSES = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg uppercase tracking-widest transition duration-300 transform hover:scale-[1.02] shadow-2xl";

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_DATA.length);
    }, 5000); // Смена каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const slide = SLIDER_DATA[currentSlide];

  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white border-b-4 border-orange-500/50">
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-black/60 z-0"
          style={{
            backgroundImage: `url('/images/hero-bg-default.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Основной контент слайдера */}
        <div className={`${CONTAINER_CLASSES} text-center z-10 max-w-5xl`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-2xl">
            {slide.title}
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 md:mb-12 opacity-90 drop-shadow-xl">
            {slide.subtitle}
          </p>
          <button className={CTA_BUTTON_CLASSES}>{slide.ctaText}</button>
        </div>

        {/* Навигационные точки */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {SLIDER_DATA.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-orange-500' : 'bg-white/50'
              } transition-all duration-300`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Блок преимуществ */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className={CONTAINER_CLASSES}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES_DATA.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-[1.02] transition duration-300"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderBanner;