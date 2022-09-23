import React from 'react';
import bem from 'utils/bem';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import ProductList from 'components/ProductList';
import {
  TITLE_GARAGE,
  TITLE_PLANKS,
  TITLE_PARKING,
  TITLE_HOME,
  PRODUCT_LIST_GARAGE,
  PRODUCT_LIST_PLANKS,
  PRODUCT_LIST_PARKING,
  PRODUCT_LIST_HOME,
} from './constants';
import './style.scss';

const b = bem('main-page');

function MainPage() {
  return (
    <div className={b('')}>
      <Header />
      <div className={b('content')}>
        <Navigation />
        <ProductList
          title={TITLE_GARAGE}
          products={PRODUCT_LIST_GARAGE}
          id="garage-id"
        />
        <ProductList
          title={TITLE_PLANKS}
          products={PRODUCT_LIST_PLANKS}
          id="planks-id"
        />
        <ProductList
          title={TITLE_PARKING}
          products={PRODUCT_LIST_PARKING}
          id="parking-id"
        />
        <ProductList
          title={TITLE_HOME}
          products={PRODUCT_LIST_HOME}
          id="home-id"
        />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
