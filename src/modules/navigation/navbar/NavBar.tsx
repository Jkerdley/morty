import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <NavLink
                    className={styles.navLink}
                    to={"/"}
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                    })}
                >
                    На главную
                </NavLink>
                <NavLink
                    className={styles.navLink}
                    to={"/heroes"}
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                    })}
                >
                    Герои
                </NavLink>
                <NavLink
                    className={styles.navLink}
                    to={"/locations"}
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                    })}
                >
                    Локации
                </NavLink>
                <NavLink
                    className={styles.navLink}
                    to={"/episodes"}
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                    })}
                >
                    Эпизоды
                </NavLink>
            </div>
        </nav>
    );
};
