import { forwardRef } from "react";
import styles from "./episodeCard.module.css";
import type { Episode } from "../../model/episode.types";

interface EpisodeCardProps {
  episode: Episode;
  onClick?: () => void;
}

export const EpisodeCard = forwardRef<HTMLDivElement, EpisodeCardProps>(
  ({ episode, onClick }, ref) => {
    return (
      <article ref={ref} onClick={onClick} className={styles.episodeCard}>
        <h3>Эпизод: {episode.name}</h3>
        <div className={styles.dateAndEpisode}>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      </article>
    );
  }
);
