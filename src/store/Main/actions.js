import { types } from './reducer';

export const incrementCounter = () => ({
  type: types.ADD_COUNTER
})

export const decrementCounter = () => ({
  type: types.SUBTRACT_COUNTER
});