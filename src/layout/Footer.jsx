import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const irisOrange = "hover:text-[#ff9900] transition-colors";

  return (
    <footer className="bg-gray-900 text-white py-12  rounded-t-xl shadow-inner shadow-gray-700">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-extrabold mb-3 text-iris-orange tracking-wider">
              Этикетки.PRO
            </h3>
            <p className="text-gray-400 max-w-sm text-sm">
              Ваш надёжный партнёр в мире промышленной маркировки. Качество,
              инновации и индивидуальный подход с 2010 года.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
              Разделы
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/labels" className={`text-gray-400 ${irisOrange}`}>
                  Виды этикеток
                </Link>
              </li>
              <li>
                <Link to="/info" className={`text-gray-400 ${irisOrange}`}>
                  Полезная информация
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-gray-400 ${irisOrange}`}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-gray-400 ${irisOrange}`}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
              Свяжитесь с нами
            </h4>
            <ul className="space-y-3 text-base">
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@etiketki.pro"
                  className={`text-gray-400 ${irisOrange}`}
                >
                  info@etiketki.pro
                </a>
              </li>
              <li className="text-gray-400">
                Телефон:{" "}
                <a
                  href="tel:+74959876543"
                  className={`text-gray-400 ${irisOrange}`}
                >
                  +7 (495) 987-65-43
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              {/* Telegram */}
              <a
                href="#"
                className={`text-gray-400 ${irisOrange}`}
                aria-label="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ООО «ИРИС». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
