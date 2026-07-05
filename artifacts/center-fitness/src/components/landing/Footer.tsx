import React from "react";
import { MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] py-10 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 mb-12 text-center md:text-left">
          
          <div className="max-w-xs">
            <h2 className="text-4xl font-display text-primary tracking-widest mb-4">
              CENTER FITNESS
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-6 italic">
              "Invista na sua melhor versão."
            </p>
          </div>

          <div className="max-w-sm">
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Endereço</h3>
            <p className="text-muted-foreground text-lg mb-2">
              Rua Santo Antônio, 1548
            </p>
            <p className="text-muted-foreground text-lg">
              Centro, Acaraú/CE
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Contato</h3>
            <p className="text-primary font-bold text-xl mb-6">
              (88) 99782-6023
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a 
                href="https://wa.me/5588997826023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/academia_center_fitness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground/60 text-sm tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Center Fitness. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
