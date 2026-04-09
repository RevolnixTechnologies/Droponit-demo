import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import droponitLogo from "@/assets/droponit-logo.png";

export default function Header() {
  const { totalItems, setIsCartOpen, justAdded } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#footer" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#home" className="flex items-center gap-2" onClick={() => scrollTo("#home")}>
          <img src={droponitLogo} alt="Droponit" className="h-16 md:h-20 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            l.href.startsWith("/") ? (
              <a key={l.href} href={l.href} className="font-body font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                {l.label}
              </a>
            ) : (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="font-body font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                {l.label}
              </button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative font-body font-medium text-foreground/80 hover:text-primary transition-colors" aria-label="Open cart">
            🛒 Cart
            {totalItems > 0 && (
              <span className={`absolute -top-2 -right-4 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${justAdded !== null ? "animate-pulse-badge" : ""}`}>
                {totalItems}
              </span>
            )}
          </button>

          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(l => (
            l.href.startsWith("/") ? (
              <a key={l.href} href={l.href} className="font-display font-bold text-3xl text-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ) : (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="font-display font-bold text-3xl text-foreground hover:text-primary transition-colors">
                {l.label}
              </button>
            )
          ))}
        </div>
      )}
    </header>
  );
}
