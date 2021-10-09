import { useContext } from "react";
import {
  ISelectedThemes,
  SelectedThemesContext,
  ITheme,
} from "../../selected-themes-provider";
import styles from "./Chips.module.scss";

export default function Chips() {
  const selectedThemes = useContext<ISelectedThemes>(SelectedThemesContext);

  return (
    <div>
      {selectedThemes.themes.map((theme: ITheme) => {
        return (
          <span
            className={styles.chipsPadding + " tag is-warning is-medium"}
            key={theme.id}
          >
            {theme.name}
            <button
              className="delete is-small"
              onClick={() => selectedThemes.removeTheme(theme)}
            ></button>
          </span>
        );
      })}
    </div>
  );
}
