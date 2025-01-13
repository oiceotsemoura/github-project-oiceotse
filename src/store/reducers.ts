import {combineReducers} from '@reduxjs/toolkit';
import {githubApi} from '@services/github';

const reducers = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
});

export {reducers};

export type RootState = ReturnType<typeof reducers>;
