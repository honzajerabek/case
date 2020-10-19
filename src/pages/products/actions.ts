import { Action, ThunkResult } from 'src/types/redux';
import * as api from 'src/pages/products/api/products';
import { Product } from 'src/pages/products/types';

export const PRODUCTS_LOAD_START = 'PRODUCTS_LOAD_START';
export const PRODUCTS_LOAD_SUCCESS = 'PRODUCTS_LOAD_SUCCESS';
export const PRODUCTS_LOAD_ERROR = 'PRODUCTS_LOAD_ERROR';

export const fetchProducts = (): ThunkResult<void> => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const data = await api.fetchProducts();

      dispatch(fetchProductsSuccess(data));
    } catch {
      dispatch(fetchProductsError());
    }
  };
};

const fetchProductsStart = (): Action => ({
  type: PRODUCTS_LOAD_START,
});

const fetchProductsSuccess = (products: Record<string, Product>): Action => ({
  type: PRODUCTS_LOAD_SUCCESS,
  payload: products,
});

const fetchProductsError = (): Action => ({
  type: PRODUCTS_LOAD_ERROR,
});
