import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./episodeList.module.css";
import { DataErrorBoundary } from "../../shared/components";
import { EpisodeCard } from "../../entities/episode";
import { Loader } from "../../shared/ui";
import { useFetchData } from "../../shared/hooks";
import type { Episode } from "../../entities/episode/model/episode.types";

export const EpisodeList = () => {
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.episodes}>
          {episodes.map((episode, index) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              onClick={() => navigate(`/episodes/${episode.id}`)}
              ref={episodes.length === index + 1 ? lastNodeRef : null}
            />
          ))}
        </div>
      )}
    </DataErrorBoundary>
  );
};
