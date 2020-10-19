import {
  initialState,
  productsReducer,
  ProductsState,
} from 'src/pages/products/reducer';
import { applyMiddleware, createStore as reduxCreateStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mergeState } from 'src/helpers';

export const createStore = (
  preloadedState?: Partial<ProductsState>,
): Store<ProductsState> => {
  const state = mergeState(initialState, preloadedState);

  return reduxCreateStore(
    productsReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
