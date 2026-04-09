import { useShoppingMode } from "@/context/ShoppingModeContext";
import { cn } from "@/lib/utils";
import { Package, ShoppingBag } from "lucide-react";

export default function ModeSwitcher() {
    const { mode, setMode } = useShoppingMode();

    return (
        <div className="flex items-center justify-center p-1 bg-muted rounded-2xl w-fit mx-auto shadow-inner border">
            <button
                onClick={() => setMode("retail")}
                className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300",
                    mode === "retail"
                        ? "bg-white text-navy shadow-sm"
                        : "text-muted-foreground hover:text-navy"
                )}
            >
                <ShoppingBag className={cn("w-4 h-4", mode === "retail" ? "text-primary" : "")} />
                Retail Buy
            </button>
            <button
                onClick={() => setMode("wholesale")}
                className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300",
                    mode === "wholesale"
                        ? "bg-white text-navy shadow-sm"
                        : "text-muted-foreground hover:text-navy"
                )}
            >
                <Package className={cn("w-4 h-4", mode === "wholesale" ? "text-primary" : "")} />
                Wholesale Buy
            </button>
        </div>
    );
}
