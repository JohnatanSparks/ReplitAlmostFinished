export default function Testimonials() {
  const testimonials = [
    {
      image: "/assets/cam.png",
      name: "Cam",
      text: "I'm just a degen flipping meme coins, but this referral system is straight alpha. Maxed out my Axiom account in a month without shilling, just plugged in my link and let it run."
    },
    {
      image: "/assets/sol.mist.png",
      name: "sol.mist",
      text: "As the developer behind axiom.trade, I can confidently recommend Stakepads. It delivers real users, respects our platform's integrity, and helps grow the community the right way."
    },
    {
      image: "/assets/cal.trading.png",
      name: "cal.trading",
      text: "As the co-founder of axiom.trade, I've seen a lot of referral schemes, but Stakepads stands out. It stays compliant with our values and makes growth effortless for partners."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name} avatar`} 
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h5 className="text-lg font-bold mb-3 text-center">{testimonial.name}</h5>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
