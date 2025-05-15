export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Background video */}
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/3d abstract waves black background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">How it works?</h2>
        <p className="text-lg max-w-4xl mx-auto text-center mb-12">
          Get real Axiom.trade referrals delivered to you, no outreach, no hassle. With our free tier, you'll receive 1 verified referral every month making it easy to start growing your network at zero cost. When you're ready to scale, our premium tier sends 10 high-quality active referrals per month for just 1 SOL. It's a hands-off, performance-driven system designed to grow your earnings. Just drop your link and let us do the rest.
        </p>
      </div>
    </section>
  );
}
