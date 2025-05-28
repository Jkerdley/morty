import { useParams } from "react-router-dom";
import styles from "./episode.module.css";
import { Player } from "../../../shared/ui/video-player";
import { useFetchData } from "../../../shared/hooks";
import type { Episode } from "../../../shared/types/episode.types";
export const EpisodePage = () => {
  const { id } = useParams();
  const [episodes, error] = useFetchData<Episode[]>(
    "/src/api/dataset/episode.json"
  );
  const filteredEpisode = episodes.find((episode) => episode.id === Number(id));

  if (error) return <h1>{error}</h1>;
  if (!episodes) return <h1>"Эпизод не найден"</h1>;
  return (
    <article className={styles.episodeCard}>
      <div className={styles.titleContainer}>
        <h2>Эпизод: {filteredEpisode?.name}</h2>
      </div>
      <div className={styles.dateAndEpisode}>
        <p>Дата выхода: {filteredEpisode?.air_date}</p>
        <p>Сезон и эпизод: {filteredEpisode?.episode}</p>
      </div>
      <Player />
    </article>
  );
};
