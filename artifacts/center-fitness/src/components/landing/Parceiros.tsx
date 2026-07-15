import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PARCEIROS = [
  {
    name: "Atacadão do Vale",
    logo: "/parceiros/atacadao.png",
  },
  {
    name: "Laca Saúde",
    logo: "/parceiros/laca-saude.png",
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
    logo: "/parceiros/novo-parceiro.png",
  },
];

export default function Parceiros() {
  return (
    <section className="py-14 bg-card border-y border-border" data-testid="section-parceiros">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-center text-muted-foreground font-sans text-sm uppercase tracking-[0.3em] mb-10">
          Parceiros da Academia
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {PARCEIROS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="h-28 flex items-center justify-center transition-all duration-400">
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="max-h-28 max-w-[200px] w-auto object-contain"
                />
              </div>
              <p className="text-white font-sans text-sm text-center tracking-wide font-semibold">
                {p.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA para novos parceiros */}
        <div className="border border-primary/30 rounded-sm p-6 text-center bg-background/50">
          <p className="text-white font-display text-xl md:text-2xl tracking-wider mb-2">
            Venha ser parceiro você também!
          </p>
          <p className="text-muted-foreground font-sans text-sm mb-5">
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
