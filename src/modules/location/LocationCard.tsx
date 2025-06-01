import { forwardRef } from "react";
import type { Locations } from "../../shared/types/locations.types";
import styles from "./locationCard.module.css";

interface LocationCardProps {
  storyLocation: Locations;
  onClick?: () => void;
}

export const LocationCard = forwardRef<HTMLDivElement, LocationCardProps>(
  ({ storyLocation, onClick }, ref) => {
    return (
      <article ref={ref} onClick={onClick} className={styles.locationCard}>
        <div className={styles.infoContainer}>
          <p className={styles.locationName}>Название: {storyLocation.name}</p>
          <div className={styles.locationInfo}>
            <p>Тип: {storyLocation.type}</p>
            <p>Измерение: {storyLocation.dimension}</p>
          </div>
        </div>
      </article>
    );
  }
);
