import React, { Children } from 'react';
import cls from './MyModal.module.css';

function MyModal({children, visible, setVisible}, props) {
  
  const rootClasses = [cls.myModal];
  
  if (visible) {
    rootClasses.push(cls.active);
  }
  
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cls.myModal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;