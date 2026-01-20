import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-8 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Não perca mais tempo com suportes frágeis.</h3>
          <p className="text-xl md:text-2xl font-bold mt-2">A partir de <span className="text-primary">R$20,00</span></p>
        </div>
        <Button size="lg" className="text-lg py-6 px-8 uppercase font-bold whitespace-normal h-auto">
          Garantir meu suporte agora
        </Button>
        <div className="text-center text-muted-foreground text-sm mt-4">
          <p>SP MotoSafe - CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-4 justify-center mt-2">
            <Link href="#" className="hover:underline">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:underline">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
