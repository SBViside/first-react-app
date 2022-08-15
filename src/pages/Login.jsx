import React, { useContext, useRef } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";
import MyCheckbox from "../components/UI/checkbox/MyCheckbox";

function Login({}) {
  const { setIsAuth } = useContext(AuthContext);
  const keepLoginCB = useRef();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    // console.log(keepLoginCB.current);
    if (keepLoginCB.current.checked) {
      localStorage["account"] = true;
    }
  };

  return (
    <div className="login">
      <form className="loginForm">
        <h1>Вход</h1>
        <div className="inputs">
          <MyInput style={{ fontWeight: "700" }} placeholder="Ваш логин" />
          <MyInput type="password" placeholder="Ваш пароль" />
          <MyCheckbox
            ref={keepLoginCB}
            title="Запомнить меня"
            id="saveUser"
            style={{ margin: "10px" }}
          />
        </div>
        <div>
          <MyButton onClick={login}>Войти</MyButton>
        </div>
      </form>
    </div>
  );
}

export default Login;
