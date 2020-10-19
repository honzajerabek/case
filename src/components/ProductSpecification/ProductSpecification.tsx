import React from 'react';
import styles from './ProductSpecification.module.scss';

type Props = {
  specification: string;
};

const ProductSpecification: React.FC<Props> = ({ specification }) => {
  return <div className={styles.specification}>{specification}</div>;
};

export default ProductSpecification;
