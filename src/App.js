import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import { AuthContext } from './context/context';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/UI/header/Header';
import Rts from './router/Rts';

function App() {
  
  const headerLinks = [
    {title: 'Посты', path: '/posts'},
    {title: 'О нас', path: '/about'},
  ];
  
  const [isAuth, setIsAuth] = useState(false);
    
  return (      
    <div className="App">
      
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        
        <BrowserRouter> 
          { isAuth && <Header headerLinks={headerLinks} /> }
          <Rts />
        </BrowserRouter>
        
      </AuthContext.Provider>
      
      
        
      
    </div>
    
  );
}

export default App;
