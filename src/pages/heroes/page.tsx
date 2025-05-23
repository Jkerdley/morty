import { Outlet, useNavigate, useParams } from "react-router-dom";
import { HeroCard } from "../../modules/hero";
import styles from "./heroes.module.css";
import { useFetchData } from "../../shared/hooks";
import type { Hero } from "../../shared/types/hero.types";
export const HeroesPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [heroes, error] = useFetchData<Hero[]>("/src/api/dataset/characters.json");

    if (error) return <h1>{error}</h1>;
    if (!heroes) return <h1>"Герои не найдены"</h1>;
    return (
        <div>
            {id ? (
                <Outlet />
            ) : (
                <div className={styles.heroesPage}>
                    <div className={styles.heroesGrid}>
                        {heroes.map((hero) => (
                            <HeroCard
                                key={hero.id}
                                hero={hero}
                                onClick={() => navigate(`/heroes/${hero.id}`)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
