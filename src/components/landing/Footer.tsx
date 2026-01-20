import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          Não perca mais tempo com suportes frágeis.
        </h3>
        <p className="text-2xl md:text-3xl font-bold mt-2">
          A partir de <span className="text-primary">R$20,00</span>
        </p>
        <Button size="lg" className="mt-8 text-lg py-6 px-8 uppercase font-bold">
          Comprar
        </Button>
        <div className="mt-12 w-full max-w-3xl shadow-2xl rounded-lg overflow-hidden border-4 border-card">
          <video
            className="w-full h-auto"
            src="https://i.imgur.com/rRRi5kX.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Vídeo de um motoboy utilizando o celular no suporte em movimento."
          />
        </div>
      </div>
    </footer>
  );
}
