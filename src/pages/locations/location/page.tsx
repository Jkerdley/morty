import { useParams } from "react-router-dom";
import styles from "./locationPage.module.css";
import { useFetchItem } from "../../../shared/hooks";
import { DataErrorBoundary } from "../../../shared/components";
import { Loader } from "../../../shared/ui";
import type { Locations } from "../../../entities/location/model/locations.types";

export const LocationPage = () => {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: location,
  } = useFetchItem<Locations>(id, "https://rickandmortyapi.com/api/location");

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о локации"
    >
      {isLoading && <Loader />}
      {location ? (
        <article className={styles.locationPageContainer}>
          <div className={styles.locationContainer}>
            <p className={styles.locationName}>Имя локации: {location.name}</p>
            <div className={styles.locationInfo}>
              <p>Тип локации: {location.type}</p>
              <p>Измерение: {location.dimension}</p>
            </div>
          </div>
        </article>
      ) : (
        !isLoading && <h1>"Локация не найдена"</h1>
      )}
    </DataErrorBoundary>
  );
};
