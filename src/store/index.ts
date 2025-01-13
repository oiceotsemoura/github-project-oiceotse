import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers';
import {githubApi} from '@services/github';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export {store};
