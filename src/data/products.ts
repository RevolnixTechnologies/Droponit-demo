export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  emoji: string;
  image: string;
  bg: string;
  category: string[];
  badge: string;
  variantGroup?: string;
  isWholesale?: boolean;
  bulkQuantity?: number;
}

const baseUrl = import.meta.env.BASE_URL;

export const products: Product[] = [
  { id: 1, name: "Panda with Love Box", price: 79, emoji: "🐼❤️", image: `${baseUrl}product-image/panda-love-box.png`, bg: "#FFE8E8", category: ["soft-toys", "gift-boxes"], badge: "💝 Popular" },
  { id: 2, name: "Mickey Mouse Watch Set", price: 299, emoji: "⌚🐭", image: `${baseUrl}product-image/mickey-watch-set.png`, bg: "#E8F4FF", category: ["accessories"], badge: "⭐ Trending" },
  { id: 3, name: "Fun Rainbow Set", price: 359, emoji: "🌈", image: `${baseUrl}product-image/fun-rainbow-set.png`, bg: "#FFF3E8", category: ["sets"], badge: "🌈 Fun Pick" },
  { id: 4, name: "Princess Set", price: 269, emoji: "👑", image: `${baseUrl}product-image/princess-set.png`, bg: "#F8E8FF", category: ["sets"], badge: "👑 Girls Love" },
  { id: 5, name: "Happy Full Set", price: 249, emoji: "🎉", image: `${baseUrl}product-image/happy-full-set.png`, bg: "#E8FFE8", category: ["sets"], badge: "🎉 Best Value" },
  { id: 6, name: "Big Panda 7 Lights (First Quality)", price: 299, emoji: "🐼✨", image: `${baseUrl}product-image/big-panda-light.png`, bg: "#FFF0E8", category: ["soft-toys", "lights"], badge: "⭐ First Quality", variantGroup: "big-panda" },
  { id: 7, name: "Big Panda 7 Lights (Second Quality)", price: 259, originalPrice: 299, emoji: "🐼💡", image: `${baseUrl}product-image/big-panda-light.png`, bg: "#FFF0E8", category: ["soft-toys", "lights"], badge: "💰 Budget Pick", variantGroup: "big-panda" },
  { id: 8, name: "Sand Timer 4 Pillar", price: 99, emoji: "⏳", image: `${baseUrl}product-image/sand-timer-pro.png`, bg: "#FFFCE8", category: ["timers"], badge: "" },
  { id: 9, name: "Sand Timer 3 Pillar", price: 69, emoji: "⌛", image: `${baseUrl}product-image/sand-timer-pro.png`, bg: "#FFFCE8", category: ["timers"], badge: "🏷️ Great Price" },
  { id: 10, name: "Love Box Small with Design", price: 70, emoji: "💝", image: `${baseUrl}product-image/love-box-red.png`, bg: "#FFE8F4", category: ["gift-boxes"], badge: "🎁 Gift Ready" },
  { id: 11, name: "Love Box Red", price: 59, emoji: "❤️", image: `${baseUrl}product-image/love-box-red.png`, bg: "#FFE8E8", category: ["gift-boxes"], badge: "🔥 Best Price" },
  { id: 12, name: "Side Bag", price: 499, emoji: "🎒", image: `${baseUrl}product-image/side-bag-kids.png`, bg: "#E8F0FF", category: ["bags"], badge: "✨ Premium" },
  { id: 13, name: "Side Bag Plain Colour", price: 399, emoji: "👜", image: `${baseUrl}product-image/side-bag-kids.png`, bg: "#F0E8FF", category: ["bags"], badge: "" },
  { id: 14, name: "Sleeping Cat", price: 199, emoji: "🐱", image: `${baseUrl}product-image/sleeping-cat.png`, bg: "#E8FFFA", category: ["soft-toys"], badge: "😻 Adorable" },
  { id: 15, name: "3D Visual Light", price: 190, emoji: "🔮", image: `${baseUrl}product-image/3d-visual-light.png`, bg: "#F0E8FF", category: ["lights"], badge: "✨ Cool Gift" },
  { id: 16, name: "Medium Size Light Panda", price: 79, emoji: "🐼🌙", image: `${baseUrl}product-image/medium-light-panda.png`, bg: "#FFF8E8", category: ["soft-toys", "lights"], badge: "" },
  { id: 17, name: "Medium Size Light Panda with Love", price: 89, emoji: "🐼💖", image: `${baseUrl}product-image/medium-light-panda.png`, bg: "#FFE8F0", category: ["soft-toys", "lights"], badge: "💖 Cute" },
  // Wholesale Bundles
  { id: 101, name: "Panda Love Box (Bulk Pack)", price: 1656, originalPrice: 1896, emoji: "🐼❤️", image: `${baseUrl}product-image/panda-love-box.png`, bg: "#FFE8E8", category: ["wholesale", "gift-boxes"], badge: "📦 Box of 24", isWholesale: true, bulkQuantity: 24 },
  { id: 102, name: "Mickey Mouse Watch Set (Bundle)", price: 3228, originalPrice: 3588, emoji: "⌚🐭", image: `${baseUrl}product-image/mickey-watch-set.png`, bg: "#E8F4FF", category: ["wholesale", "accessories"], badge: "📦 Box of 12", isWholesale: true, bulkQuantity: 12 },
  { id: 103, name: "LED Spinner (Merchant Pack)", price: 15120, originalPrice: 19000, emoji: "🐼✨", image: `${baseUrl}product-image/led-spinner.png`, bg: "#FFF0E8", category: ["wholesale", "lights"], badge: "🚚 Carton of 100", isWholesale: true, bulkQuantity: 100 },
  { id: 104, name: "Sand Timer Pro (Retailer Kit)", price: 3840, originalPrice: 4800, emoji: "⏳", image: `${baseUrl}product-image/sand-timer-pro.png`, bg: "#FFFCE8", category: ["wholesale", "timers"], badge: "📦 Pack of 48", isWholesale: true, bulkQuantity: 48 },
];

export const categories = [
  { id: "all", label: "🌟 All" },
  { id: "soft-toys", label: "🧸 Soft Toys" },
  { id: "timers", label: "⏳ Timers" },
  { id: "lights", label: "💡 Lights" },
  { id: "bags", label: "🎒 Bags" },
  { id: "gift-boxes", label: "💝 Gift Boxes" },
  { id: "accessories", label: "⌚ Accessories" },
  { id: "sets", label: "🎁 Sets" },
];

export interface CartItem {
  product: Product;
  quantity: number;
}
