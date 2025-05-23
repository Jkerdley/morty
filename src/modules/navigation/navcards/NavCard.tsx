import { Link } from "react-router-dom";
import styles from "./navcards.module.css";
import Heroes from "../../../shared/assets/heroes.webp";
import Episodes from "../../../shared/assets/episodez.webp";
import Portal from "../../../shared/assets/rickandmorty.webp";
export const NavCard = () => {
    return (
        <>
            <section className={styles.navcards}>
                <Link to={"/heroes"}>
                    <img className={styles.cardFront} src={Heroes} alt="герои" />
                </Link>
                <Link to={"/locations"}>
                    <img className={styles.portal} src={Portal} alt="portal" />
                </Link>

                <Link to={"/episodes"}>
                    <img className={styles.cardFront} src={Episodes} alt="герои" />
                </Link>
            </section>
        </>
    );
};
