import Play from "../../assets/play.svg";
import styles from "./videoButton.module.css";
export const VideoButton = () => {
    return (
        <div className={styles.buttonContainer}>
            <img height={"50rem"} src={Play} alt="play"></img>
        </div>
    );
};
