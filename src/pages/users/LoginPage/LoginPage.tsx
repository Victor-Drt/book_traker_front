import { useState } from "react";
import booksPng from "../../../assets/login/books-logo.png"
import styles from "./login-page.module.css"
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/auth.service";

const LoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorBorder, setErrorBorder] = useState<string>('black');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await login({ username, password });
      localStorage.setItem('token', response.access);
      navigate('/');
    } catch (error) {
      setError("Invalid username or password");
      setErrorBorder('red');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>

        <h1>Login</h1>
        <p className={styles.subtitle}>
          Welcome back! Please enter your details.
        </p>

        {error && <p className={styles.error}>{error}</p>}

        <form className={styles.form__login} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderColor: errorBorder }}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: errorBorder }}
              required
            />
          </div>

          <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>

          <p className={styles.footerText}>
            Don't have an account?{" "}
            <a href="/register">Register</a>
          </p>
        </form>
      </aside>

      <article className={styles.article}>
        <img
          src={booksPng}
          alt="Books illustration"
          className={styles.img}
        />
      </article>
    </div>
  )
}

export default LoginPage