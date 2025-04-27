import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const NotFound = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-6">404</h1>
            <p className="text-xl mb-8">Страница в разработке или не найдена</p>
            <Button asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
};

export default NotFound;
