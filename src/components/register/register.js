import { Fragment } from "react";
import registerStyles from "./register.module.css";
// import loginStyles from "../login/login.module.css";

const Register = (props) => {
  return (
    <Fragment>
      <div className={registerStyles.register}>
        <div>
          <h1 className={registerStyles.title}>
            Shop<span>pp</span>
          </h1>
          <p>Your marketplace for used furnitures</p>
        </div>

        <form>
          <input type="text" placeholder="Full name"></input>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          {/* <span>
            <input type="checkbox" id="promotionCheckbox" />
            <label for="promotionCheckbox">
              I'd like to receive exclusive offers and promotions via email.
            </label>
          </span>
          
          <p>
            By proceeding to sign up, I acknowledge that I have read and
            consented to Shoppp's Terms of Use and Privacy Policy , which sets
            out how Shoppp collects, uses and discloses my personal data, and
            the rights that I have under applicable law.
          </p> */}
        </form>

        <div className={registerStyles.login}>
          <p>
            Existing User?{" "}
            <span
              className={registerStyles.register_link}
              onClick={props.onLoginClick}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
