import { Logotype } from "../../modules/logotype";
import { NavCard } from "../../modules/navigation/navcards";
import styles from "./main.module.css";
export const MainPage = () => {
  return (
    <section className={styles.mainContainer}>
      <Logotype />
      <NavCard />
    </section>
  );
};
