import droponitLogo from "@/assets/droponit-logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-navy pt-12 pb-6">
      {/* Wavy top */}
      <div className="absolute -top-[1px] left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 20C360 40 720 0 1080 20C1260 30 1350 10 1440 20V40H0V20Z" fill="#1A1A2E" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center space-y-6">
        <div className="flex flex-col items-center">
          <img src={droponitLogo} alt="Droponit" className="h-16 md:h-20 w-auto object-contain mb-2" />
          <p className="font-body text-sm text-secondary/60">"Toys that spark joy"</p>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#25D366" }} aria-label="WhatsApp">📱</a>
          <a href="#" className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center text-lg" aria-label="Instagram">📸</a>
          <a href="#" className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center text-lg" aria-label="Facebook">📘</a>
        </div>

        <div className="flex justify-center gap-4 font-body text-sm text-secondary/70">
          {["Home", "Products", "About", "Contact"].map(l => (
            <button key={l} onClick={() => document.querySelector(`#${l.toLowerCase() === "contact" ? "footer" : l.toLowerCase() === "home" ? "home" : l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })} className="hover:text-secondary transition-colors">
              {l}
            </button>
          ))}
        </div>

        <p className="font-body text-xs text-secondary/40">© 2025 Droponit. Made with ❤️ in India</p>
      </div>
    </footer>
  );
}
