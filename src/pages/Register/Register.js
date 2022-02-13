import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import "./Register.css"
import Constants from "../../utilities/Constants";
import { Button } from "../../components/Button/Button";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = Constants.API_URL_REGISTER;
        const user = { firstName, lastName, dateOfBirth, email, username, password };
        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            setIsPending(false);
            console.log('new user added');
            navigate("/");
        });
    }

    return (
        <div className="Register">
            <h2 className="register-page-title">Eat good food</h2>
            <h2 className="register-page-subtitle">Make account to eat my or mama food. Thank you</h2>
            <form onSubmit={handleSubmit} className="register-page-form">
                <label>First name:</label>
                <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last name:</label>
                <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>Date of birth:</label>
                <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                { !isPending && <Button>Register!</Button> }
                { isPending && <Button disabled>Registering...</Button> }
            </form>
        </div>
    );
}

export default Register;