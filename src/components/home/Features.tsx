import { CheckCircle2, Clock, CreditCard, Truck, ShieldCheck } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-momentum-gray">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <CheckCircle2 className="h-10 w-10 mb-4 text-momentum-black" />
            <h3 className="text-xl font-semibold mb-2">Широкий ассортимент</h3>
            <p className="text-gray-700">
              Высококачественные реплики премиальных брендов на любой вкус
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <CreditCard className="h-10 w-10 mb-4 text-momentum-black" />
            <h3 className="text-xl font-semibold mb-2">Доступные цены</h3>
            <p className="text-gray-700">
              Привлекательная стоимость всех моделей в нашем каталоге
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <Truck className="h-10 w-10 mb-4 text-momentum-black" />
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-700">
              Оперативная доставка по Луганску и области
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <Clock className="h-10 w-10 mb-4 text-momentum-black" />
            <h3 className="text-xl font-semibold mb-2">Профессиональная консультация</h3>
            <p className="text-gray-700">
              Наши специалисты готовы ответить на все ваши вопросы
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <ShieldCheck className="h-10 w-10 mb-4 text-momentum-black" />
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-gray-700">
              Мы предоставляем гарантию на все изделия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
