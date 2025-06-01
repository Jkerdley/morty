import { DataErrorBoundary } from "../../../shared/components";
import { useFetchItem } from "../../../shared/hooks";
import type { Hero } from "../../../shared/types/hero.types";
import { Loader } from "../../../shared/ui/loaders/Loader";
import styles from "./heroPage.module.css";
import { useParams } from "react-router-dom";

export const HeroPage = () => {
  const { id } = useParams();

  const {
      error,
      isLoading,
      data: hero,
    } = useFetchItem<Hero>(id, "https://rickandmortyapi.com/api/character");

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о герое"
    >
      {isLoading && <Loader/>}
      {hero ? (
        <article className={styles.heroPageContainer}>
          <div className={styles.infoContainer}>
            <p className={styles.heroName}>Имя героя: {hero.name}</p>
            <div className={styles.heroInfo}>
              <p>Пол: {hero.gender}</p>
              {hero.type && <p>Тип: {hero.type}</p>}
              <p>Статус: {hero.status}</p>
              <p>Особенности: {hero.species}</p>
            </div>
          </div>
          <img
            className={styles.heroImage}
            src={hero.image}
            alt={hero.name}
          />
        </article>
      ) : 
        !isLoading && <h1>"Герой не найден"</h1>
      }
    </DataErrorBoundary>
  );
};
