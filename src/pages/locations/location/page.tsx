import { useParams } from "react-router-dom";
import { useFetchData } from "../../../shared/hooks";

import styles from "./locationPage.module.css";
import type { Locations } from "../../../shared/types/locations.types";
export const LocationPage = () => {
    const { id } = useParams();
    const [location, error] = useFetchData<Locations[]>("/src/api/dataset/location.json");
    const filteredLocation = location.find((location) => location.id === Number(id));

    if (error) return <h1>{error}</h1>;
    if (!filteredLocation) return <h1>"Герой не найден"</h1>;
    return (
        <article className={styles.locationPageContainer}>
            <div className={styles.locationContainer}>
                <p className={styles.locationName}>Имя локации: {filteredLocation.name}</p>
                <div className={styles.locationInfo}>
                    <p>Тип локации: {filteredLocation.type}</p>
                    <p>Измерение: {filteredLocation.dimension}</p>
                </div>
            </div>
        </article>
    );
};
