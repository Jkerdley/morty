import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <NavLink className={styles.navLink} to={"/"}>
          На главную
        </NavLink>
        <NavLink className={styles.navLink} to={"/heroes"}>
          Герои
        </NavLink>
        <NavLink className={styles.navLink} to={"/episodes"}>
          Эпизоды
        </NavLink>
      </div>
    </nav>
  );
};
