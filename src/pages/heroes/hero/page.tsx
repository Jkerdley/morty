import { DataErrorBoundary } from "../../../shared/components";
import type { Hero } from "../../../shared/types/hero.types";
import styles from "./heroPage.module.css";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../shared/hooks";

export const HeroPage = () => {
  const { id } = useParams();

  const [heroes, error] = useFetchData<Hero[]>(
    "https://rickandmortyapi.com/api/character"
  );

  const filteredHero = heroes.find((hero) => hero.id === Number(id));

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о герое"
    >
      {!filteredHero ? (
        <h1>"Герой не найден"</h1>
      ) : (
        <article className={styles.heroPageContainer}>
          <div className={styles.infoContainer}>
            <p className={styles.heroName}>Имя героя: {filteredHero.name}</p>

            <div className={styles.heroInfo}>
              <p>Пол: {filteredHero.gender}</p>
              {filteredHero.type && <p>Тип: {filteredHero.type}</p>}
              <p>Статус: {filteredHero.status}</p>
              <p>Особенности: {filteredHero.species}</p>
            </div>
          </div>

          <img
            className={styles.heroImage}
            src={filteredHero.image}
            alt={filteredHero.name}
          />
        </article>
      )}
    </DataErrorBoundary>
  );
};
