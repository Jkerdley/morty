import { Outlet, useParams } from "react-router-dom";
import styles from "./heroes.module.css";
import { HeroList } from "../../widgets";

export const HeroesPage = () => {
  const { id } = useParams();
  return (
    <div className={styles.heroesPage}>{id ? <Outlet /> : <HeroList />}</div>
  );
};
