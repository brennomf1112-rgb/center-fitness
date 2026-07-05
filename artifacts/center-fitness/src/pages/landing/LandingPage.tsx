import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Diferenciais from "../../components/landing/Diferenciais";
import Modalidades from "../../components/landing/Modalidades";
import Planos from "../../components/landing/Planos";
import Equipe from "../../components/landing/Equipe";
import Parceiros from "../../components/landing/Parceiros";
import Calendario from "../../components/landing/Calendario";
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
        <Hero />
        <Diferenciais />
        <Modalidades />
        <Planos />
        <Equipe />
        <Parceiros />
        <Calendario />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
