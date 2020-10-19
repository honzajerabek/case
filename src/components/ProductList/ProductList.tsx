import React from 'react';
import styles from 'src/components/ProductList/ProductList.module.scss';
import ProductListItem from 'src/components/ProductListItem/ProductListItem';
import { useSelector } from 'react-redux';
import { selectProductsDataArray } from 'src/pages/products/selectors';

const ProductList = () => {
  const products = useSelector(selectProductsDataArray);

  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductListItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
