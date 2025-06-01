import { DataErrorBoundary } from "../../shared/components";
import type { Locations } from "../../shared/types/locations.types";
import { LocationCard } from "../../modules/location";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./locationsPage.module.css";
import { useFetchData } from "../../shared/hooks";
import { useCallback, useRef } from "react";
import { Loader } from "../../shared/ui/loaders/Loader";

export const LocationsPage = () => {
  const { id } = useParams();
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
      <div className={styles.locationsPage}>
        {id ? (
          <Outlet />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className={styles.locationsGrid}>
            {locations.map((location, index) => {
              if (locations.length === index + 1) {
                return (
                  <LocationCard
                    key={location.id}
                    ref={lastNodeRef}
                    storyLocation={location}
                    onClick={() => navigate(`/locations/${location.id}`)}
                  />
                );
              } else {
                return (
                  <LocationCard
                    key={location.id}
                    storyLocation={location}
                    onClick={() => navigate(`/locations/${location.id}`)}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </DataErrorBoundary>
  );
};
