import { Outlet, useNavigate, useParams } from "react-router-dom";
import { HeroCard } from "../../modules/hero";
import styles from "./heroes.module.css";
import { useFetchData } from "../../shared/hooks";
import type { Hero } from "../../shared/types/hero.types";
import { DataErrorBoundary } from "../../shared/components";
import { useCallback, useRef } from "react";
import { Loader } from "../../shared/ui/loaders/Loader";

export const HeroesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const observer = useRef<IntersectionObserver | null>(null);

  const [heroes, error, isLoading, hasMore, setPage] = useFetchData<Hero>(
    "https://rickandmortyapi.com/api/character"
  );

  const lastNodeRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о героях"
    >
      <div className={styles.heroesPage}>
        {id ? (
          <Outlet />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className={styles.heroesGrid}>
            {heroes.map((hero, index) => {
              if (heroes.length === index + 1) {
                return (
                  <HeroCard
                    key={hero.id}
                    ref={lastNodeRef}
                    hero={hero}
                    onClick={() => navigate(`/heroes/${hero.id}`)}
                  />
                );
              } else {
                return (
                  <HeroCard
                    key={hero.id}
                    hero={hero}
                    onClick={() => navigate(`/heroes/${hero.id}`)}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </DataErrorBoundary>
  );
};
