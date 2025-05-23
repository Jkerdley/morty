import type { Episode } from "../../shared/types/episode.types";
import styles from "./episode.module.css";

interface EpisodeCardProps {
    episode: Episode;
    onClick?: () => void;
}

export const EpisodeCard = ({ episode, onClick }: EpisodeCardProps) => {
    return (
        <article onClick={onClick} className={styles.episodeCard}>
            <h3>Эпизод: {episode.name}</h3>
            <div className={styles.dateAndEpisode}>
                <p>{episode.air_date}</p>
                <p>{episode.episode}</p>
            </div>
        </article>
    );
};
