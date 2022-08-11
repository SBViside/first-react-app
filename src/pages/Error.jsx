import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

function Error() {
  
  return (
    <div className='error container'>
      <h1 className='error__code'>404</h1>
      <p className='error__title'>Страница не найдена...</p>
      <Link to='/posts' className='error__link'>Назад к постам</Link>
    </div>
  );
}

export default Error;