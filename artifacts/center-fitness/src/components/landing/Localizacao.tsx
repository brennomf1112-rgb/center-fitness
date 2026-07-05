import React from "react";
import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Localizacao() {
  const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua+Santo+Antônio,+1548,+Centro,+Acaraú,+CE";

  return (
    <section id="localizacao" className="py-14 bg-background" data-testid="section-localizacao">
      <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display tracking-widest text-white mb-4">
            ONDE ESTAMOS
          </h2>
          <p className="text-xl text-muted-foreground font-sans uppercase tracking-wider font-bold">
            Rua Santo Antônio, 1548 — Centro, Acaraú/CE
          </p>
        </div>

        <div className="relative border-2 border-border rounded-xl overflow-hidden bg-muted group shadow-xl mb-8">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block relative h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6!2d-40.1195!3d-2.8855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Santo+Ant%C3%B4nio%2C+1548%2C+Centro%2C+Acara%C3%BA%2C+CE!5e0!3m2!1spt!2sbr!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0, pointerEvents: 'none' }} 
              allowFullScreen 
              loading="lazy"
              title="Mapa de Localização Center Fitness"
            />
            {/* Overlay for interaction block & hover effect */}
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-300" />
          </a>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(245,196,0,0.4)] text-lg uppercase tracking-widest font-bold py-6 px-10 transition-all"
            data-testid="localizacao-btn-chegar"
          >
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-5 h-5 mr-3" />
              COMO CHEGAR
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
