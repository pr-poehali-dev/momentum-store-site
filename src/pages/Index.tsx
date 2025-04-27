import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import PageTransition from "@/components/layout/PageTransition";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Momentum - Интернет-магазин часов</title>
        <meta name="description" content="Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов." />
      </Helmet>
      
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
