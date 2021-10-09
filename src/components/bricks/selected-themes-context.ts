import React from "react";

export interface Theme {
  id: number;
  parent_id: number;
  name: string;
}

export interface SelectedThemes {
    themes: Theme[];
    addTheme(theme: Theme): void; 
    removeTheme(theme: Theme): Theme; 
    toggleTheme(theme: Theme): void; 
    clear(): void; 
    hasTheme(theme: Theme): boolean;
}

const SelectedThemesContext = React.createContext<SelectedThemes>({
    themes: [],
    addTheme: (theme: Theme): void => {},
    removeTheme: (theme: Theme): Theme => { return {} as Theme; },
    toggleTheme: (theme: Theme): void => {},
    clear: () => {},
    hasTheme: (theme: Theme) => false,
});

export default SelectedThemesContext;