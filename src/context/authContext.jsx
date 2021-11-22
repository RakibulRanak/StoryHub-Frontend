
import axios from "axios";
import { Redirect } from "react-router-dom";
const { createContext, useState } = require("react");
const AuthContext = createContext();

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(
        JSON.parse(localStorage.getItem("loggedIn")) || false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );
    const login = (userDetails) => {
        setLoggedIn(true);
        localStorage.setItem("loggedIn", JSON.stringify(true));
        setUser(userDetails);
        localStorage.setItem("user", JSON.stringify(userDetails));

    };

    const logout = () => {
        localStorage.setItem("loggedIn", JSON.stringify(false));
        setLoggedIn(false);
        window.localStorage.removeItem('user');
        setUser(null)
    };

    const logoutHandler = (e) => {
        logout();
        axios.get("/api/v1/users/logout").finally(() => {
            return <Redirect to="/" />;
        });
    };



    return (
        <AuthContext.Provider
            value={{
                loggedIn,
                login,
                logoutHandler,
                user
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
