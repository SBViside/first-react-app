import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { AuthContext } from '../context/context';


function Rts() {
  
  const { isAuth } = useContext(AuthContext);
  
  return (
    
    isAuth 
    ?
    <Routes>
      {privateRoutes.map(r => 
        <Route key={r.path} path={r.path} element={<r.element />} />
      )}
      <Route path="*" element={<Navigate to='/error' />} />
      <Route path="/login" element={<Navigate to='/posts' />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map(r => 
        <Route key={r.path} path={r.path} element={<r.element />} />
      )}
      <Route path="*" element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default Rts;