import React, { useState } from 'react';
import './styles/App.css';
import { AuthContext, LikedContext } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/header/Header';
import Rts from './router/Rts';

function App() {

    const headerLinks = [
        { title: 'Посты', path: '/posts' },
        { title: 'Информация', path: '/about' },
    ];

    const [isAuth, setIsAuth] = useState(localStorage['account']);
    const [likedPosts, setLikedPosts] = useState(
        localStorage["likedPostsArray"]
            ? JSON.parse(localStorage["likedPostsArray"])
            : []);

    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
                <LikedContext.Provider value={{
                    likedPosts,
                    setLikedPosts,
                }}
                >
                    <BrowserRouter>
                        {isAuth && <Header headerLinks={headerLinks} />}
                        <Rts />
                    </BrowserRouter>
                </LikedContext.Provider>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
