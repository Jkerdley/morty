import { useParams } from "react-router-dom";
import styles from "./heroPage.module.css";
import { useFetchData } from "../../../shared/hooks";
import type { Hero } from "../../../shared/types/hero.types";

export const HeroPage = () => {
    const { id } = useParams();
    const [heroes, error] = useFetchData<Hero[]>("/src/api/dataset/characters.json");
    const filteredHero = heroes.find((hero) => hero.id === Number(id));

    if (error) return <h1>{error}</h1>;
    if (!filteredHero) return <h1>"Герой не найден"</h1>;
    return (
        <article className={styles.heroPageContainer}>
            <div className={styles.infoContainer}>
                <p className={styles.heroName}>Имя героя: {filteredHero.name}</p>

                <div className={styles.heroInfo}>
                    <p>Пол: {filteredHero.gender}</p>
                    {filteredHero.type && <p>Тип: {filteredHero.type}</p>}
                    <p>Статус: {filteredHero.status}</p>
                    <p>Особенности: {filteredHero.species}</p>
                </div>
            </div>

            <img className={styles.heroImage} src={filteredHero.image} alt={filteredHero.name} />
        </article>
    );
};
