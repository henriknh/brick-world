import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <nav
      className={styles.navbar + " navbar is-fixed-top shadow-s"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <Logo />
          <span className={styles.title + " title"}>Brick it</span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Bricks
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
