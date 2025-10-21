import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPreview = () => {
    // Данные перемещены внутрь компонента
    const PROJECTS_PREVIEW = [
      {
        id: 1,
        title: "Модернизация линии упаковки",
        task: "Увеличить скорость подачи продукции на 25%",
        type: "Ленточный, подъемный",
        link: "/projects/1",
      },
      {
        id: 2,
        title: "Автоматизация склада готовой продукции",
        task: "Снизить ручной труд при сортировке",
        type: "Роликовый, гравитационный",
        link: "/projects/2",
      },
      {
        id: 3,
        title: "Линия перемещения заготовок",
        task: "Обеспечить точную фиксацию деталей",
        type: "Пластинчатый, с фиксаторами",
        link: "/projects/3",
      },
      {
        id: 4,
        title: "Конвейер для пищевого производства",
        task: "Соответствие санитарным нормам (нержавеющая сталь)",
        type: "Модульный (пищевой)",
        link: "/projects/4",
      },
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Заголовок секции */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
            Наши решения на производстве: 4 последних кейса
          </h2>
          
          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS_PREVIEW.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-iris-orange/50 transform hover:-translate-y-1"
              >
                {/* Изображение - заменено заглушкой */}
                <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-500 font-medium text-sm">
                    
                </div>
                
                <div className="p-5 flex flex-col h-full">
                  {/* Заголовок/Отрасль */}
                  <span className="text-lg font-bold text-gray-900 mb-3 block border-b border-iris-orange/20 pb-2">
                    {project.title}
                  </span>
                  
                  {/* Описание задачи и типа */}
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-semibold text-gray-700">Задача:</span> {project.task}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-semibold text-gray-700">Тип:</span> {project.type}
                  </p>

                  {/* Ссылка */}
                  <Link 
                    to={project.link} 
                    className="text-iris-orange hover:text-orange-600 font-semibold mt-auto  self-start transition duration-200 flex items-center"
                  >
                    Подробнее 
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 12h-11M14.5 9l3 3-3 3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Кнопка "Посмотреть все проекты" */}
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block bg-gray-800 hover:bg-iris-orange text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-xl border-2 border-gray-800 hover:border-iris-orange tracking-wider uppercase"
            >
              Посмотреть все 
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ProjectsPreview;
