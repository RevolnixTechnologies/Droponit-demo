import { useState } from "react";
import { products } from "@/data/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import VariantGroup from "./VariantGroup";
import { useShoppingMode } from "@/context/ShoppingModeContext";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { isWholesale } = useShoppingMode();

  const filteredByMode = isWholesale
    ? products.filter(p => p.isWholesale)
    : products.filter(p => !p.isWholesale);

  const filtered = activeCategory === "all"
    ? filteredByMode
    : filteredByMode.filter(p => p.category.includes(activeCategory));

  const bigPandaProducts = filtered.filter(p => p.variantGroup === "big-panda");
  const regularProducts = filtered.filter(p => !p.variantGroup);
  const showBigPanda = bigPandaProducts.length === 2;

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display font-black text-3xl md:text-4xl mb-2">✨ Our Products</h2>
          <p className="font-body text-muted-foreground">Tap on any item to add to your cart</p>
        </div>

        <div className="mb-8">
          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
        </div>

        <p className="font-body text-sm text-muted-foreground mb-4">
          Showing {filtered.length} of {filteredByMode.length} products
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">😔</p>
            <p className="font-body text-muted-foreground">No products in this category yet — check back soon!</p>
          </div>
        ) : (
          <div className={`grid gap-3 md:gap-4 lg:gap-5 ${isWholesale
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}>
            {showBigPanda && <VariantGroup products={bigPandaProducts} />}
            {regularProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
