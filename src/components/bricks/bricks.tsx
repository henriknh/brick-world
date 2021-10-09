import React, { useState } from "react";
import Sets from "../Sets/Sets";
import ThemesHandler from "../Themes/ThemesHandler";
import SelectedThemesContext, { Theme } from "./selected-themes-context";

function Brick() {
  const [themes, setThemes] = useState<Theme[]>([]);

  return (
    <SelectedThemesContext.Provider
      value={{
        themes: themes,
        addTheme: (theme: Theme) => setThemes([...themes, theme]),
        removeTheme: (theme: Theme): Theme => {
          const idx = themes.findIndex((_theme) => _theme.id === theme.id);
          const removed = themes.splice(idx, 1);
          setThemes(themes);
          return removed[0];
        },
        toggleTheme: (theme: Theme) => {
          const isSelected = themes.findIndex(
            (selection: Theme) => selection.id === theme.id
          );
          if (isSelected !== -1) {
            themes.splice(isSelected, 1);
          } else {
            themes.push(theme);
          }
          setThemes(themes);
        },
        clear: () => setThemes([]),
        hasTheme: (theme: Theme) =>
          themes.some((_theme: Theme) => _theme.id === theme.id),
      }}
    >
      <ThemesHandler />
      <Sets />
    </SelectedThemesContext.Provider>
  );
}

export default Brick;
