import Link from 'next/link';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c101.2 0 183.1 81.9 183.1 183.1 0 33.3-8.9 65.3-25.3 93.3l-18.1 30.1 33.9 113.1-110.8-30.6-28.1 16.7c-28.5 15.8-60.9 24.4-94.4 24.4-101.2 0-183.1-81.9-183.1-183.1 0-101.2 81.9-183.1 183.1-183.1zm111.4 126.2c-5.7-2.9-33.4-16.5-38.6-18.4s-9-2.9-12.8 2.9c-3.8 5.7-14.6 18.4-17.9 22.1s-6.6 4.3-12.3 1.4c-32.9-17-54.8-29.8-75.2-54.8-5.7-6.9-1.2-10.7 1.8-13.5s5.7-6.6 8.5-9.9c2.9-3.2 4.3-5.7 1.4-9.9s-14.6-35.1-20-48.1c-5.4-12.8-10.8-11.1-14.6-11.3-3.6-.2-7.8-.2-12.1-.2s-11.3 1.4-17 6.9c-5.7 5.7-22.1 21.8-22.1 53.2 0 31.4 22.6 61.6 25.8 65.9 3.2 4.3 44.1 68.6 108.5 95.8 15.9 6.6 28.5 10.6 38.6 13.5 10.1 2.9 19.2 2.5 26.5-.4 8.2-3.2 25.2-10.3 28.7-20.2 3.6-9.9 3.6-18.4 2.5-20.2z"
      ></path>
    </svg>
);


export function WhatsappButton() {
  const whatsappLink = "https://wa.me/5511977221645?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20produto!";
  
  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" passHref>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
      </Button>
    </Link>
  );
}
