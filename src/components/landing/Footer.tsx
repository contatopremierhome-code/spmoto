import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center text-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://i.imgur.com/rRRi5kX.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Vídeo de um motoboy utilizando o celular no suporte em movimento."
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 px-4">
        <h3 className="text-3xl md:text-4xl font-bold">
          Não perca mais tempo com suportes frágeis.
        </h3>
        <p className="text-2xl md:text-3xl font-bold mt-2">
          A partir de <span className="text-primary">R$20,00</span>
        </p>
        <Button size="lg" className="mt-8 text-lg py-6 px-8 uppercase font-bold">
          Comprar
        </Button>
      </div>
    </footer>
  );
}
