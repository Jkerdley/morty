import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";
import styles from "./authStatus.module.css";
export const AuthStatus = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogout = () => {
        auth?.signOut(() => navigate("/"));
    };
    if (auth?.user === null) return <div className={styles.auth}>You are not logged in</div>;
    return (
        <div className={styles.auth}>
            <p>Welcome {auth?.user.username}</p>
            <button onClick={handleLogout}>Выйти из аккаунта</button>
        </div>
    );
};
