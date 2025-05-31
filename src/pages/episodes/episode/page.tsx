import { useParams } from "react-router-dom";
import styles from "./episode.module.css";
import { Player } from "../../../shared/ui/video-player";
import { useFetchData } from "../../../shared/hooks";
import type { Episode } from "../../../shared/types/episode.types";
import { DataErrorBoundary } from "../../../shared/components";

export const EpisodePage = () => {
  const { id } = useParams();

  const [episodes, error] = useFetchData<Episode[]>(
    "https://rickandmortyapi.com/api/episode"
  );

  const filteredEpisode = episodes.find((episode) => episode.id === Number(id));

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные об эпизоде"
    >
      {filteredEpisode && (
        <article className={styles.episodeCard}>
          <div className={styles.titleContainer}>
            <h2>Эпизод: {filteredEpisode.name}</h2>
          </div>
          <div className={styles.dateAndEpisode}>
            <p>Дата выхода: {filteredEpisode.air_date}</p>
            <p>Сезон и эпизод: {filteredEpisode.episode}</p>
          </div>
          <Player />
        </article>
      )}
    </DataErrorBoundary>
  );
};
