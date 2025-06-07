import { VideoButton } from "../../shared/ui/buttons";
import styles from "./player.module.css";
export const Player = () => {
  return (
    <div className={styles.videoPlayer}>
      <VideoButton />
    </div>
  );
};
