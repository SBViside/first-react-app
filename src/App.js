import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Posts from './pages/Posts';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  
  const headerLinks = [
    {title: 'Посты', path: '/posts'},
    {title: 'О нас', path: '/about'},
  ];
  
  return (      
    <div className="App">
      
      <BrowserRouter>
      
        <header>
          <nav>
            <ul className='navList'>
              {headerLinks.map(link => 
                  <li key={link.path} className='navItem'>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                )}
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to ="/posts" />} />
        </Routes>
        
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
