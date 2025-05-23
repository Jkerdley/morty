import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./locationsPage.module.css";
import { useFetchData } from "../../shared/hooks";
import type { Locations } from "../../shared/types/locations.types";
import { LocationCard } from "../../modules/location";
export const LocationsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [locations, error] = useFetchData<Locations[]>("/src/api/dataset/location.json");

    if (error) return <h1>{error}</h1>;
    if (!locations) return <h1>"Герои не найдены"</h1>;
    return (
        <div>
            {id ? (
                <Outlet />
            ) : (
                <div className={styles.locationsPage}>
                    <div className={styles.locationsGrid}>
                        {locations.map((location) => (
                            <LocationCard
                                key={location.id}
                                storyLocation={location}
                                onClick={() => navigate(`/locations/${location.id}`)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
