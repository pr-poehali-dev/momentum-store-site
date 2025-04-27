import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-momentum-black text-momentum-white py-10 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Momentum</h3>
            <p className="text-sm text-gray-300 mb-4">
              Интернет-магазин качественных реплик популярных часовых брендов.
            </p>
            <div className="logo-mmm text-xl tracking-widest mb-2">MMM</div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Акции
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-sm text-gray-300 mb-2">Город Луганск</p>
            <p className="text-sm text-gray-300 mb-1">Телефон: +7(959)1398715</p>
            <p className="text-sm text-gray-300 mb-1">Телефон: +7(959)1526836</p>
            <p className="text-sm text-gray-300 mb-1">Telegram: @inadache, @Narakame</p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Momentum. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
