export default function Marquee() {
  const text = "🎉 Free delivery on orders above ₹499  ·  🎁 Gift wrapping available  ·  ⭐ 17 amazing products  ·  🌈 New arrivals coming soon  ·  🐼 Kids love Droponit  ·  ";

  return (
    <div className="bg-navy overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap inline-flex">
        <span className="font-body text-sm tracking-wide text-secondary">{text}{text}</span>
      </div>
    </div>
  );
}
