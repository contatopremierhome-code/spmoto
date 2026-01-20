import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, ShieldCheck, Wrench } from 'lucide-react';

const features = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    problem: 'Ruas esburacadas de SP fazem o suporte de plástico tremer e soltar.',
    solution: 'Construção 100% em Liga de Alumínio. Não trepida, não enferruja e aguenta o tranco do dia a dia.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    problem: 'Medo do celular voar do guidão no meio da avenida.',
    solution: 'Garra com fixação mecânica e ajuste firme. Abraça seu celular e só solta quando você quiser.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    problem: 'Preciso trabalhar hoje e meu suporte quebrou.',
    solution: 'Entrega jato em até 24h para São Paulo Capital. Não perca um dia de trabalho.',
  },
];

export function PainSolutionSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que este é o <span className="text-primary">ÚLTIMO</span> suporte que você vai comprar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {feature.icon}
                <CardTitle className="text-destructive text-lg font-semibold">{feature.problem}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground font-semibold">{feature.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
