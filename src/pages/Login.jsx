import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context/context';

function Login({}) {
  
  const {setIsAuth} = useContext(AuthContext);
  
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  }
  
  return (
    <div className='login'>
      <form className='loginForm'>
        <h1>Вход на сайт</h1> 
        <div className='inputs'>
          <MyInput style={{fontWeight: '700'}} placeholder="Ваш логин" />
          <MyInput placeholder="Ваш пароль" />
        </div>
        <div>
          <MyButton onClick={login}>Войти</MyButton>
        </div>    
      </form>
    </div>
  );
}

export default Login;