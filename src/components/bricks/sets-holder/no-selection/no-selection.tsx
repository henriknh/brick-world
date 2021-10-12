import React from "react";
import styles from "./no-selection.module.scss";

export default function NoSelection() {
  return (
    <div className={styles.leftPlacement}>
      <span className="icon">
        <i className={styles.invert + " fa fa-2x fa-level-up-alt"} />
      </span>
      <span className={styles.textPlacement}>Select themes to get started</span>
    </div>
  );
}
