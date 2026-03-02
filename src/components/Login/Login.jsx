import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";


function Login(){
    // const {register , handlesubmit ,formstate : { errors }} = useForm();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
    
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
            await login(email, password);
            navigate("/");
            } catch {
            alert("Invalid email or password");
            }
        };






    return (
        <>        
                <div className="auth-container">
            <div className="auth-card">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

                </form>

                <div className="auth-link">
                Don't have an account? <Link to="/register">Register</Link>
                </div>

            </div>
            </div>
        </>
    );
}


export default Login;


