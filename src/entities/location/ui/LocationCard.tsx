import { forwardRef } from "react";
import styles from "./locationCard.module.css";
import type { Locations } from "../model/locations.types";

interface LocationCardProps {
  location: Locations;
  onClick?: () => void;
}

export const LocationCard = forwardRef<HTMLDivElement, LocationCardProps>(
  ({ location, onClick }, ref) => {
    return (
      <article ref={ref} onClick={onClick} className={styles.locationCard}>
        <div className={styles.infoContainer}>
          <p className={styles.locationName}>Название: {location.name}</p>
          <div className={styles.locationInfo}>
            <p>Тип: {location.type}</p>
            <p>Измерение: {location.dimension}</p>
          </div>
        </div>
      </article>
    );
  }
);
