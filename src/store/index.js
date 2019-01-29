import { init } from '@rematch/core';
import * as models from 'store/models';
import logger from 'redux-logger';

const store = init({
  models,
  redux: {
    middlewares: [logger],
  }
})

export default store;
