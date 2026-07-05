import React from "react";
import gym1 from "@assets/1_1783238306087.jpeg";
import gym2 from "@assets/7_1783238306086.jpeg";
import gym3 from "@assets/2_1783238306086.jpeg";
import gym4 from "@assets/3_1783238306087.jpeg";
import gym5 from "@assets/55_1783238306088.jpeg";
import gym6 from "@assets/6_1783238306088.jpeg";

export default function Galeria() {
  return (
    <section className="w-full bg-background overflow-hidden" data-testid="section-galeria">
      <div className="py-4 text-center">
        <p className="text-primary font-display tracking-[0.35em] text-lg">NOSSA ESTRUTURA</p>
      </div>

      {/* Featured hero photo */}
      <div className="relative w-full h-[420px] md:h-[620px] overflow-hidden group">
        <img
          src={gym1}
          alt="Center Fitness — visão completa dos dois galpões"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2">
          <span className="text-white font-display tracking-widest text-3xl md:text-4xl drop-shadow-lg">
            2 GALPÕES • +800m² DE ESPAÇO
          </span>
          <span className="text-primary font-sans text-base md:text-lg tracking-wider drop-shadow">
            Estrutura gigante para você treinar com liberdade
          </span>
        </div>
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
      </div>

      {/* 5-photo grid below */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mt-1">
        <div className="relative h-[220px] md:h-[280px] overflow-hidden group">
          <img
            src={gym2}
            alt="Maquinário completo — salão musculação"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="relative h-[220px] md:h-[280px] overflow-hidden group">
          <img
            src={gym3}
            alt="Academia Center Fitness — movimento na pista"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="relative h-[220px] md:h-[280px] overflow-hidden group">
          <img
            src={gym4}
            alt="Cardio — esteiras e aparelhos aeróbicos"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="relative h-[220px] md:h-[280px] overflow-hidden group">
          <img
            src={gym5}
            alt="Galpão cardio — visão geral dos equipamentos"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="relative h-[220px] md:h-[280px] overflow-hidden group col-span-2 md:col-span-1">
          <img
            src={gym6}
            alt="Esteiras e bicicletas — setor aeróbico"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="bg-card border-y border-border py-6 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <p className="text-4xl font-display text-primary">2</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">Galpões</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="text-4xl font-display text-primary">+800m²</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">de Espaço Total</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="text-4xl font-display text-primary">Várias</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">Máquinas Incríveis</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="text-4xl font-display text-primary">7 dias</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">por semana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
