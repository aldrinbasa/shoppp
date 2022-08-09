import loginStyles from "./login.module.css";
import { Fragment } from "react";

import MainButton from "../UI/MainButton/MainButton";

const Login = (props) => {
  return (
    <Fragment>
      <div className={loginStyles.login}>
        <div className={loginStyles.title}>
          <h1>
            Shop<span>pp</span>
          </h1>
          <p>Your marketplace for used furnitures</p>
        </div>

        <form>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <MainButton type="submit">Login</MainButton>
        </form>

        <div className={loginStyles.register}>
          <p>
            New User?{" "}
            <span
              className={loginStyles.register_link}
              onClick={props.onRegisterClick}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
