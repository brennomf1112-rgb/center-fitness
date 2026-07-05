import React from "react";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contato() {
  const WHATSAPP_URL = "https://wa.me/5588997826023";
  const INSTAGRAM_URL = "https://instagram.com/academia_center_fitness";

  return (
    <section 
      id="contato" 
      className="py-16 relative overflow-hidden bg-card border-t border-b border-border/50" 
      data-testid="section-contato"
    >
      {/* Background with slight noise texture to differentiate */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-card to-card" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl animate-on-scroll">
        <h2 className="text-5xl md:text-6xl font-display font-bold tracking-widest text-white mb-6 uppercase drop-shadow-md">
          PRONTO PARA COMEÇAR?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans mb-12">
          Fale com a gente agora e garanta seu plano.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-widest font-bold py-8 px-12 rounded-sm hover:shadow-[0_0_20px_rgba(245,196,0,0.5)] transition-all duration-300"
            data-testid="contato-btn-whatsapp"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-3" />
              FALAR NO WHATSAPP
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 text-lg uppercase tracking-widest font-bold py-8 px-12 rounded-sm transition-all duration-300"
            data-testid="contato-btn-instagram"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-6 h-6 mr-3" />
              VER NO INSTAGRAM
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
