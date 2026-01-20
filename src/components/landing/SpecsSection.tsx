import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const specs = [
  { label: 'Material', value: 'Liga de Alumínio (Anti-ferrugem e corrosão).' },
  { label: 'Compatibilidade Celular', value: 'Telas de 3,5” até 6,5” (Largura de 6cm a 11cm).' },
  { label: 'Compatibilidade Guidão', value: 'Diâmetro de 31,8mm (inclui adaptadores para 25,5mm e 22mm).' },
  { label: 'Ideal para', value: 'Motos (ex: CG, XRE, BMW GS, Triumph) e Bicicletas (todas).' },
  { label: 'Peso', value: 'Leve (aprox. 90g-100g).' },
  { label: 'Itens Inclusos', value: '1 Suporte de Celular em Alumínio + Ferramenta de instalação.' },
];

export function SpecsSection() {
  return (
    <section className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">
              Detalhes do Produto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-lg">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="font-bold">{spec.label}:</span> {spec.value}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
