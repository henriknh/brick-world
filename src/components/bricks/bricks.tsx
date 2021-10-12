import React from "react";
import { SelectedThemesProvider } from "./selected-themes-provider";
import SetsHolder from "./sets-holder/sets-holder";
import ThemesHandler from "./themes/themes-handler";

function Brick() {
  return (
    <SelectedThemesProvider>
      <ThemesHandler />
      <SetsHolder />
    </SelectedThemesProvider>
  );
}

export default Brick;
