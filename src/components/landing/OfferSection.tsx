'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck, Truck } from 'lucide-react';

export function OfferSection() {
  return (
    <section className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center text-center gap-6">
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">
            De R$49,90
          </span>
          <span className="text-4xl md:text-5xl font-bold text-primary">
            Por R$20,00
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Button
            size="lg"
            className="w-full text-lg py-6 px-8 uppercase font-bold"
          >
            Comprar com desconto
          </Button>
        </div>

        <div className="flex justify-center items-center gap-8 -mt-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <span>Compra Garantida</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Truck className="h-5 w-5 text-primary" />
            <span>Entrega FULL</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Compra 100% Segura. Estoque Limitado.
        </p>
      </div>
    </section>
  );
}
