import React, { useState } from "react";

export interface ITheme {
  id: number;
  parent_id: number;
  name: string;
}

export interface ISelectedThemes {
  themes: ITheme[];
  toggleTheme(theme: ITheme): void;
  removeTheme(theme: ITheme): void;
  hasTheme(theme: ITheme): boolean;
  clear(): void;
}

const SelectedThemesContext = React.createContext<ISelectedThemes>({
  themes: [],
  toggleTheme: (theme) => {},
  removeTheme: (theme) => {},
  hasTheme: (theme) => {
    return false;
  },
  clear: () => {},
});

function SelectedThemesProvider({ children }: any) {
  const [themes, setThemes] = useState<ITheme[]>([]);

  function toggleTheme(theme: ITheme) {
    const exists = themes.some((_theme: ITheme) => _theme.id === theme.id);
    if (exists) {
      setThemes((prev) => prev.filter((_theme) => _theme.id !== theme.id));
    } else {
      setThemes((prev) => [...prev, theme]);
    }
  }

  function removeTheme(theme: ITheme) {
    setThemes((prev) => prev.filter((_theme) => _theme.id !== theme.id));
  }

  function hasTheme(theme: ITheme) {
    return themes.some((_theme) => _theme.id === theme.id);
  }

  function clear() {
    setThemes(() => []);
  }

  return (
    <SelectedThemesContext.Provider
      value={{ themes, toggleTheme, removeTheme, hasTheme, clear }}
    >
      {children}
    </SelectedThemesContext.Provider>
  );
}

export { SelectedThemesContext, SelectedThemesProvider };
