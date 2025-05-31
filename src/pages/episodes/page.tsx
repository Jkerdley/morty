import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./episodes.module.css";
import { EpisodeCard } from "../../modules/episode";
import { useFetchData } from "../../shared/hooks";
import type { Episode } from "../../shared/types/episode.types";

export const EpisodesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episodes, error] = useFetchData<Episode[]>(
    "/src/api/dataset/episode.json"
  );

  if (error) return <h1>{error}</h1>;
  if (!episodes) return <h1>"Эпизоды не найдены"</h1>;
  return (
    <section className={styles.episodesPage}>
      {id ? (
        <Outlet />
      ) : (
        <div className={styles.episodes}>
          {episodes.map((episode) => (
            <EpisodeCard
              onClick={() => navigate(`/episodes/${episode.id}`)}
              key={episode.id}
              episode={episode}
            />
          ))}
        </div>
      )}
    </section>
  );
};
