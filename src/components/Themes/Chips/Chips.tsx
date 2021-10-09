import { useContext } from "react";
import SelectedThemesContext, {
  SelectedThemes,
} from "../../bricks/selected-themes-context";

export default function Chips() {
  const selectedThemes = useContext<SelectedThemes>(SelectedThemesContext);

  return (
    <div>
      {selectedThemes.themes.map((theme) => {
        return (
          <span className="tag is-warning is-medium" key={theme.id}>
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
