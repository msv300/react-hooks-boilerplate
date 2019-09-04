import { createSelector } from 'reselect';

const mainStore = () => state => state.get('main');

export const getCounter = createSelector(
  mainStore(),
  store => store.get('counter')
);
