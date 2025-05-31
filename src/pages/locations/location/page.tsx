import { useParams } from "react-router-dom";
import { useFetchData } from "../../../shared/hooks";
import styles from "./locationPage.module.css";
import type { Locations } from "../../../shared/types/locations.types";
import { DataErrorBoundary } from "../../../shared/components";

export const LocationPage = () => {
  const { id } = useParams();

  const [location, error] = useFetchData<Locations[]>(
    "https://rickandmortyapi.com/api/location"
  );

  const filteredLocation = location.find(
    (location) => location.id === Number(id)
  );

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о локации"
    >
      {filteredLocation ? (
        <article className={styles.locationPageContainer}>
          <div className={styles.locationContainer}>
            <p className={styles.locationName}>
              Имя локации: {filteredLocation?.name}
            </p>
            <div className={styles.locationInfo}>
              <p>Тип локации: {filteredLocation?.type}</p>
              <p>Измерение: {filteredLocation?.dimension}</p>
            </div>
          </div>
        </article>
      ) : (
        <h1>"Локация не найдена"</h1>
      )}
    </DataErrorBoundary>
  );
};
