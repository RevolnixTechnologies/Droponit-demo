import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Props {
  products: Product[];
}

export default function VariantGroup({ products }: Props) {
  const { addToCart, justAdded } = useCart();

  return (
    <div className="col-span-2 bg-card rounded-2xl border-2 overflow-hidden animate-fade-in" style={{ borderColor: products[0].bg }}>
      <div className="p-4 text-center font-display font-bold text-lg" style={{ backgroundColor: products[0].bg }}>
        Big Panda 7 Lights 🐼
      </div>
      <div className="grid grid-cols-2 divide-x divide-border">
        {products.map(p => (
          <div key={p.id} className="p-4 space-y-3">
            <div className="flex items-center justify-center h-40 rounded-xl overflow-hidden bg-white" style={{ backgroundColor: "#FFFFFF" }}>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain scale-[1.1]"
                loading="lazy"
              />
            </div>
            {p.badge && (
              <span className="inline-block text-xs font-body font-semibold bg-muted px-2 py-1 rounded-full">{p.badge}</span>
            )}
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-lg text-primary">₹{p.price}</span>
              {p.originalPrice && <span className="font-body text-sm text-muted-foreground line-through">₹{p.originalPrice}</span>}
            </div>
            <button
              onClick={() => addToCart(p)}
              className={`w-full font-body font-semibold text-sm py-2 rounded-xl bg-secondary text-secondary-foreground hover:brightness-95 transition-all ${justAdded === p.id ? "animate-cart-bounce" : ""}`}
              aria-label={`Add ${p.name} to cart`}
            >
              + Add 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
