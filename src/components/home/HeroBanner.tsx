import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative bg-momentum-white pt-8 pb-16 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Время выбирать <span className="text-momentum-accent">лучшее</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
              Первый в Луганске специализированный интернет-магазин качественных реплик 
              популярных часовых брендов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-momentum-black text-white hover:bg-momentum-black/90">
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/promotions">Акции и скидки</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="logo-mmm text-8xl md:text-9xl tracking-widest text-momentum-black font-bold">
                MMM
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl md:text-2xl tracking-widest text-momentum-black font-light">
                MOMENTUM
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
