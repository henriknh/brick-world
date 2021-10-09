import React, { useContext } from "react";
import SelectedThemesContext, {
  SelectedThemes,
} from "../bricks/selected-themes-context";
import styles from "./Sets.module.scss";

export default function Sets() {
  const selectedThemes = useContext<SelectedThemes>(SelectedThemesContext);

  return (
    <>
      {selectedThemes.themes.length === 0 && (
        <div className={styles.Sets} data-testid="Sets">
          <span className="icon">
            <i className={styles.invert + " fa fa-2x fa-level-up-alt"} />
          </span>
          Sets Component
        </div>
      )}
      {selectedThemes.themes.length > 0 && <div>result</div>}
    </>
  );
}
