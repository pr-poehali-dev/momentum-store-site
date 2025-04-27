import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const NotFound = () => {
  useEffect(() => {
    document.title = "Страница не найдена | Momentum";
  }, []);

  return (
    <>
      <Header />
      
      <PageTransition>
        <main className="min-h-[60vh] flex flex-col items-center justify-center py-20">
          <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-medium">Страница не найдена</h2>
            <p className="text-gray-600 mt-2">
              Извините, страница, которую вы ищете, не существует или была перемещена.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </main>
      </PageTransition>
      
      <Footer />
    </>
  );
};

export default NotFound;
