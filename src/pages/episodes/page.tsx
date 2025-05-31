import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./episodes.module.css";
import { EpisodeCard } from "../../modules/episode";
import { useFetchData } from "../../shared/hooks";
import type { Episode } from "../../shared/types/episode.types";
import { DataErrorBoundary } from "../../shared/components";

export const EpisodesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serverData, error] = useFetchData<Episode[]>(
    "https://rickandmortyapi.com/api/episode",
    "?page=3"
  );
  console.log("serverData", serverData);
  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные об эпизодах"
    >
      <section className={styles.episodesPage}>
        {id ? (
          <Outlet />
        ) : (
          <div className={styles.episodes}>
            {serverData.map((episode) => (
              <EpisodeCard
                onClick={() => navigate(`/episodes/${episode.id}`)}
                key={episode.id}
                episode={episode}
              />
            ))}
          </div>
        )}
      </section>
    </DataErrorBoundary>
  );
};
