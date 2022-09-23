import React from 'react';
import bem from 'utils/bem';
import { IProductItem } from 'interface';
import ProductItem from 'components/ProductItem';
import imageElipse from 'img/ellipse.png';
import './style.scss';

type Props = {
  title: string;
  products: IProductItem[];
  id: string;
};

const b = bem('product-list');

function ProductList({ products, title, id }: Props) {
  return (
    <div className={b('')} id={id}>
      <div className={b('title')}>{title}</div>
      <div className={b('list')}>
        {products.map((item) => (
          <ProductItem data={item} />
        ))}
      </div>
      <img className={b('elipse', { one: true })} src={imageElipse} alt="img" />
      <img className={b('elipse', { two: true })} src={imageElipse} alt="img" />
    </div>
  );
}

export default ProductList;
