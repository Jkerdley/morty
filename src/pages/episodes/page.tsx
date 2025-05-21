import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { request } from "../../helpers/request";
import type { Episode } from "../../shared/types/episode.types";
import styles from "./episodes.module.css";
import { EpisodeCard } from "../../modules/episode";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverData = await request("/src/api/dataset/episode.json");
        setEpisodes(serverData);
      } catch (error) {
        setError("Ошибка при получении данных");
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  console.log("episodes", episodes);
  if (error) return <h1>{error}</h1>;
  return (
    <section className={styles.episodesPage}>
      <div className={styles.episodes}>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      <Outlet />
    </section>
  );
};
