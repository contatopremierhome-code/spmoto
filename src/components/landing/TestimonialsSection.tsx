'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonialAvatars } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const testimonials = [
  {
    id: '1',
    name: 'Ricardo Alves',
    text: 'Top demais! O suporte é robusto, alumínio mesmo, não é aquelas porcarias de plástico. E a entrega? Comprei de manhã e chegou de tarde aqui na ZL. Salvou meu dia de trampo.',
    avatarId: 'avatar1',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxftowhc995eee.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxftowko4drz0a.webp',
    ],
  },
  {
    id: '2',
    name: 'João Ferreira',
    text: 'Impressionante a qualidade pelo preço. Fixou muito bem na minha Fazer 250. Moro no centro de SP e chegou em menos de 24h. Recomendo!',
    avatarId: 'avatar2',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lz20vnqz08t199.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lz20vnqyyu8l0e.webp',
    ],
  },
  {
    id: '3',
    name: 'Bruna Costa',
    text: 'Pode comprar sem medo. Já tive vários que quebraram na buraqueira, esse aqui nem mexe. Entrega super rápida, chegou no mesmo dia.',
    avatarId: 'avatar3',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-m8whu7d11lbt79.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-m8whu7d0oxs2b1.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-m8whu7d1h1kpe1.webp',
    ],
  },
  {
    id: '4',
    name: 'Lucas Martins',
    text: 'Melhor investimento de 20 reais. Muito seguro, trava bem o celular. O vendedor cumpriu o prometido, chegou voando aqui em SP.',
    avatarId: 'avatar4',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxpu4rnudoe789.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxpu4rnuc9tr9b.webp',
    ],
  },
  {
    id: '5',
    name: 'Juliana Pereira',
    text: 'Sensacional. O material é de primeira, passa muita confiança. A entrega foi a mais rápida que já vi, parabéns pela agilidade.',
    avatarId: 'avatar5',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lw7lqx8xzxklb0.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lw7lqxbzu25ye0.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lw7lqx8nyxsi39.webp',
    ],
  },
  {
    id: '6',
    name: 'Felipe Lima',
    text: 'Produto excelente, firme e fácil de instalar. Chegou rapidinho aqui na zona sul, pedi ontem a noite e chegou hoje de manhã.',
    avatarId: 'avatar6',
    reviewImages: [
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lx9onsxz8y2eb7.webp',
      'https://down-br.img.susercontent.com/file/br-11134103-7r98o-lx9onsxzacmu9b.webp',
    ],
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Avaliações dos nossos clientes:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(testimonial => {
              const avatar = testimonialAvatars.find(
                a => a.id === testimonial.avatarId
              );
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
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-muted-foreground">
                      "{testimonial.text}"
                    </p>
                    {testimonial.reviewImages &&
                      testimonial.reviewImages.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                          {testimonial.reviewImages.map((img, index) => (
                            <Image
                              key={index}
                              src={img}
                              alt={`Imagem da avaliação de ${testimonial.name} ${
                                index + 1
                              }`}
                              width={70}
                              height={70}
                              className="rounded-md object-cover cursor-pointer aspect-square"
                              onClick={() => openModal(img)}
                            />
                          ))}
                        </div>
                      )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={open => !open && closeModal()}
        >
          <DialogContent className="max-w-3xl p-0 border-0 bg-transparent">
            <Image
              src={selectedImage}
              alt="Imagem da avaliação ampliada"
              width={600}
              height={600}
              quality={70}
              className="rounded-lg object-contain max-h-[90vh] w-full"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
