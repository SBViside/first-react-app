import React, { useContext, useRef } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";
import MyCheckbox from "../components/UI/checkbox/MyCheckbox";

function Login({}) {
  const { setIsAuth } = useContext(AuthContext);
  const keepLoginCB = useRef();
  const inputLogin = useRef();
  const inputPassword = useRef();

  const login = (e) => {
    e.preventDefault();

    if (!inputLogin.current.value) {
      inputLogin.current.focus();
      return;
    }
    if (!inputPassword.current.value) {
      inputPassword.current.focus();
      return;
    }

    setIsAuth(true);
    if (keepLoginCB.current.checked) {
      localStorage["account"] = true;
    }
    localStorage["accountName"] = inputLogin.current.value;
  };

  return (
    <div className="login">
      <form className="loginForm">
        <h1>Вход</h1>
        <div className="inputs">
          <MyInput
            ref={inputLogin}
            style={{ fontWeight: "700" }}
            placeholder="Ваш логин"
          />
          <MyInput
            ref={inputPassword}
            type="password"
            placeholder="Ваш пароль"
          />
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
