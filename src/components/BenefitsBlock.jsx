import React from 'react';

const BenefitsBlock = () => {

    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
            <span className="text-iris-orange">ИРИС:</span> 5 причин доверить нам ваш проект
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Мы не просто поставщик, а технологический партнер, гарантирующий результат.
          </p>
          
          {/* Сетка преимуществ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            
            {/* Преимущество 1: Собственное производство */}
              <div 
                key={1} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label="Собственное производство">
                        🏭
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Собственное производство
                </h3>
                <p className="text-gray-600 text-sm">
                  Работаем на современном оборудовании, контролируя качество на каждом этапе. Это гарантирует надежность и снижает конечную стоимость.
                </p>
              </div>

            {/* Преимущество 2: Гарантия и надежность */}
            <div 
                key={2} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label="Гарантия и надежность">
                        🛡️
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Гарантия и надежность
                </h3>
                <p className="text-gray-600 text-sm">
                  Предоставляем официальную гарантию 24 месяца на все поставляемое оборудование. Используем только проверенные европейские комплектующие.
                </p>
              </div>

            {/* Преимущество 3: Комплексный инжиниринг */}
            <div 
                key={3} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label="Комплексный инжиниринг">
                        📐
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Комплексный инжиниринг
                </h3>
                <p className="text-gray-600 text-sm">
                  Проектируем конвейерные системы «под ключ»: от первичного аудита и чертежей до монтажа, пусконаладки и обучения персонала.
                </p>
              </div>

            {/* Преимущество 4: Оптимальные сроки */}
            <div 
                key={4} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label="Оптимальные сроки">
                        ⏱️
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Оптимальные сроки
                </h3>
                <p className="text-gray-600 text-sm">
                  Благодаря отработанным процессам и наличию собственного склада компонентов, срок от проекта до запуска не превышает 30 дней.
                </p>
              </div>

            {/* Преимущество 5: Поддержка 24/7 */}
            <div 
                key={5} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-iris-orange/10 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label="Поддержка 24/7">
                        📞
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Поддержка 24/7
                </h3>
                <p className="text-gray-600 text-sm">
                  Техническая поддержка и сервисное обслуживание доступны круглосуточно. Быстрое реагирование на любые запросы и ремонт.
                </p>
              </div>

          </div>
          
        </div>
      </section>
    );
};

export default BenefitsBlock;
