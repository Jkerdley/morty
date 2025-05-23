import type { Hero } from "../../shared/types/hero.types";
import styles from "./hero.module.css";

interface HeroCardProps {
    hero: Hero;
    onClick?: () => void;
}

export const HeroCard = ({ hero, onClick }: HeroCardProps) => {
    return (
        <article onClick={onClick} className={styles.heroCard}>
            <div className={styles.infoContainer}>
                <p className={styles.heroName}>Имя героя: {hero.name}</p>

                <div className={styles.heroInfo}>
                    <p>Пол: {hero.gender}</p>
                    {hero.type && <p>Тип: {hero.type}</p>}
                    <p>Статус: {hero.status}</p>
                    <p>Особенности: {hero.species}</p>
                </div>
            </div>

            <img className={styles.heroImage} src={hero.image} alt={hero.name} />
        </article>
    );
};
