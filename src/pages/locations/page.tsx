import { Outlet, useParams } from "react-router-dom";
import styles from "./locationsPage.module.css";
import { LocationList } from "../../widgets";

export const LocationsPage = () => {
  const { id } = useParams();
  return (
    <div className={styles.locationsPage}>
      {id ? <Outlet /> : <LocationList />}
    </div>
  );
};
