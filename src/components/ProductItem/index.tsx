import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import bem from 'utils/bem';
import { IProductItem } from 'interface';
import PopupProduct from 'components/PopupProduct';
import './style.scss';

type Props = {
  data: IProductItem,
};

const b = bem('product-item');

function ProductItem({ data }: Props) {
  const [isOnHover, setIsOnHover] = useState(false);
  const [isShowPopup, SetIsShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setIsOnHover(true);
  };

  const handleMouseLeave = () => {
    setIsOnHover(false);
  };

  const closePopup = () => {
    SetIsShowPopup(false);
  };

  const showPopup = () => {
    SetIsShowPopup(true);
  };

  return (
    <div className={b('')}>
      <div
        className={b('image-block')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={b('image', { cursor: data.images && data.images.length })}
          src={data.imageUri}
          alt="img"
        />
        {data.images && data.images.length && isOnHover && (
          <div className={b('vual', { show: isOnHover })}>
            <button
              className={b('vual-btn')}
              type="button"
              onClick={showPopup}
            >
              Подробнее

            </button>
          </div>
        )}
      </div>
      <span className={b('name')}>{data.name}</span>
      <span className={b('price')}>{`${data.price} руб.`}</span>
      {isShowPopup && ReactDOM.createPortal(<PopupProduct
        close={closePopup}
        data={data}
      />, document.getElementById('root') as HTMLElement)}
    </div>
  );
}

export default ProductItem;
