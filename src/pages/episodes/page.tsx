import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./episodes.module.css";
import { EpisodeCard } from "../../modules/episode";
import { useFetchData } from "../../shared/hooks";
import type { Episode } from "../../shared/types/episode.types";
import { DataErrorBoundary } from "../../shared/components";
import { useCallback, useRef } from "react";
import { Loader } from "../../shared/ui/loaders/Loader";

export const EpisodesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const observer = useRef<IntersectionObserver | null>(null);

  const [episodes, error, isLoading, hasMore, setPage] = useFetchData<Episode>(
    "https://rickandmortyapi.com/api/episode"
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
      message="Не удалось загрузить данные об эпизодах"
    >
      <section className={styles.episodesPage}>
        {id ? (
          <Outlet />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className={styles.episodes}>
            {episodes.map((episode, index) => {
              if (episodes.length === index + 1) {
                return (
                  <EpisodeCard
                    onClick={() => navigate(`/episodes/${episode.id}`)}
                    ref={lastNodeRef}
                    key={episode.id}
                    episode={episode}
                  />
                );
              } else {
                return (
                  <EpisodeCard
                    onClick={() => navigate(`/episodes/${episode.id}`)}
                    key={episode.id}
                    episode={episode}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
    </DataErrorBoundary>
  );
};
