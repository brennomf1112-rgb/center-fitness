import React from "react";

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
    logo: "/parceiros/porto-seguro.png",
  },
  {
    name: "Supermercado Pinheiro",
    logo: "/parceiros/pinheiro.png",
  },
];

export default function Parceiros() {
  return (
    <section className="py-14 bg-card border-y border-border" data-testid="section-parceiros">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-center text-muted-foreground font-sans text-sm uppercase tracking-[0.3em] mb-10">
          Parceiros da Academia
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {PARCEIROS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="h-20 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400">
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="max-h-20 max-w-[160px] w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground group-hover:text-white font-sans text-xs text-center tracking-wide transition-colors duration-300">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
