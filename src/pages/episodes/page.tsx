import { Outlet, useParams } from "react-router-dom";
import styles from "./episodes.module.css";

import { EpisodeList } from "../../widgets";

export const EpisodesPage = () => {
  const { id } = useParams();
  return (
    <section className={styles.episodesPage}>
      {id ? <Outlet /> : <EpisodeList />}
    </section>
  );
};
