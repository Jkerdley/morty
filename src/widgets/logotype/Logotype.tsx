import Logo from "../../shared/assets/logo.svg";
import styles from "./logo.module.css";
export const Logotype = () => {
  return <img className={styles.logo} src={Logo} alt="logo"></img>;
};
