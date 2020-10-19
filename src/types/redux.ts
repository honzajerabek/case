import { ThunkAction } from 'redux-thunk';
import { ProductsState } from 'src/pages/products/reducer';

export type AnyAction =
  | ThunkAction<ThunkResult<any>, ProductsState, any, Action>
  | Action;

export type ThunkResult<R> = ThunkAction<R, ProductsState, undefined, Action>;

export type Action<T = any> = {
  type: string;
  payload?: T;
};
