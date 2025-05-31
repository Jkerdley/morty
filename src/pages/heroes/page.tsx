import { Outlet, useNavigate, useParams } from "react-router-dom";
import { HeroCard } from "../../modules/hero";
import styles from "./heroes.module.css";
import { useFetchData } from "../../shared/hooks";
import type { Hero } from "../../shared/types/hero.types";
import { DataErrorBoundary } from "../../shared/components";

export const HeroesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [heroes, error] = useFetchData<Hero[]>(
    "https://rickandmortyapi.com/api/character",
    "?page=3"
  );

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о героях"
    >
      <div>
        {id ? (
          <Outlet />
        ) : (
          <div className={styles.heroesPage}>
            <div className={styles.heroesGrid}>
              {heroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  hero={hero}
                  onClick={() => navigate(`/heroes/${hero.id}`)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </DataErrorBoundary>
  );
};
