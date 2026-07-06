import React from "react";
import { Building2, Dumbbell, UserCheck, Layers, Lock, Activity } from "lucide-react";

const DIFERENCIAIS = [
  {
    icon: Building2,
    title: "Estrutura Gigante",
    description: "2 galpões com +800m² de espaço para treinar com liberdade, sem espera por equipamentos.",
  },
  {
    icon: Dumbbell,
    title: "Maquinário Completo",
    description: "Várias máquinas modernas e em perfeitas condições para o seu treino.",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Profissional",
    description: "Professores qualificados para guiar cada etapa da sua evolução.",
  },
  {
    icon: Layers,
    title: "Múltiplas Modalidades",
    description: "Musculação, Muay Thai, Karatê, Jiu-Jitsu, Funcional Kids e Funcional Adulto.",
  },
  {
    icon: Lock,
    title: "Armários Individuais",
    description: "Armários individuais com chave para guardar seus pertences com segurança.",
  },
  {
    icon: Activity,
    title: "Avaliação Grátis",
    description: "Avaliação física e bioimpedância totalmente grátis para todos os alunos.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-14 bg-card" data-testid="section-diferenciais">
      <div className="container mx-auto px-4 max-w-7xl animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 tracking-widest text-white">
          POR QUE A CENTER FITNESS?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFERENCIAIS.map((item, i) => (
            <div
              key={i}
              className="bg-background border border-border p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(245,196,0,0.2)] animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`diferencial-card-${i}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-sans text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
