import React from "react";
import { Dumbbell, Swords, Shield, CircleDot, Star, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gym1 from "@assets/1_1782935891188.jpeg";
import funcionalAdultoPhoto from "@assets/watermarked_img_13372021367771172073_1783239480198.jpg";
import muayThaiPhoto from "@assets/WhatsApp_Image_2026-07-01_at_17.02.51_1782936252193.jpeg";
import jiujitsuPhoto from "@assets/360_F_281610952_5haqUMoAn3Gvtqf0ODjhGF2gItT4sHin_1782936796232.webp";
import karatePhoto from "@assets/607d2c_655ab59adcf64c0eb97be90ea61f1895~mv2_1782936859786.webp";
import kidsPhoto from "@assets/28c28505-c672-4fb5-9838-e074ade53209_1782937034362.jpg";

const WA_NUMBER = "5588997826023";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function WAButton({ message }: { message: string }) {
  return (
    <Button
      asChild
      size="sm"
      className="mt-5 w-fit bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_14px_rgba(245,196,0,0.35)] transition-all uppercase tracking-widest font-bold font-sans"
    >
      <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-4 h-4 mr-2" />
        Quero me matricular
      </a>
    </Button>
  );
}

/* Wrapper para cards horizontais (foto + texto lado a lado no desktop,
   foto em cima no mobile sem corte). */
function HCardPhoto({ src, alt, reverse = false }: { src: string; alt: string; reverse?: boolean }) {
  return (
    <div className={`relative w-full md:w-2/5 shrink-0 overflow-hidden ${reverse ? "md:order-last" : ""}`}>
      {/* aspect-video no mobile = 16:9 sem corte; no desktop a altura segue o flex */}
      <div className="relative w-full aspect-video md:aspect-auto md:h-full min-h-0">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className={`absolute inset-0 hidden md:block ${reverse ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent via-transparent to-card/80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent md:hidden" />
      </div>
    </div>
  );
}

export default function Modalidades() {
  return (
    <section id="modalidades" className="py-14 bg-background relative overflow-hidden" data-testid="section-modalidades">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12 tracking-widest text-white">
          O QUE VOCÊ VAI ENCONTRAR AQUI
        </h2>

        <div className="flex flex-col gap-6">

          {/* MUSCULAÇÃO */}
          <div
            className="relative bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_40px_-5px_rgba(245,196,0,0.15)] transition-all duration-500"
            data-testid="modalidade-card-musculacao"
          >
            <div className="flex flex-col md:flex-row">
              <HCardPhoto src={gym1} alt="Musculação Center Fitness" />
              <div className="flex flex-col justify-center p-6 md:p-10 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Dumbbell className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display tracking-widest text-white">MUSCULAÇÃO</h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-muted-foreground font-sans text-base md:text-lg">Seg–Sex: 05:30 às 22:00</p>
                  <p className="text-muted-foreground font-sans text-base md:text-lg">Sáb: 07:00 às 14:00</p>
                  <p className="text-muted-foreground font-sans text-base md:text-lg">Dom: 08:00 às 12:00</p>
                </div>
                <WAButton message="Olá! Tenho interesse em fazer Musculação na Center Fitness. Pode me passar mais informações sobre planos e matrícula? 💪" />
              </div>
            </div>
          </div>

          {/* MUAY THAI */}
          <div
            className="relative bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_40px_-5px_rgba(245,196,0,0.15)] transition-all duration-500"
            data-testid="modalidade-card-muaythai"
          >
            <div className="flex flex-col md:flex-row">
              <HCardPhoto src={muayThaiPhoto} alt="Turma de Muay Thai Center Fitness" reverse />
              <div className="flex flex-col justify-center p-6 md:p-10 flex-1 md:order-first">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Swords className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display tracking-widest text-white">MUAY THAI</h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-muted-foreground font-sans text-base md:text-lg">Seg / Qua / Sex</p>
                  <p className="text-muted-foreground font-sans text-base md:text-lg">1ª turma: 17:00–18:00</p>
                  <p className="text-muted-foreground font-sans text-base md:text-lg">2ª turma: 18:00–19:00</p>
                </div>
                <WAButton message="Olá! Tenho interesse nas aulas de Muay Thai da Center Fitness. Quais turmas ainda têm vagas? 🥊" />
              </div>
            </div>
          </div>

          {/* KARATÊ + JIU-JITSU — cards verticais, proporção 16:9 no mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="relative bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(245,196,0,0.15)] transition-all duration-500"
              data-testid="modalidade-card-karate"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img src={karatePhoto} alt="Karatê Center Fitness"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display tracking-widest text-white">KARATÊ</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground font-sans text-base">Ter: 18h e 19h</p>
                  <p className="text-muted-foreground font-sans text-base">Qui: 18h e 19h</p>
                  <p className="text-muted-foreground font-sans text-base">Sex: 19h e 20h</p>
                </div>
                <WAButton message="Olá! Tenho interesse nas aulas de Karatê da Center Fitness. Pode me passar mais informações? 🥋" />
              </div>
            </div>

            <div
              className="relative bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(245,196,0,0.15)] transition-all duration-500"
              data-testid="modalidade-card-jiujitsu"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img src={jiujitsuPhoto} alt="Jiu-Jitsu Center Fitness"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CircleDot className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display tracking-widest text-white">JIU-JITSU</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground font-sans text-base">Seg–Sáb: 12:00</p>
                  <p className="text-muted-foreground font-sans text-base">Seg–Qui: 20:00</p>
                </div>
                <WAButton message="Olá! Tenho interesse nas aulas de Jiu-Jitsu da Center Fitness. Tem vagas nas turmas? 🤼" />
              </div>
            </div>
          </div>

          {/* FUNCIONAL KIDS */}
          <div
            className="relative bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-[0_0_40px_-5px_rgba(245,196,0,0.2)] transition-all duration-500"
            data-testid="modalidade-card-kids"
          >
            <div className="flex flex-col md:flex-row">
              <HCardPhoto src={kidsPhoto} alt="Funcional Kids Center Fitness" />
              <div className="flex flex-col justify-center p-6 md:p-10 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-display tracking-widest text-white">FUNCIONAL KIDS</h3>
                    <p className="text-primary text-xs font-sans font-bold uppercase tracking-widest mt-1">Para crianças</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <p className="text-muted-foreground font-sans text-base md:text-lg">Segunda e Quarta: 19:00</p>
                </div>
                <p className="text-white/60 font-sans text-sm leading-relaxed border-l-2 border-primary pl-3 mb-1">
                  Coordenação motora, disciplina e amor pelo esporte desde cedo.
                </p>
                <WAButton message="Olá! Tenho interesse no Funcional Kids da Center Fitness para meu filho(a). Pode me passar mais informações sobre as aulas e matrícula? ⭐" />
              </div>
            </div>
          </div>

          {/* FUNCIONAL ADULTO — em oferta */}
          <div
            className="relative bg-card border-2 border-primary rounded-xl overflow-hidden group hover:shadow-[0_0_50px_-5px_rgba(245,196,0,0.35)] transition-all duration-500"
            data-testid="modalidade-card-adulto"
          >
            <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
              <span className="bg-primary text-primary-foreground text-xs font-display tracking-[0.2em] px-3 py-1 rounded-full shadow-[0_0_16px_rgba(245,196,0,0.7)] animate-pulse">
                🔥 OFERTA ESPECIAL
              </span>
              <span className="bg-green-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                MATRÍCULA GRÁTIS
              </span>
            </div>

            <div className="flex flex-col md:flex-row">
              <HCardPhoto src={funcionalAdultoPhoto} alt="Funcional Adulto Center Fitness" reverse />
              <div className="flex flex-col justify-center p-6 md:p-10 flex-1 md:order-first">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 bg-primary/20 border border-primary/50 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-display tracking-widest text-white">FUNCIONAL ADULTO</h3>
                    <p className="text-primary text-xs font-sans font-bold uppercase tracking-widest mt-1">Nova modalidade • Vagas limitadas</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-sans text-base md:text-lg mb-2">
                  Treinamento funcional de alta intensidade para adultos de todos os níveis.
                </p>
                <p className="text-white/60 font-sans text-sm leading-relaxed border-l-2 border-primary pl-3 mb-4">
                  Melhore força, resistência e mobilidade com acompanhamento profissional em grupo.
                </p>
                <WAButton message="Olá! Vi que o Funcional Adulto está em oferta especial na Center Fitness! Quero saber mais sobre a matrícula e horários. ⚡🔥" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
