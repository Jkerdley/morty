import type { FormEvent } from "react";
import styles from "./loginForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/hooks";

export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from || "/";

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !password) {
      alert('Заполните поля формы "username" и "password"');
    } else {
      auth?.signIn({ username, password }, () =>
        navigate(from, { replace: true })
      );
    }
  };
  return (
    <div className={styles.loginPageContainer}>
      <form onSubmit={handleSubmitForm} id="loginForm" name="loginForm">
        <label htmlFor="loginForm">Форма входа</label>
        Username: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
