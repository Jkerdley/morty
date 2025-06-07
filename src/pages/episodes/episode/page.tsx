import { useParams } from "react-router-dom";
import styles from "./episode.module.css";
import { Player } from "../../../widgets/video-player";
import { useFetchItem } from "../../../shared/hooks";
import { DataErrorBoundary } from "../../../shared/components";
import { Loader } from "../../../shared/ui/loaders/Loader";
import type { Episode } from "../../../entities/episode/model/episode.types";

export const EpisodePage = () => {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: episode,
  } = useFetchItem<Episode>(id, "https://rickandmortyapi.com/api/episode");

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные об эпизоде"
    >
      {isLoading && <Loader />}
      {episode ? (
        <article className={styles.episodeCard}>
          <div className={styles.titleContainer}>
            <h2>Эпизод: {episode.name}</h2>
          </div>
          <div className={styles.dateAndEpisode}>
            <p>Дата выхода: {episode.air_date}</p>
            <p>Сезон и эпизод: {episode.episode}</p>
          </div>
          <Player />
        </article>
      ) : (
        !isLoading && <h1>"Эпизод не найден"</h1>
      )}
    </DataErrorBoundary>
  );
};
