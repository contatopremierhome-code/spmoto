import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonialAvatars } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: '1',
    name: 'Marcos S., Motoboy em SP.',
    text: 'Top demais! O suporte é robusto, alumínio mesmo, não é aquelas porcarias de plástico. E a entrega? Comprei de manhã e chegou de tarde aqui na ZL. Salvou meu dia de trampo.',
    avatarId: 'avatar1'
  },
  {
    id: '2',
    name: 'Cliente Satisfeito',
    text: 'Impressionante a qualidade pelo preço. Fixou muito bem na minha XRE. Moro no centro de SP e chegou em menos de 24h. Recomendo!',
    avatarId: 'avatar2'
  },
  {
    id: '3',
    name: 'Cliente Satisfeito',
    text: 'Pode comprar sem medo. Já tive vários que quebraram na buraqueira, esse aqui nem mexe. Entrega super rápida, chegou no mesmo dia.',
    avatarId: 'avatar3'
  },
  {
    id: '4',
    name: 'Cliente Satisfeito',
    text: 'Melhor investimento de 20 reais. Muito seguro, trava bem o celular. O vendedor cumpriu o prometido, chegou voando aqui em SP.',
    avatarId: 'avatar4'
  },
  {
    id: '5',
    name: 'Cliente Satisfeito',
    text: 'Sensacional. O material é de primeira, passa muita confiança. A entrega foi a mais rápida que já vi, parabéns pela agilidade.',
    avatarId: 'avatar5'
  },
  {
    id: '6',
    name: 'Cliente Satisfeito',
    text: 'Produto excelente, firme e fácil de instalar. Chegou rapidinho aqui na zona sul, pedi ontem a noite e chegou hoje de manhã.',
    avatarId: 'avatar6'
  },
];

const FiveStars = () => (
  <div className="flex gap-0.5 text-accent">
    <Star className="w-5 h-5 fill-current" />
    <Star className="w-5 h-5 fill-current" />
    <Star className="w-5 h-5 fill-current" />
    <Star className="w-5 h-5 fill-current" />
    <Star className="w-5 h-5 fill-current" />
  </div>
);

export function TestimonialsSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quem já comprou e recebeu em SP aprovou:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const avatar = testimonialAvatars.find(a => a.id === testimonial.avatarId);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  {avatar && (
                     <Image
                        src={avatar.imageUrl}
                        alt={`Avatar de ${testimonial.name}`}
                        width={48}
                        height={48}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                      />
                  )}
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <FiveStars />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
