import React from 'react';
import bem from 'utils/bem';
import favicon from 'img/favicon.png';
import './style.scss';

const b = bem('header');

function Header() {
  return (
    <div className={b('')}>
      <div className={b('logo')}>
        <img className={b('favicon')} src={favicon} alt="gif" />
        <span>LOGO</span>
      </div>
    </div>
  );
}

export default Header;
