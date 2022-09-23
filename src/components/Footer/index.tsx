import React from 'react';
import bem from 'utils/bem';
import favicon from 'img/favicon.png';
import arrowIcon from 'img/arrow-icon.png';
import './style.scss';

const b = bem('footer');

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={b('')}>
      <div className={b('left-block')}>
        <img className={b('favicon')} src={favicon} alt="gif" />
        <span>LOGO</span>
      </div>
      <div className={b('center-block')}>
        Контакты: +7 (900) 000 00 - 00
      </div>
      <div className={b('right-block')}>
        <button className={b('arrow-block')} type="button" onClick={scrollToTop}>
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
