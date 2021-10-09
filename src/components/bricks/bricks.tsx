import React from "react";
import { SelectedThemesProvider } from "./selected-themes-provider";
import Sets from "./sets-holder/SetsHolder";
import ThemesHandler from "./themes/ThemesHandler";

function Brick() {
  return (
    <SelectedThemesProvider>
      <ThemesHandler />
      <Sets />
    </SelectedThemesProvider>
  );
}

export default Brick;
