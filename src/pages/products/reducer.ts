import {
  PRODUCTS_LOAD_ERROR,
  PRODUCTS_LOAD_START,
  PRODUCTS_LOAD_SUCCESS,
} from 'src/pages/products/actions';
import { Action } from 'src/types/redux';
import { Product } from 'src/pages/products/types';

export type ProductsState = {
  products: Record<string, Product>;
  loading: boolean;
};

export const initialState: ProductsState = {
  products: {},
  loading: false,
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: Action,
): ProductsState => {
  switch (action.type) {
    default: {
      return state;
    }
    case PRODUCTS_LOAD_START: {
      return { ...state, loading: true };
    }
    case PRODUCTS_LOAD_ERROR: {
      return { ...state, loading: false };
    }
    case PRODUCTS_LOAD_SUCCESS: {
      return { ...state, loading: false, products: action.payload };
    }
  }
};
