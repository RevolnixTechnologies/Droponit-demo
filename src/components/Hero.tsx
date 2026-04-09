import ModeSwitcher from "./ModeSwitcher";

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[80vh] pt-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(0 100% 71% / 0.15), hsl(45 100% 62% / 0.2))" }}>
      {/* Floating decorations */}
      <div className="absolute top-20 right-10 text-5xl animate-float opacity-60 select-none">🧸</div>
      <div className="absolute top-40 left-10 text-4xl animate-float-delayed opacity-50 select-none">🎁</div>
      <div className="absolute bottom-40 right-20 text-3xl animate-float opacity-40 select-none">🌈</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float-delayed opacity-50 select-none">⭐</div>
      <div className="absolute top-32 right-1/3 text-3xl animate-float opacity-30 select-none">🎀</div>

      <div className="container mx-auto px-4 pt-32 pb-20 md:py-0">
        <div className="mb-12 flex justify-start md:justify-start">
          <ModeSwitcher />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Toys That Spark<br />Joy <span className="inline-block animate-float">🌟</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md">
              Affordable gifts & toys for every little one. Delivered with love across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToProducts} className="font-body font-semibold px-8 py-3 rounded-2xl text-primary-foreground transition-all hover:scale-105 hover:shadow-lg" style={{ background: "linear-gradient(135deg, hsl(0 100% 71%), hsl(45 100% 62%))" }}>
                Shop Now
              </button>
              <button onClick={scrollToProducts} className="font-body font-semibold px-8 py-3 rounded-2xl border-2 border-secondary text-foreground hover:bg-secondary/20 transition-all hover:scale-105">
                View All Products
              </button>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 text-sm font-body text-muted-foreground">
              <span>🚚 Fast Delivery</span>
              <span>💯 Quality Assured</span>
              <span>🎁 Gift Ready</span>
              <span>🏷️ Best Prices</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-72 h-72 rounded-3xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FFE8E8, #FFF3E8)" }}>
              <span className="text-8xl">🐼</span>
              <span className="absolute top-4 right-4 text-3xl animate-float">⭐</span>
              <span className="absolute bottom-4 left-4 text-2xl animate-float-delayed">💖</span>
              <span className="absolute top-8 left-8 text-2xl animate-float">✨</span>
              <span className="absolute bottom-8 right-8 text-3xl animate-float-delayed">🌈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="hsl(34 100% 97%)" />
        </svg>
      </div>
    </section>
  );
}
