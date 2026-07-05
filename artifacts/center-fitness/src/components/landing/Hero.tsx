import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, MapPin, Clock } from "lucide-react";
const logoImg = "/logo-center-fitness.png";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background"
      data-testid="section-hero"
    >
      {/* Background Texture & Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl animate-on-scroll">
        <div className="flex justify-center mb-8">
          <img
            src={logoImg}
            alt="Center Fitness"
            className="h-64 md:h-96 lg:h-[28rem] w-auto object-contain"
            style={{
              filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.7)) brightness(1.05) contrast(1.05)",
            }}
          />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 uppercase tracking-wider text-white drop-shadow-[0_0_30px_rgba(245,196,0,0.15)]">
          TREINO SEM FILA.<br />
          NA MAIOR DO VALE DO ACARAÚ.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto mb-10 tracking-wide">
          Estrutura gigante, maquinário completo e acompanhamento profissional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-widest font-bold py-6 px-10 rounded-sm hover:shadow-[0_0_20px_rgba(245,196,0,0.5)] transition-all duration-300"
            data-testid="hero-btn-conhecer"
          >
            <a href="#diferenciais">QUERO CONHECER</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-lg uppercase tracking-widest font-bold py-6 px-10 rounded-sm transition-all duration-300"
            data-testid="hero-btn-planos"
          >
            <a href="#planos">VER PLANOS</a>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase">86% de recomendação</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase">Centro, Acaraú</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase">Aberto de segunda a domingo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
