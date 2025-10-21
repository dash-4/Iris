import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-12 bg-white border-t-4 border-orange-500">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
          Начните с бесплатной консультации
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Наши эксперты помогут подобрать конвейерную систему, идеально подходящую для вашего производства.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-lg border-2 border-orange-500 tracking-wide uppercase hover:scale-105"
        >
          Получить консультацию →
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;