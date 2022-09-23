import React, { useEffect, useState } from 'react';
import bem from 'utils/bem';
import { IProductItem } from 'interface';
import closeIcon from 'img/close-icon.png';
import './style.scss';

const b = bem('popup-product');

type Props = {
  close: () => void;
  data: IProductItem;
};

function PopupProduct({ close, data }: Props) {
  const { images, imageUri } = data;

  const [selectedImage, selectImage] = useState(imageUri);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 27) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);

  return (
    <div className={b('')}>
      <div className={b('content')}>
        <img className={b('main-image')} src={selectedImage} alt="img" />
        <div className={b('list-images')}>
          {images?.map((item) => (
            <img
              className={b('image')}
              src={item}
              alt="img"
              onClick={() => selectImage(item)}
            />
          ))}
        </div>
        <button
          className={b('close-btn')}
          type="button"
          onClick={close}
        >
          <img src={closeIcon} alt="img" />
        </button>
      </div>
    </div>
  );
}

export default PopupProduct;
