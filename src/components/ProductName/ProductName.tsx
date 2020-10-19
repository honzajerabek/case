import React from 'react';
import styles from './ProductName.module.scss';

type Props = {
  name: string;
};

const ProductName: React.FC<Props> = ({ name }) => {
  return <div className={styles.name}>{name}</div>;
};

export default ProductName;
