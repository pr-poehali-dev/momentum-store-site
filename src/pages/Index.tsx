import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import PageTransition from "@/components/layout/PageTransition";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Установка мета-тегов и заголовка страницы
    document.title = "Momentum - Интернет-магазин часов";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Header />
      
      <PageTransition>
        <main>
          <HeroBanner />
          <Features />
          <About />
        </main>
      </PageTransition>
      
      <Footer />
    </>
  );
};

export default Index;
