import type { Metadata } from 'next';
import Script from 'next/script';
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
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '902096692069775');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=902096692069775&ev=PageView&noscript=1"/>`,
          }}
        />
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
