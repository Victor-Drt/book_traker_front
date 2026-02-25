import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/auth.service";
import onlineReading from "../../../assets/register/undraw_online-reading_jtnx.svg"
import styles from "./create-user-page.module.css"


export default function CreateUserPage() {


    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>("")
    const [error, setError] = useState<string>('');
    const [errorBorder, setErrorBorder] = useState<string>('black');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError("Passwords don't match.")
            return;
        }

        try {
            setLoading(true);
            const response = await signup({ username, email, password });
            navigate('/');
        } catch (error) {
            setError("Error creating user");
            setLoading(false);
        }
    }


    useEffect(() => {
        if (!confirmPassword) return;

        if (confirmPassword === password) {
            setPasswordError("");
        } else {
            setPasswordError("Passwords doesn't match!");
        }

    }, [password, confirmPassword]);

    return (
        <main className={styles.container}>
            <aside className={styles.aside}>
                <h1>Sign Up</h1>
                <p className={styles.subtitle}>
                    Create your account or <a href="/login">Sign in</a>
                </p>

                {error && <p className={styles.error}>{error}</p>}

                <form className={styles.form__register} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" placeholder="Enter your password" onChange={e => setConfirmPassword(e.target.value)}/>
                        <small>{passwordError}</small>
                    </div>
                    <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Enter'}</button>
                </form>
            </aside>
            <article className={styles.article}>
                <div className={styles.boxImage}>
                    <img
                        src={onlineReading}
                        alt="Books illustration"
                        className={styles.img}
                    />
                </div>
            </article>
        </main>
    )
}