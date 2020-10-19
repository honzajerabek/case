import React from 'react';
import { Product } from 'src/pages/products/types';
import styles from 'src/components/ProductListItem/ProductListItem.module.scss';
import Promos from 'src/components/Promos/Promos';
import StarRating from 'src/components/StarRanking/StarRating';
import ProductPrice from 'src/components/ProductPrice/ProductPrice';
import ProductImage from 'src/components/ProductImage/ProductImage';
import ProductName from 'src/components/ProductName/ProductName';
import ProductSpecification from 'src/components/ProductSpecification/ProductSpecification';
import BuyButton from 'src/components/BuyButton/BuyButton';

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <ProductName name={product.name} />
        <ProductSpecification specification={product.spec} />
        {product.promos && <Promos promos={product.promos} />}
      </div>
      <div>
        <div className={styles.image}>
          <ProductImage product={product} />
          <div className={styles.rating}>
            <StarRating rating={product.rating} />
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <ProductPrice price={product.price} />
            <div className={styles.cprice}>
              <span className={styles.strikethrough}>{product.cprice}</span>
            </div>
          </div>
          <div>
            <BuyButton onBuyClick={() => alert('Koupeno :)')} />
          </div>
        </div>
        <div className={styles.availability}>{product.avail}</div>
      </div>
    </div>
  );
};

export default ProductListItem;
