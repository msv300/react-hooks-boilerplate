import { createSelector } from 'reselect';

const mainStore = () => state => state.get('main');

export const getCounter = createSelector(
  mainStore(),
  store => store.get('counter')
);

export const getTodo = createSelector(
  mainStore(),
  store => store.get('todo')
);
