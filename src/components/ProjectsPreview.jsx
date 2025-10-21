import React from 'react';
import { Link } from 'react-router-dom';

// Имитация данных
const PROJECTS_PREVIEW = [
  {
    id: 1,
    title: "Модернизация линии упаковки",
    task: "Увеличить скорость подачи продукции на 25%",
    type: "Ленточный, подъемный",
    link: "/projects/1",
    image: "", // Замените на реальный путь
  },
  {
    id: 2,
    title: "Автоматизация склада готовой продукции",
    task: "Снизить ручной труд при сортировке",
    type: "Роликовый, гравитационный",
    link: "/projects/2",
    image: "",
  },
  {
    id: 3,
    title: "Линия перемещения заготовок",
    task: "Обеспечить точную фиксацию деталей",
    type: "Пластинчатый, с фиксаторами",
    link: "/projects/3",
    image: "",
  },
  {
    id: 4,
    title: "Конвейер для пищевого производства",
    task: "Соответствие санитарным нормам (нержавеющая сталь)",
    type: "Модульный (пищевой)",
    link: "/projects/4",
    image: "",
  },
];

const CONTAINER_CLASSES = "container mx-auto px-4 max-w-7xl";
const CTA_BUTTON_CLASSES = "inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-xl border-2 border-orange-500 tracking-wider uppercase";

const ProjectsPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className={CONTAINER_CLASSES}>
        {/* Заголовок секции */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Наши решения на производстве: 4 последних кейса
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS_PREVIEW.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-orange-500/30 transform hover:-translate-y-1 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
                onError={(e) => (e.target.src = "/images/projects/placeholder.jpg")} // Заглушка при ошибке
              />

              <div className="p-5 flex flex-col h-full">
                <span className="text-lg font-bold text-gray-900 mb-3 block border-b border-orange-500/20 pb-2">
                  {project.title}
                </span>

                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-semibold text-gray-700">Задача:</span> {project.task}
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  <span className="font-semibold text-gray-700">Тип:</span> {project.type}
                </p>

                <Link
                  to={project.link}
                  className="text-orange-500 hover:text-orange-600 font-semibold mt-auto self-start transition duration-200 flex items-center"
                >
                  Подробнее
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className={CTA_BUTTON_CLASSES}>
            Посмотреть все проекты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;