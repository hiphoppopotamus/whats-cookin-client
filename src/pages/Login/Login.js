import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Constants from "../../utilities/Constants";
import { Button } from "../../components/Button/Button";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = Constants.API_URL_LOGIN;
        const user = { username, password };
        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            setIsPending(false);
            console.log('user logged in');
            navigate("/");
        });
    }

    return (
        <div className="Login">
            <h2 className="login-page-title">Eat good food</h2>
            <h2 className="login-page-subtitle">Make account to eat my or mama food. Thank you</h2>
            <form onSubmit={handleSubmit} className="login-page-form">
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                { !isPending && <Button>Login!</Button> }
                { isPending && <Button disabled>Logining...</Button> }
            </form>
        </div>
    );
}

export default Login;