import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./locationList.module.css";
import { useFetchData } from "../../shared/hooks";
import { DataErrorBoundary } from "../../shared/components";
import { Loader } from "../../shared/ui";
import type { Locations } from "../../entities/location/model/locations.types";
import { LocationCard } from "../../entities/location";

export const LocationList = () => {
  const navigate = useNavigate();
  const observer = useRef<IntersectionObserver | null>(null);

  const [locations, error, isLoading, hasMore, setPage] =
    useFetchData<Locations>("https://rickandmortyapi.com/api/location");

  const lastNodeRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return (
    <DataErrorBoundary
      error={error}
      message="Не удалось загрузить данные о локациях"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              onClick={() => navigate(`/locations/${location.id}`)}
              ref={locations.length === index + 1 ? lastNodeRef : null}
            />
          ))}
        </div>
      )}
    </DataErrorBoundary>
  );
};
