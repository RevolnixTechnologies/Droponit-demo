import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  const whatsappMessage = items.length > 0
    ? encodeURIComponent(
        `Hi Droponit! I'd like to order:\n${items.map(i => `- ${i.product.name} x${i.quantity} = ₹${i.product.price * i.quantity}`).join("\n")}\nTotal: ₹${totalPrice}\nPlease confirm availability.`
      )
    : encodeURIComponent("Hi! I'm interested in your products.");

  // REPLACE WITH ACTUAL NUMBER
  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl animate-slide-in-right md:block hidden overflow-y-auto">
        <CartContent items={items} totalItems={totalItems} totalPrice={totalPrice} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onClose={() => setIsCartOpen(false)} whatsappUrl={whatsappUrl} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-[90vh] bg-card z-50 shadow-2xl animate-slide-in-up md:hidden rounded-t-3xl overflow-y-auto">
        <CartContent items={items} totalItems={totalItems} totalPrice={totalPrice} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onClose={() => setIsCartOpen(false)} whatsappUrl={whatsappUrl} />
      </div>
    </>
  );
}

function CartContent({ items, totalItems, totalPrice, updateQuantity, removeFromCart, onClose, whatsappUrl }: any) {
  return (
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-xl">🛒 Your Cart</h2>
        <button onClick={onClose} className="text-2xl text-muted-foreground hover:text-foreground" aria-label="Close cart">✕</button>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <span className="text-6xl">🛒</span>
          <p className="font-body text-muted-foreground">Your cart is empty</p>
          <button onClick={onClose} className="font-body font-semibold px-6 py-2 rounded-xl bg-primary text-primary-foreground">
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto">
            {items.map((item: any) => (
              <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <span className="text-3xl">{item.product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-medium text-sm truncate">{item.product.name}</p>
                  <p className="font-display font-bold text-primary">₹{item.product.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => item.quantity === 1 ? removeFromCart(item.product.id) : updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold" aria-label="Decrease quantity">−</button>
                  <span className="font-body font-semibold text-sm w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold" aria-label="Increase quantity">+</button>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-lg ml-1" aria-label="Remove item">🗑</button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 mt-4 space-y-3">
            <div className="flex justify-between font-body">
              <span>Items: {totalItems}</span>
              <span className="font-display font-bold text-lg">Total: ₹{totalPrice}</span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full font-body font-semibold text-center py-3 rounded-xl text-accent-foreground transition-all hover:brightness-95" style={{ backgroundColor: "#25D366" }}>
              📱 Order via WhatsApp
            </a>
            <button onClick={onClose} className="w-full font-body font-semibold py-3 rounded-xl border-2 border-border hover:bg-muted/50 transition-all">
              🛒 Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
