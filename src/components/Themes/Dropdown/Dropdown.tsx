import classNames from "classnames";
import { ajax } from "rxjs/ajax";
import { useContext, useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";
import SelectedThemesContext, {
  SelectedThemes,
  Theme,
} from "../../bricks/selected-themes-context";

export default function Dropdown() {
  const [active, setActive] = useState(false);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const selectedThemes = useContext<SelectedThemes>(SelectedThemesContext);

  const pageSize = 10;

  const secret = "cef91563c41612c871ed256c1a22e628";
  useEffect(() => {
    ajax
      .getJSON(
        `https://rebrickable.com/api/v3/lego/themes/?key=${secret}&page_size=${pageSize}&page=${page}`
      )
      .pipe()
      .subscribe((res: any) => {
        setCount(res.count);
        setThemes(res.results);
      });
  }, [page]);

  const dropdownClass = classNames({
    dropdown: true,
    "is-active": active,
  });

  return (
    <div className={dropdownClass}>
      <div className="dropdown-trigger" onClick={() => setActive(!active)}>
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Select themes</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        className={styles.dropdownMenu + " dropdown-menu"}
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          {themes.map((theme: Theme) => (
            <label className="dropdown-item checkbox" key={theme.id}>
              <input
                type="checkbox"
                className={styles.checkbox}
                defaultChecked={selectedThemes.hasTheme(theme)}
                onChange={() => selectedThemes.toggleTheme(theme)}
              />
              {theme.name}
            </label>
          ))}
          <>
            <hr className="dropdown-divider" />
            <div className="dropdown-item columns">
              <div className="column is-narrow">
                <button
                  className="button is-white"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  <span className="icon">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                </button>
              </div>
              <div className={styles.pageText + " column is-align-self-center"}>
                {page} / {Math.ceil(count / pageSize)}
              </div>
              <div className="column is-narrow">
                <button
                  className="button is-white"
                  disabled={page >= count / pageSize}
                  onClick={() => setPage(page + 1)}
                >
                  <span className="icon">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </>
          {selectedThemes.themes.length > 0 && (
            <>
              <hr className="dropdown-divider" />
              <button
                className="button is-link is-inverted w-full"
                onClick={() => selectedThemes.clear()}
              >
                Clear
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
