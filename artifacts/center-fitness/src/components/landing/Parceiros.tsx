import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PARCEIROS = [
  {
    name: "Atacadão do Vale",
    logo: "/parceiros/atacadao-clean.png",
  },
  {
    name: "Laca Saúde",
    logo: "/parceiros/laca-saude-hq.png",
  },
  {
    name: "Porto Seguro Supermercados",
    logo: "/parceiros/porto-seguro-new.png",
  },
  {
    name: "Supermercado Pinheiro",
    logo: "/parceiros/pinheiro.png",
  },
  {
    name: "Amilco Home Center",
    logo: "/parceiros/amilco-original.jpg",
  },
];

export default function Parceiros() {
  return (
    <section className="py-16 bg-background relative overflow-hidden" data-testid="section-parceiros">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-xs uppercase tracking-[0.4em] mb-3">Quem acredita na gente</p>
          <h2 className="text-3xl md:text-4xl font-display tracking-widest text-white">NOSSOS PARCEIROS</h2>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
          {PARCEIROS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Card branco — tamanho idêntico para todos */}
              <div className="w-full h-28 bg-white rounded-xl p-3 flex items-center justify-center shadow-md overflow-hidden group-hover:shadow-[0_0_24px_rgba(245,196,0,0.3)] group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300">
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-white/70 font-sans text-xs text-center tracking-wide leading-snug group-hover:text-white transition-colors">
                {p.name}
              </p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground font-sans text-xs uppercase tracking-[0.3em]">Seja um parceiro</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* CTA para novos parceiros */}
        <div className="relative bg-card border border-primary/25 rounded-2xl p-8 text-center overflow-hidden max-w-2xl mx-auto">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/8 rounded-full blur-[50px] pointer-events-none" />
          <p className="text-white font-display text-xl md:text-2xl tracking-wider mb-2">
            Venha ser parceiro você também!
          </p>
          <p className="text-muted-foreground font-sans text-sm mb-6">
            Leve sua marca para dentro da maior academia do Vale do Acaraú.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(245,196,0,0.4)] transition-all uppercase tracking-widest font-bold font-sans"
          >
            <a href="https://wa.me/5588997826023" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
