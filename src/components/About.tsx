export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display font-black text-3xl md:text-4xl">Made with love 💖</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Droponit started with one simple belief: every child deserves the joy of a perfect toy.
              We handpick affordable, quality gifts that bring smiles — from cuddly pandas to dazzling
              lights and fun sets. Everything is lovingly packaged and delivered right to your doorstep.
            </p>
            <button onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })} className="font-body font-semibold px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:scale-105 transition-all">
              🛍️ Shop Our Collection
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-3xl flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg, #FFE8E8, #E8F4FF)" }}>
              <span className="text-7xl">🧸</span>
              <span className="absolute top-4 right-6 text-3xl">🎁</span>
              <span className="absolute bottom-6 left-4 text-3xl">🌈</span>
              <span className="absolute top-6 left-6 text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
