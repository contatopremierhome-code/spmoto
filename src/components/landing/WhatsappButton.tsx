import Link from 'next/link';
import Image from 'next/image';

export function WhatsappButton() {
  const whatsappLink = "https://wa.me/5511977221645?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20produto!";
  
  return (
    <Link 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 animate-bounce block"
      aria-label="Fale conosco no WhatsApp"
    >
      <Image 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMtatwwSSJTM6ZW0Tqa7ehKEqAIkHhL54Q&s" 
        alt="Ícone do WhatsApp"
        width={64}
        height={64}
        className="rounded-full"
      />
    </Link>
  );
}
