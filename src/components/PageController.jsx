import React from 'react';
import MyButton from './UI/button/MyButton';
import { getArrayByNumber } from '../utils/utils';
import MySelect from './UI/select/MySelect';

function PageController({limit, setLimit, page, setPage, totalPages}) {
  
  const swapPage = (e) => {
    setLimit(+e.target.value);
    setPage(1);
  }
  
  return (
    <div>
      <MySelect style={{margin: '10px auto', display: 'block'}} value={limit} title="Кол-во постов" options={[
        {value: '10', key: '10', name: 'Кол-во: 10'},
        {value: '15', key: '15', name: 'Кол-во: 15'},
        {value: '25', key: '25', name: 'Кол-во: 25'},
        {value: '35', key: '35', name: 'Кол-во: 35'},
        {value: '-1', key: '-1', name: 'Все посты'},
      ]} onChange={swapPage} />
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
    </div>
  );
}

export default PageController;