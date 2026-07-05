import React from "react";
import gym1 from "@assets/1_1782935891188.jpeg";
import gym2 from "@assets/2_1782935891188.jpeg";
import gym3 from "@assets/WhatsApp_Image_2026-06-29_at_18.07.48_1782935891189.jpeg";

export default function Galeria() {
  return (
    <section className="w-full bg-background overflow-hidden" data-testid="section-galeria">
      {/* Full-bleed label strip */}
      <div className="py-4 text-center">
        <p className="text-primary font-display tracking-[0.35em] text-lg">NOSSA ESTRUTURA</p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Large left photo */}
        <div className="relative md:col-span-2 h-[340px] md:h-[520px] overflow-hidden group">
          <img
            src={gym1}
            alt="Estrutura Center Fitness — salão completo"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-white font-display tracking-widest text-2xl drop-shadow-lg">MAQUINÁRIO COMPLETO</span>
          </div>
          {/* Golden border glow on hover */}
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        </div>

        {/* Two stacked right photos */}
        <div className="flex flex-col gap-1">
          <div className="relative h-[170px] md:h-[259px] overflow-hidden group">
            <img
              src={gym2}
              alt="Academia Center Fitness — movimento na pista"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
          </div>
          <div className="relative h-[170px] md:h-[259px] overflow-hidden group">
            <img
              src={gym3}
              alt="Academia Center Fitness — espaço amplo"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="bg-card border-y border-border py-6 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <p className="text-4xl font-display text-primary">+50</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">Equipamentos</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="text-4xl font-display text-primary">800m²</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">de Espaço</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="text-4xl font-display text-primary">5</p>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mt-1">Modalidades</p>
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
