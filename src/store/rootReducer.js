import { combineReducers } from 'redux-immutable';
import main from './Main/reducer';

const rootReducer = combineReducers({
  main
});

export default rootReducer;
