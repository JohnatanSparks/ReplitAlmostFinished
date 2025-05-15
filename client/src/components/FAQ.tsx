export default function FAQ() {
  const faqs = [
    {
      question: "What support do you offer?",
      answer: "For any questions, concerns or support you can join our telegram group t.me/stakepads"
    },
    {
      question: "How do referrals work?",
      answer: "Simply provide your referral link and we'll ensure real users click through and sign up using your link, generating commission for you automatically."
    },
    {
      question: "What's the difference between free and premium?",
      answer: "Free tier provides 1 verified referral monthly, while premium delivers 10 high-quality active referrals per month for 1 SOL."
    },
    {
      question: "Are these real users?",
      answer: "Yes, all referrals are genuine users who actively trade on the platform, ensuring you receive actual commission rewards."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 p-5 rounded-lg border-4 border-[#d3d3d3] bg-gray-50 shadow-sm">
              <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#d3d3d3]">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
