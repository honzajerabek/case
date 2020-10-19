import React from 'react';
import { Provider } from 'react-redux';
import { Products } from 'src/pages/products/Products';
import 'src/App.module.scss';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

export default App;
