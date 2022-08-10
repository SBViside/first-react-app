import React from 'react';
import MyButton from './UI/button/MyButton';
import { getArrayByNumber } from '../utils/utils';

function PageController({page, setPage, totalPages}) {
  return (
    <div className='pageSelector'>
        { page > 1 && <MyButton onClick={() => setPage(page-1)}>&lt;</MyButton> } 
        <div className='pages'>
          {
            getArrayByNumber(totalPages).map(n => 
              <span key={n} className={n === page ? 'page active' : 'page'} onClick={() => setPage(n)}>{n}</span>
            )
          }
        </div>
        { page < totalPages && <MyButton onClick={() => setPage(page+1)}>&gt;</MyButton> }        
      </div>
  );
}

export default PageController;