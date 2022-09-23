import React from 'react';
import bem from 'utils/bem';
import './style.scss';

const b = bem('navigation');

const TYPE_PRODUCTS = [
  {
    name: 'Гаражи',
    id: 'garage-id',
  },
  {
    name: 'Дощечки/Азбука',
    id: 'planks-id',
  },
  {
    name: 'Парковка',
    id: 'parking-id',
  },
  {
    name: 'Домик',
    id: 'home-id',
  },
];

function Navigation() {
  const clickItem = (item: any) => {
    const element = document.getElementById(item.id);
    window.scrollTo({
      top: element ? element.offsetTop - 60 : 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={b('')}>
      {TYPE_PRODUCTS.map((item) => (
        <div className={b('list-item')} onClick={() => clickItem(item)} role="button" tabIndex={0}>
          <div className={b('item-name')}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
