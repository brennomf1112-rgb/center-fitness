import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Galeria from "../../components/landing/Galeria";
import Diferenciais from "../../components/landing/Diferenciais";
import Modalidades from "../../components/landing/Modalidades";
import Planos from "../../components/landing/Planos";
import Equipe from "../../components/landing/Equipe";
import Calendario from "../../components/landing/Calendario";
import Parceiros from "../../components/landing/Parceiros";
import Localizacao from "../../components/landing/Localizacao";
import Contato from "../../components/landing/Contato";
import Footer from "../../components/landing/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function LandingPage() {
  useIntersectionObserver();

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />         {/* 1. Impacto — logo, slogan, CTA */}
        <Galeria />      {/* 2. Mostrar a academia — fotos reais */}
        <Diferenciais /> {/* 3. Por que escolher a Center Fitness */}
        <Modalidades />  {/* 4. O que oferecemos — aulas e horários */}
        <Planos />       {/* 5. Planos e preços — converter */}
        <Equipe />       {/* 6. Nossa equipe — gerar confiança */}
        <Calendario />   {/* 7. Grade de horários */}
        <Parceiros />    {/* 8. Parceiros — prova social */}
        <Localizacao />  {/* 9. Onde estamos */}
        <Contato />      {/* 10. Fale com a gente */}
      </main>
      <Footer />
    </div>
  );
}
