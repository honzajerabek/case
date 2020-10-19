import { ProductsState } from 'src/pages/products/reducer';
import { createSelector } from 'reselect';

export const selectProductsData = (state: ProductsState) => state.products;

export const selectProductsDataArray = createSelector(
  selectProductsData,
  (products) => {
    return Object.values(products);
  },
);

/**
 * For carousel, show only "is_action" products and maximum 10 products
 */
export const selectCarouselProducts = createSelector(
  selectProductsDataArray,
  (products) => {
    const CAROUSEL_MAX_COUNT = 10;
    return products.filter(
      (product, index) => product.is_action && index < CAROUSEL_MAX_COUNT,
    );
  },
);
