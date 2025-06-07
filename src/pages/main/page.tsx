import { Logotype, NavCard } from "../../widgets";
import styles from "./main.module.css";
export const MainPage = () => {
  return (
    <section className={styles.mainContainer}>
      <Logotype />
      <NavCard />
    </section>
  );
};
