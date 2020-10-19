import { ProductsState } from 'src/pages/products/reducer';
import mergeWith from 'lodash/mergeWith';
import cloneDeep from 'lodash/cloneDeep';

declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

export const getInitialState = () => {
  const state = window.__INITIAL_STATE__ ?? {};
  delete window.__INITIAL_STATE__;

  const scripts = document.getElementsByTagName('script');
  const initialDataScript = Array.from(scripts).find((script) =>
    script.innerHTML.startsWith('window.__INITIAL_STATE__'),
  );

  initialDataScript.parentNode.removeChild(initialDataScript);

  return state;
};

export const mergeState = (
  initialState: ProductsState,
  updatedState: Partial<ProductsState>,
): ProductsState => {
  return mergeWith(cloneDeep(initialState), updatedState, customizer);
};

export const customizer = (initialValue, updatedValue) => {
  return Array.isArray(initialValue) && Array.isArray(updatedValue)
    ? updatedValue
    : undefined;
};
