import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/auth.service";


export default function CreateUserPage() {


    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [errorBorder, setErrorBorder] = useState<string>('black');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match.")
            return;
        }
        
        try {
            setLoading(true);
            const response = await signup({ username, email, password });
            navigate('/');
        } catch (error) {
            setError("Error creating user");
        }
    }

    return (
        <main className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter your username" />
                    <small>{error}</small>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Username</label>
                    <input type="email" placeholder="Enter email" />
                    <small>Error message</small>
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" />
                    <small>Error message</small>
                </div>
                <div className="inputGroup">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Enter your password" />
                    <small>Error message</small>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </main>
    )
}