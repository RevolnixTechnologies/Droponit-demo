import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useShoppingMode } from "@/context/ShoppingModeContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart, justAdded } = useCart();
  const { isWholesale } = useShoppingMode();
  const [quantity, setQuantity] = useState(product.bulkQuantity || 1);
  const isJustAdded = justAdded === product.id;

  const handleAddToCart = () => {
    // Note: CartContext might need update to handle quantity, 
    // but for now we follow existing pattern or extend it if possible.
    // If CartContext only takes products, we might need a loop or update the context.
    addToCart(product);
  };

  if (isWholesale) {
    return (
      <div
        className="group bg-card rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg animate-fade-in flex flex-row h-40"
        style={{ borderColor: product.bg }}
      >
        <div className="relative w-1/3 flex items-center justify-center p-0 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain scale-[1.15] transition-transform duration-500 group-hover:scale-[1.2]"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 z-10 text-[8px] font-body font-bold bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-xs leading-tight line-clamp-2">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-display font-extrabold text-base text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="font-body text-[10px] text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-lg overflow-hidden bg-background">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 py-1 hover:bg-muted text-xs"
                >-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-10 text-center text-xs font-body focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 hover:bg-muted text-xs"
                >+</button>
              </div>
              <span className="text-[10px] font-body text-muted-foreground">Min: {product.bulkQuantity || 1}</span>
            </div>
            <button
              onClick={handleAddToCart}
              className={`w-full font-body font-bold text-[10px] py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:brightness-95 transition-all ${isJustAdded ? "animate-cart-bounce" : ""}`}
            >
              Add Bulk 📦
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl animate-fade-in"
      style={{ borderColor: product.bg }}
    >
      <div className="relative p-0 flex items-center justify-center h-48 overflow-hidden bg-white">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 text-[10px] font-body font-bold bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain scale-[1.1] transition-transform duration-500 group-hover:scale-125"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-display font-bold text-sm leading-tight line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-xl text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full font-body font-semibold text-sm py-2.5 rounded-xl bg-secondary text-secondary-foreground hover:brightness-95 transition-all ${isJustAdded ? "animate-cart-bounce" : ""}`}
          aria-label={`Add ${product.name} to cart`}
        >
          + Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
