import React from 'react';
import cls from './MyButton.module.css';

function MyButton({children, ...props}) {
  return (
    <button className={cls.myButton} {...props}>{children}</button>
  );
}

export default MyButton;