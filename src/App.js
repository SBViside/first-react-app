import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { AuthContext } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/header/Header';
import Rts from './router/Rts';

function App() {

    const headerLinks = [
        { title: 'Посты', path: '/posts' },
        { title: 'Информация', path: '/about' },
    ];

    const [isAuth, setIsAuth] = useState(localStorage['account']);

    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
                <BrowserRouter>
                    {isAuth && <Header headerLinks={headerLinks} />}
                    <Rts />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
