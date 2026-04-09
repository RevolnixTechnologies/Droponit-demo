import { createContext, useContext, useState, ReactNode } from "react";

type ShoppingMode = "retail" | "wholesale";

interface ShoppingModeContextType {
    mode: ShoppingMode;
    setMode: (mode: ShoppingMode) => void;
    isWholesale: boolean;
}

const ShoppingModeContext = createContext<ShoppingModeContextType | undefined>(undefined);

export function ShoppingModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ShoppingMode>("retail");

    const isWholesale = mode === "wholesale";

    return (
        <ShoppingModeContext.Provider value={{ mode, setMode, isWholesale }}>
            {children}
        </ShoppingModeContext.Provider>
    );
}

export function useShoppingMode() {
    const ctx = useContext(ShoppingModeContext);
    if (!ctx) throw new Error("useShoppingMode must be used within ShoppingModeProvider");
    return ctx;
}
