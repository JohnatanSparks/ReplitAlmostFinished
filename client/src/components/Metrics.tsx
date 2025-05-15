export default function Metrics() {
  const metrics = [
    { value: "1500+", title: "Traders Served" },
    { value: "8000+", title: "Referrals Sent" },
    { value: "200+", title: "Happy Clients" }
  ];

  return (
    <section className="py-16 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <div className="container mx-auto px-4">
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
