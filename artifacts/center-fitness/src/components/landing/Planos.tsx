import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap } from "lucide-react";

const PHONE = "5588997826023";

function waLink(msg: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

const LINKS = {
  oferta150: waLink("Olá! Tenho interesse na OFERTA Musculação + Modalidade por R$ 150,00/mês (Musculação + Muay Thai, Karatê, Jiu-Jitsu ou Funcional Kids). Pode me dar mais informações?"),
  mensal: waLink("Olá! Tenho interesse no Plano Mensal de Musculação (R$ 105,00 cartão / R$ 100,00 Pix). Pode me dar mais informações?"),
  trimestral: waLink("Olá! Tenho interesse no Plano Trimestral de Musculação (até 3x de R$ 95,00). Pode me dar mais informações?"),
  semestral: waLink("Olá! Tenho interesse no Plano Semestral de Musculação (até 5x de R$ 105,40 ou valor à vista no Pix/dinheiro). Pode me dar mais informações?"),
  karate: waLink("Olá! Tenho interesse no Plano de Karatê por R$ 79,90/mês. Pode me dar mais informações?"),
  jiujitsu: waLink("Olá! Tenho interesse no Plano de Jiu-Jitsu por R$ 79,90/mês. Pode me dar mais informações?"),
  muaythai: waLink("Olá! Tenho interesse no Plano de Muay Thai por R$ 85,00/mês. Pode me dar mais informações?"),
  kids: waLink("Olá! Tenho interesse no Plano de Funcional Kids por R$ 69,90/mês. Pode me dar mais informações?"),
  diaria: waLink("Olá! Tenho interesse na diária da academia (R$ 20,00). Pode me dar mais informações?"),
  semanal: waLink("Olá! Tenho interesse no pacote semanal (R$ 50,00). Pode me dar mais informações?"),
  quinzena: waLink("Olá! Tenho interesse no pacote de 2 semanas (R$ 75,00). Pode me dar mais informações?"),
  tressemanas: waLink("Olá! Tenho interesse no pacote de 3 semanas (R$ 85,00). Pode me dar mais informações?"),
};

export default function Planos() {
  return (
    <section id="planos" className="py-14 bg-card relative" data-testid="section-planos">
      <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 tracking-widest text-white">
          NOSSOS PLANOS
        </h2>
        <p className="text-center text-muted-foreground font-sans mb-16 text-lg">Clique em qualquer plano e fale direto com a gente no WhatsApp.</p>

        {/* HERO OFFER — R$150 */}
        <div className="relative mb-12 pt-6">
          {/* Badge — sibling of card, never clipped */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-primary text-primary-foreground px-8 py-2.5 rounded-full font-display tracking-[0.2em] text-base shadow-[0_0_24px_rgba(245,196,0,0.7)]">
            <Zap className="w-4 h-4" fill="currentColor" />
            MELHOR OFERTA
            <Zap className="w-4 h-4" fill="currentColor" />
          </div>

          <div className="relative bg-background border-2 border-primary rounded-2xl pt-14 pb-10 px-10 md:px-14 shadow-[0_0_80px_-10px_rgba(245,196,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background glow orb */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Left: Info */}
            <div className="text-center md:text-left flex-1 relative z-10">
              <p className="text-primary font-sans font-bold tracking-[0.25em] uppercase text-sm mb-2">Combo completo</p>
              <h3 className="text-4xl md:text-5xl font-display tracking-widest text-white mb-3 leading-tight">
                MUSCULAÇÃO +<br />QUALQUER MODALIDADE
              </h3>
              <p className="text-muted-foreground text-lg font-sans">
                Musculação + Muay Thai, Karatê, Jiu-Jitsu ou Funcional Kids
              </p>
            </div>

            {/* Right: Price + CTA */}
            <div className="flex flex-col items-center gap-6 relative z-10 min-w-[240px]">
              <div className="text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-1 font-sans">À vista — Pix ou dinheiro</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-muted-foreground text-2xl font-sans mt-2">R$</span>
                  <span className="text-8xl font-display text-primary leading-none" style={{ textShadow: "0 0 30px rgba(245,196,0,0.4)" }}>150</span>
                  <span className="text-muted-foreground text-2xl font-sans mb-2">/mês</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-widest text-base py-7 px-10 rounded-xl shadow-[0_0_25px_rgba(245,196,0,0.35)] hover:shadow-[0_0_40px_rgba(245,196,0,0.55)] transition-all duration-300"
                data-testid="btn-oferta-150"
              >
                <a href={LINKS.oferta150} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  QUERO ESSE PLANO
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Regular Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 animate-on-scroll">
          <a
            href={LINKS.mensal}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/60 hover:shadow-[0_0_20px_rgba(245,196,0,0.1)] transition-all duration-300 group cursor-pointer block"
            data-testid="btn-plano-mensal"
          >
            <h4 className="text-2xl font-display tracking-widest mb-3 group-hover:text-primary transition-colors">MENSAL</h4>
            <p className="text-lg text-muted-foreground mb-1">R$ 105,00 <span className="text-sm">(cartão)</span></p>
            <p className="text-2xl text-primary font-bold">R$ 100,00 <span className="text-sm font-normal text-muted-foreground">(Pix/dinheiro)</span></p>
            <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity">Toque para falar no WhatsApp</p>
          </a>
          <a
            href={LINKS.trimestral}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/60 hover:shadow-[0_0_20px_rgba(245,196,0,0.1)] transition-all duration-300 group cursor-pointer block"
            data-testid="btn-plano-trimestral"
          >
            <h4 className="text-2xl font-display tracking-widest mb-3 group-hover:text-primary transition-colors">TRIMESTRAL</h4>
            <p className="text-4xl text-white font-display mb-1">3x de R$ 95,00</p>
            <p className="text-lg text-muted-foreground">total R$ 285,00</p>
            <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity">Toque para falar no WhatsApp</p>
          </a>
          <a
            href={LINKS.semestral}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/60 hover:shadow-[0_0_20px_rgba(245,196,0,0.1)] transition-all duration-300 group cursor-pointer block"
            data-testid="btn-plano-semestral"
          >
            <h4 className="text-2xl font-display tracking-widest mb-3 group-hover:text-primary transition-colors">SEMESTRAL</h4>
            <p className="text-4xl text-white font-display mb-1">5x de R$ 105,40</p>
            <p className="text-lg text-muted-foreground">total R$ 527,00</p>
            <p className="text-sm text-primary font-semibold mt-2">ou à vista no Pix/dinheiro</p>
            <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity">Toque para falar no WhatsApp</p>
          </a>
        </div>

        {/* Avulsas & Diárias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          <div className="bg-background border border-border rounded-xl p-8">
            <h4 className="text-2xl font-display tracking-widest mb-6 text-primary">MODALIDADES AVULSAS</h4>
            <ul className="space-y-3">
              {[
                { label: "Karatê", price: "R$ 79,90/mês", link: LINKS.karate, testid: "btn-avulso-karate" },
                { label: "Jiu-Jitsu", price: "R$ 79,90/mês", link: LINKS.jiujitsu, testid: "btn-avulso-jiujitsu" },
                { label: "Muay Thai", price: "R$ 85,00/mês", link: LINKS.muaythai, testid: "btn-avulso-muaythai" },
                { label: "Funcional Kids", price: "R$ 69,90/mês", link: LINKS.kids, testid: "btn-avulso-kids" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center border-b border-border/50 pb-3 text-xl hover:text-primary hover:border-primary/40 transition-colors group"
                    data-testid={item.testid}
                  >
                    <span className="group-hover:text-primary transition-colors">{item.label}</span>
                    <span className="font-bold text-white group-hover:text-primary transition-colors">{item.price}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background border border-border rounded-xl p-8">
            <h4 className="text-2xl font-display tracking-widest mb-6 text-primary">DIÁRIAS E PACOTES CURTOS</h4>
            <ul className="space-y-3">
              {[
                { label: "Diária", price: "R$ 20,00", link: LINKS.diaria, testid: "btn-diaria" },
                { label: "Semanal", price: "R$ 50,00", link: LINKS.semanal, testid: "btn-semanal" },
                { label: "2 semanas", price: "R$ 75,00", link: LINKS.quinzena, testid: "btn-quinzena" },
                { label: "3 semanas", price: "R$ 85,00", link: LINKS.tressemanas, testid: "btn-tressemanas" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center border-b border-border/50 pb-3 text-xl hover:text-primary hover:border-primary/40 transition-colors group"
                    data-testid={item.testid}
                  >
                    <span className="group-hover:text-primary transition-colors">{item.label}</span>
                    <span className="font-bold text-white group-hover:text-primary transition-colors">{item.price}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
