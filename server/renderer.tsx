import React from 'react';
import { renderToString } from 'react-dom/server';
import { BUNDLE_PATHS, CSS_PATHS } from 'generated/client';
import App from 'src/App';

const renderer = (store) => {
  const content = renderToString(<App store={store} />);

  const preloadedState = JSON.stringify(store.getState());

  return `<!DOCTYPE html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              ${CSS_PATHS.map(
                (path) => `<link rel="stylesheet" href="${path}" />`,
              ).join('\n')}
            </head>
            <body>
              <div id="root">${content}</div>
              <script>window.__INITIAL_STATE__ = ${preloadedState}</script>
              ${BUNDLE_PATHS.map(
                (path) => `<script src="${path}"></script>`,
              ).join('\n')}
            </body>
    </html>`;
};

export default renderer;
