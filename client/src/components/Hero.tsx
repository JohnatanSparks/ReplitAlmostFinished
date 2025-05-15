interface HeroProps {
  onOpenFreeModal: () => void;
  onOpenPremiumModal: () => void;
}

export default function Hero({ onOpenFreeModal, onOpenPremiumModal }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {/* Using an iframe with autoplay for the YouTube video background */}
        <iframe
          src="https://www.youtube.com/embed/G7GSu_MQM7Y?autoplay=1&mute=1&loop=1&playlist=G7GSu_MQM7Y&controls=0&showinfo=0&vq=hd1080&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
          title="Background Video"
        ></iframe>
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Stakepads</h1>
        <p className="text-xl md:text-2xl mb-8">Instant Referrals for axiom.trade Trenchers</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button 
            onClick={onOpenFreeModal}
            className="px-6 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300">
            Try for free
          </button>
          <button 
            onClick={onOpenPremiumModal}
            className="px-6 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300">
            Buy premium
          </button>
        </div>
      </div>
    </section>
  );
}
