import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./heroList.module.css";
import { useFetchData } from "../../shared/hooks";
import type { Hero } from "../../entities/hero/model/hero.types";
import { DataErrorBoundary } from "../../shared/components";
import { Loader } from "../../shared/ui";
import { HeroCard } from "../../entities/hero";

export const HeroList = () => {
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.heroesGrid}>
          {heroes.map((hero, index) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onClick={() => navigate(`/heroes/${hero.id}`)}
              ref={heroes.length === index + 1 ? lastNodeRef : null}
            />
          ))}
        </div>
      )}
    </DataErrorBoundary>
  );
};
