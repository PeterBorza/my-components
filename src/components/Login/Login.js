import { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { labelInput, logInfo, loginForm } = styles;
  classNames(labelInput, logInfo, loginForm);

  const checkboxHandler = (box, username) => {
    box.checked && localStorage.setItem("name", `${username}`);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    let userName = e.target.username;
    let password = e.target.password;
    let remember = e.target.remember;

    userName.value = localStorage.getItem("name");
    if (userName.value === "Peter" && password.value === "Peter") {
      setLoggedIn(true);
    }
    checkboxHandler(remember, userName.value);
  };

  return (
    <div className={loginForm}>
      <form onSubmit={loginHandler}>
        <h2>Login Form</h2>

        <div className={labelInput}>
          <label htmlFor="username" className={loggedIn ? logInfo : undefined}>
            Name:
          </label>
          <input type="text" name="username" autoComplete="off" />
        </div>
        <div className={labelInput}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" autoComplete="off" />
        </div>
        <label>
          Remember user
          <input type="checkbox" name="remember" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
