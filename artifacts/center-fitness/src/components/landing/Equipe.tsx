import React from "react";
import teamPhoto from "@assets/IMG_7247_1782934025503.png";

export default function Equipe() {
  return (
    <section id="equipe" className="pt-14 pb-6 bg-background relative overflow-hidden" data-testid="section-equipe">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display tracking-widest text-white mb-4">
            QUEM VAI TE TRANSFORMAR
          </h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto">
            Profissionais qualificados, apaixonados pelo que fazem e prontos para te levar ao próximo nível.
          </p>
        </div>

        {/* Team Photo — proporção preservada no mobile */}
        <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(245,196,0,0.12)]">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <img
              src={teamPhoto}
              alt="Equipe Center Fitness"
              className="w-full h-full object-cover object-center"
              data-testid="equipe-team-photo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <p className="text-primary font-display text-xl md:text-3xl tracking-[0.25em] mb-1">A NOSSA EQUIPE</p>
              <p className="text-white/80 font-sans text-sm md:text-lg">Unidos pelo mesmo objetivo: a sua transformação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
