import { Button } from '@/components/ui/button';
import { QuantitySelector } from './QuantitySelector';

export function OfferSection() {
  return (
    <section className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-2xl flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-4">
          <p className="text-4xl md:text-5xl font-bold">A partir de R$20,00</p>
        </div>
        
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <p className="font-semibold">Selecione a quantidade:</p>
          <QuantitySelector />
          <Button size="lg" className="w-full text-lg py-6 px-4 uppercase font-bold mt-2 whitespace-normal h-auto">
            Quero meu celular seguro agora + Entrega rápida SP
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Compra 100% Segura. Estoque Limitado.
        </p>
      </div>
    </section>
  );
}
