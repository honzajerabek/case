import React from 'react';
import styles from './Price.module.scss';

type Props = {
  price: string;
};

const ProductPrice: React.FC<Props> = ({ price }) => {
  return <div className={styles.price}>{price}</div>;
};

export default ProductPrice;
