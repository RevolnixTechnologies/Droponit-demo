const features = [
  { icon: "🚚", title: "Fast Delivery", desc: "Ships quickly across India" },
  { icon: "🎁", title: "Gift Ready", desc: "Beautifully wrapped" },
  { icon: "💯", title: "Top Quality", desc: "Curated & tested toys" },
  { icon: "📱", title: "Easy WhatsApp", desc: "Order in one message" },
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(f => (
            <div key={f.title} className="bg-card rounded-2xl p-6 text-center space-y-2 shadow-sm">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="font-display font-bold text-sm">{f.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
