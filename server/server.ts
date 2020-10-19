import '@babel/polyfill';
import express from 'express';
import compression from 'compression';
import renderer from 'server/renderer';
import { createStore } from 'src/store';
import { fetchProducts } from 'src/pages/products/actions';

const app = express();

app.use(compression());

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', async (_req, res) => {
  const store = createStore();

  await store.dispatch(fetchProducts() as any);

  const content = renderer(store);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
