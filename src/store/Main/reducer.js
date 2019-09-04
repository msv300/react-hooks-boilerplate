import { fromJS } from 'immutable';

export const types = {
  ADD_COUNTER: "ADD_COUNTER",
  SUBTRACT_COUNTER: "SUBTRACT_COUNTER",
};

export const inititalState = fromJS({
  counter: 0
});

const reducer = (state = inititalState, action) => {
  switch(action.type) {
    case types.ADD_COUNTER:
      return state.set('counter', state.get('counter') + 1);
    case types.SUBTRACT_COUNTER:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

export default reducer;