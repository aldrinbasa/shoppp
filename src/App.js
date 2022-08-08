import { Fragment, useState } from "react";
import "./App.css";

import Login from "./components/login/login.js";
import Register from "./components/register/register.js";
import NavigationBar from "./components/home/NavigationBar/NavigationBar";

function App() {
  const [willLogin, setWillLogin] = useState(true);

  const clickHandler = () => {
    setWillLogin(!willLogin);
  };

  const renderForms = () => {
    if (willLogin) {
      return <Login onRegisterClick={clickHandler}></Login>;
    } else {
      return <Register onLoginClick={clickHandler}></Register>;
    }
  };

  return (
    <Fragment>
      <NavigationBar />
      <div className="main">{renderForms()}</div>
    </Fragment>
  );
}

export default App;
