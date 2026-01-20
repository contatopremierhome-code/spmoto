export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center text-center bg-background">
      <div className="w-full bg-primary text-primary-foreground py-2 px-4">
        <p className="font-bold animate-pulse">
          🔥 ATENÇÃO SP: Pedidos feitos hoje são entregues em até 24 HORAS! 🔥
        </p>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Pare de Arriscar sua Ferramenta de Trabalho! O Suporte de Alumínio que{' '}
          <span className="text-primary">NÃO QUEBRA e NÃO TREME.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Esqueça os suportes de plástico que afrouxam. Fixação brutal em alumínio por um preço
          ridículo. Segurança total para seu corre em SP.
        </p>
        <div className="mt-8 shadow-2xl rounded-lg overflow-hidden border-4 border-card">
          <video
            className="w-full h-auto"
            src="https://i.imgur.com/6kkzm0y.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Vídeo demonstrando a estabilidade do suporte de celular em uma moto em movimento."
          />
        </div>
      </div>
    </section>
  );
}
