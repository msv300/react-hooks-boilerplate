import { fromJS } from 'immutable';

export const types = {
  ADD_COUNTER: "ADD_COUNTER",
  SUBTRACT_COUNTER: "SUBTRACT_COUNTER",
  FETCH_TODOS: "FETCH_TODOS",
  RECEIVED_TODOS: "RECEIVED_TODOS",
};

export const inititalState = fromJS({
  counter: 0,
  todo: [],
  loading: false,
});

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.ADD_COUNTER:
      return state.set('counter', state.get('counter') + 1);
    case types.SUBTRACT_COUNTER:
      return state.set('counter', state.get('counter') - 1);
    case types.FETCH_TODOS:
      return state.set('loading', true);
    case types.RECEIVED_TODOS:
      return state.set('todo', action.result);
    default:
      return state;
  }
}

export default reducer;