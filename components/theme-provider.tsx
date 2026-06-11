"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const urlTheme = new URLSearchParams(window.location.search).get("theme");
  if (urlTheme === "light" || urlTheme === "dark") {
    return urlTheme;
  }

  try {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme === "light" || localTheme === "dark") {
      return localTheme;
    }
  } catch {
    // Ignore unavailable storage.
  }

  const cookieTheme = document.cookie
    .split("; ")
    .find((item) => item.startsWith("theme="))
    ?.split("=")[1];

  if (cookieTheme === "light" || cookieTheme === "dark") {
    return cookieTheme;
  }

  return null;
}

function resolveInitialTheme(): Theme {
  const storedTheme = resolveStoredTheme();

  if (storedTheme) {
    return storedTheme;
  }

  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function persistTheme(theme: Theme) {
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Ignore unavailable storage.
  }

  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme: Theme) => {
        applyTheme(nextTheme);
        persistTheme(nextTheme);
        setThemeState(nextTheme);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}
