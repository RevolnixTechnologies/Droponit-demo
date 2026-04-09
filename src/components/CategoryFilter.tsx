import { categories } from "@/data/products";

interface Props {
  active: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({ active, onSelect }: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: "none" }}>
      {categories.map(c => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`font-body font-medium text-sm px-5 py-2 rounded-full whitespace-nowrap border-2 transition-all hover:scale-105 ${
            active === c.id
              ? "bg-primary text-primary-foreground border-primary font-semibold"
              : "bg-card text-foreground border-border hover:border-primary/50"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
