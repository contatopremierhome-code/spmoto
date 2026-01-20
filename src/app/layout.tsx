import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { WhatsappButton } from '@/components/landing/WhatsappButton';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SP MotoSafe - Suporte de Alumínio para Motoboys',
  description:
    'O suporte de alumínio ultra resistente para moto e bike. Não quebra, não treme. Entrega em até 24h em São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
