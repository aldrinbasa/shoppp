import { Fragment, useState } from "react";
import "./App.css";

import Login from "./components/login/login.js";
import Register from "./components/register/register.js";
import NavigationBar from "./components/home/NavigationBar/NavigationBar";
import Home from "./components/home/Home";

function App() {
  const [willLogin, setWillLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => {
    setWillLogin(!willLogin);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const renderForms = () => {
    if (willLogin) {
      return (
        <div className="main">
          <Login onRegisterClick={clickHandler} login={loginHandler}></Login>
        </div>
      );
    } else {
      return (
        <div>
          <Register onLoginClick={clickHandler}></Register>;
        </div>
      );
    }
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      return <Home></Home>;
    } else {
      return renderForms();
    }
  };

  return (
    <Fragment>
      <NavigationBar />
      {handleLogin()}
    </Fragment>
  );
}

export default App;
