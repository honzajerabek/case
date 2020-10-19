import React from 'react';
import { Product } from 'src/pages/products/types';
import ProductImage from 'src/components/ProductImage/ProductImage';
import ProductPrice from 'src/components/ProductPrice/ProductPrice';
import StarRating from 'src/components/StarRanking/StarRating';
import ProductName from 'src/components/ProductName/ProductName';
import ProductSpecification from 'src/components/ProductSpecification/ProductSpecification';
import styles from './CarouselItem.module.scss';

type Props = {
  product: Product;
};

const CarouselItem: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.item}>
      <ProductImage product={product} />
      <ProductName name={product.name} />
      <StarRating rating={product.rating} />
      <ProductSpecification specification={product.spec} />
      <ProductPrice price={product.price} />
    </div>
  );
};

export default CarouselItem;
