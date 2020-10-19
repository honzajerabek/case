import React from 'react';
import styles from './ProductImage.module.scss';
import { Product } from 'src/pages/products/types';

type Props = {
  product: Product;
};

const ProductImage: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.image}>
      <img src={product.img} alt={product.name} />
    </div>
  );
};

export default ProductImage;
