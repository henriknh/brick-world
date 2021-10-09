import { useContext } from "react";
import {
  ISelectedThemes,
  SelectedThemesContext,
  ITheme,
} from "../selected-themes-provider";
import NoSelection from "./no-selection/NoSelection";
import Sets from "./sets/Sets";

export default function SetsHolder() {
  const selectedThemes = useContext<ISelectedThemes>(SelectedThemesContext);

  return (
    <>
      {selectedThemes.themes.length === 0 && <NoSelection />}
      {selectedThemes.themes.map((theme: ITheme) => {
        return <Sets theme={theme} key={theme.id} />;
      })}
    </>
  );
}
