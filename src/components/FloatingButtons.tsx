import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent("Hi! I'm interested in your products.")}`;

  return (
    <>
      {/* WhatsApp FAB - mobile only */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-20 right-4 z-40 px-4 py-3 rounded-full font-body font-semibold text-sm shadow-lg flex items-center gap-2"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
        aria-label="Order on WhatsApp"
      >
        💬 WhatsApp
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-4 z-40 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-lg animate-fade-in"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
