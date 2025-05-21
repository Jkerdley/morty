import { Outlet } from "react-router-dom";
import { NavBar } from "../modules/navigation";
import styles from "./layout.module.css";
export const Layout = () => {
  return (
    <main className={styles.mainLayout}>
      <header>
        <NavBar />
      </header>
      <section className={styles.mainContent}>
        <Outlet />
      </section>
    </main>
  );
};
