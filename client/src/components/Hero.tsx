interface HeroProps {
  onOpenFreeModal: () => void;
  onOpenPremiumModal: () => void;
}

export default function Hero({ onOpenFreeModal, onOpenPremiumModal }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20">
      {/* No need for video or background here as it's handled by FullPageVideo component */}
      
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
