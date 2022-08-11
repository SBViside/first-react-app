import React from 'react';
import { Link } from 'react-router-dom';

function Header({ headerLinks }) {
  return ( 
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
  );
}

export default Header;