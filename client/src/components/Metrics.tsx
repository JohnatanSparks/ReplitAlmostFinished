import VideoBackground from "./VideoBackground";

export default function Metrics() {
  const metrics = [
    { value: "1500+", title: "Traders Served" },
    { value: "8000+", title: "Referrals Sent" },
    { value: "200+", title: "Happy Clients" }
  ];

  return (
    <section className="relative py-16 text-white">
      {/* Dark overlay for better text legibility */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      
      {/* Using the same VideoBackground component for visual consistency */}
      <div className="absolute inset-0 z-[-1]">
        <VideoBackground />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <h4 className="text-2xl font-bold">{metric.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
