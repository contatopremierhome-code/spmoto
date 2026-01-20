'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { productImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function ProductGallery() {
  const mainImage = productImages.find(img => img.id === 'main');
  const carouselImages = productImages.filter(img => img.id.startsWith('carousel'));
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
        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Conheça cada detalhe do seu novo suporte
          </h2>
          {mainImage && (
            <div
              className="mb-8 w-full max-w-md cursor-pointer"
              onClick={() => openModal(mainImage.imageUrl)}
            >
              <Card>
                <CardContent className="p-0">
                  <Image
                    src={mainImage.imageUrl}
                    alt={mainImage.description}
                    width={600}
                    height={600}
                    className="rounded-lg object-cover aspect-square"
                    data-ai-hint={mainImage.imageHint}
                  />
                </CardContent>
              </Card>
            </div>
          )}

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-2xl"
          >
            <CarouselContent>
              {carouselImages.map(image => (
                <CarouselItem
                  key={image.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    className="p-1 cursor-pointer"
                    onClick={() => openModal(image.imageUrl)}
                  >
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={200}
                          height={200}
                          className="rounded-md object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
              alt="Imagem do produto ampliada"
              width={800}
              height={800}
              className="rounded-lg object-contain max-h-[90vh] w-full"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
