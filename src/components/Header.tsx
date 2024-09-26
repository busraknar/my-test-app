import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/about">Hakkında</Link></li>
          <li><Link to="/team">Takım</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
