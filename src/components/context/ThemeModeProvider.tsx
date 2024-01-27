"use client";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";

export type ThemeMode = "dark" | "light";

const ThemeModeContext = createContext<{
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}>({
  mode: "light",
  setMode: (mode: ThemeMode) => {},
});

export const useMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useLayoutEffect(() => {
    const mode = localStorage.getItem("mode") as ThemeMode || "light";
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(mode);
  }, []);
  
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  const handleSetMode = (mode: ThemeMode) => {
    setMode(mode);
    localStorage.setItem("mode", mode);
  };

  return (
    <ThemeModeContext.Provider value={{ mode, setMode: handleSetMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
