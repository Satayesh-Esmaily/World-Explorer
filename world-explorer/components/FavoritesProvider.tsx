"use client";

import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

type FavoritesContextValue = {
  favorites: string[];
  isFavorite: (code: string) => boolean;
  toggleFavorite: (code: string) => void;
  clearFavorites: () => void;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const STORAGE_KEY = "world-explorer:favorites";

function safeParse(value: string | null): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export default function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(safeParse(window.localStorage.getItem(STORAGE_KEY)));
  }, []);

  const persist = useCallback((next: string[]) => {
    setFavorites(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const isFavorite = useCallback(
    (code: string) => favorites.includes(code),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (code: string) => {
      const next = favorites.includes(code)
        ? favorites.filter((c) => c !== code)
        : [...favorites, code];
      persist(next);
    },
    [favorites, persist]
  );

  const clearFavorites = useCallback(() => persist([]), [persist]);

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite, clearFavorites }),
    [favorites, isFavorite, toggleFavorite, clearFavorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

