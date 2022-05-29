import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import "./Register.css"
import Constants from "../../utilities/Constants";
import { Button } from "../../components/Button/Button";

const Register = () => {

    // User related stuff
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Error message states
    const [firstNameError, setFirstNameError] = useState("Your name cant be blaw ");
    const [lastNameError, setLastNameError] = useState("sss");
    const [dateOfBirthError, setDateOfBirthError] = useState("sss");
    const [emailError, setEmailError] = useState("sss");
    const [usernameError, setUsernameError] = useState("sss");
    const [passwordError, setPasswordError] = useState("sss");

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    // TODO u wanna call this as onCHANGE
    const validateEmail = (email) => {
        // const emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        const emailRegex = /.*/;
        return email.match(emailRegex);
    }

    const validateUsername = (username) => {
        const usernameRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        // const usernameRegex = /.*/;
        return username.match(usernameRegex);
    }

    const validatePassword = (password) => {
        // const passwordRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        const passwordRegex = /.*/;
        return password.match(passwordRegex);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = Constants.API_URL_REGISTER;
        const user = { firstName, lastName, dateOfBirth, email, username, password };
        const isValidEmail = validateEmail(email);
        const isValidUsername = validateUsername(username);
        const isValidPassword = validatePassword(password);

        if (!(isValidEmail && isValidUsername && isValidPassword)) {
            console.log("nothing happ")
            return
        }
        console.log(" happ")

        // API call to create user when input is valid
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
            // navigate("/");
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
                { firstNameError !== "" && <p className="register-page-input-error-message"> { firstNameError } </p> }

                <label>Last name:</label>
                <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                { lastNameError !== "" && <p className="register-page-input-error-message"> { lastNameError } </p> }

                <label>Date of birth:</label>
                <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                { dateOfBirthError !== "" && <p className="register-page-input-error-message"> { dateOfBirthError } </p> }

                <label>Email:</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                { emailError !== "" && <p className="register-page-input-error-message"> { emailError } </p> }

                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                { usernameError !== "" && <p className="register-page-input-error-message"> { usernameError } </p> }

                <label>Password:</label>
                <input
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                { passwordError !== "" && <p className="register-page-input-error-message"> { passwordError } </p> }

                { !isPending && <Button marginSize="margin-top--25px">Register!</Button> }
                { isPending && <Button marginSize="margin-top--25px" disabled>Registering...</Button> }
            </form>
        </div>
    );
}

export default Register;