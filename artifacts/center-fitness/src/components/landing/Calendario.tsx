import React from "react";
import { Clock } from "lucide-react";

export default function Calendario() {
  return (
    <section id="calendario" className="pt-8 pb-14 bg-card border-t border-border" data-testid="section-calendario">
      <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12 tracking-widest text-white">
          CALENDÁRIO DE TREINOS
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden border border-border rounded-lg bg-background mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted text-white uppercase font-display tracking-widest text-xl">
                <th className="p-4 border-b border-border">Modalidade</th>
                <th className="p-4 border-b border-border">Dias</th>
                <th className="p-4 border-b border-border">Horários</th>
              </tr>
            </thead>
            <tbody className="text-lg font-sans">
              <tr className="hover:bg-primary/5 transition-colors border-b border-border/50">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">Musculação</td>
                <td className="p-4 text-muted-foreground">Segunda a Sexta<br/>Sábado<br/>Domingo</td>
                <td className="p-4 text-white">05:30 às 22:00<br/>07:00 às 14:00<br/>08:00 às 12:00</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors border-b border-border/50">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">Muay Thai</td>
                <td className="p-4 text-muted-foreground">Seg, Qua e Sex</td>
                <td className="p-4 text-white">17:00 às 18:00 (1ª turma)<br/>18:00 às 19:00 (2ª turma)</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors border-b border-border/50">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">Karatê</td>
                <td className="p-4 text-muted-foreground">Terça<br/>Quinta<br/>Sexta</td>
                <td className="p-4 text-white">18:00 e 19:00<br/>18:00 e 19:00<br/>19:00 e 20:00</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors border-b border-border/50">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">Jiu-Jitsu</td>
                <td className="p-4 text-muted-foreground">Segunda a Sábado<br/>Segunda a Quinta</td>
                <td className="p-4 text-white">12:00<br/>20:00</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors border-b border-border/50">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">Funcional Kids</td>
                <td className="p-4 text-muted-foreground">Segunda e Quarta</td>
                <td className="p-4 text-white">19:00</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="p-4 font-bold text-primary tracking-wider uppercase">
                  Funcional Adulto
                  <span className="ml-2 inline-block bg-primary/20 text-primary text-xs font-sans px-2 py-0.5 rounded-full tracking-normal normal-case">Oferta</span>
                </td>
                <td className="p-4 text-muted-foreground">Consultar</td>
                <td className="p-4 text-white">Consultar disponibilidade</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4 mb-16">
          <div className="bg-background border border-border p-5 rounded-lg">
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-border pb-2">MUSCULAÇÃO</h3>
            <div className="space-y-2 text-lg">
              <p className="flex justify-between"><span className="text-muted-foreground">Seg-Sex:</span> <span className="text-white">05:30 - 22:00</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Sábado:</span> <span className="text-white">07:00 - 14:00</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Domingo:</span> <span className="text-white">08:00 - 12:00</span></p>
            </div>
          </div>
          
          <div className="bg-background border border-border p-5 rounded-lg">
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-border pb-2">MUAY THAI</h3>
            <p className="text-muted-foreground text-lg mb-1">Segunda, Quarta e Sexta:</p>
            <ul className="text-white text-lg list-disc list-inside pl-4">
              <li>17:00 - 18:00 (1ª turma)</li>
              <li>18:00 - 19:00 (2ª turma)</li>
            </ul>
          </div>

          <div className="bg-background border border-border p-5 rounded-lg">
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-border pb-2">KARATÊ</h3>
            <div className="space-y-2 text-lg">
              <p className="flex justify-between"><span className="text-muted-foreground">Terça e Quinta:</span> <span className="text-white">18:00 e 19:00</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Sexta:</span> <span className="text-white">19:00 e 20:00</span></p>
            </div>
          </div>

          <div className="bg-background border border-border p-5 rounded-lg">
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-border pb-2">JIU-JITSU</h3>
            <div className="space-y-2 text-lg">
              <p className="flex justify-between"><span className="text-muted-foreground">Seg a Sáb:</span> <span className="text-white">12:00</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Seg a Qui:</span> <span className="text-white">20:00</span></p>
            </div>
          </div>

          <div className="bg-background border border-border p-5 rounded-lg">
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-border pb-2">FUNCIONAL KIDS</h3>
            <p className="flex justify-between text-lg"><span className="text-muted-foreground">Seg e Qua:</span> <span className="text-white">19:00</span></p>
          </div>

          <div className="bg-background border-2 border-primary/50 p-5 rounded-lg relative">
            <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">OFERTA</span>
            <h3 className="text-2xl font-display text-primary tracking-widest mb-3 border-b border-primary/30 pb-2">FUNCIONAL ADULTO</h3>
            <p className="text-muted-foreground text-base">Consulte a disponibilidade de horários pelo WhatsApp.</p>
          </div>
        </div>

        {/* General Hours */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border border-primary shrink-0">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-display tracking-widest text-white mb-2">HORÁRIOS DE FUNCIONAMENTO</h3>
            <p className="text-lg md:text-xl text-primary font-bold tracking-wide">
              Seg–Sex: 05:30 às 22:00 <span className="mx-2 hidden md:inline text-muted-foreground">|</span><br className="md:hidden"/> 
              Sáb: 07:00 às 14:00 <span className="mx-2 hidden md:inline text-muted-foreground">|</span><br className="md:hidden"/> 
              Dom: 08:00 às 12:00
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
