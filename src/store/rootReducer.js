import { combineReducers } from 'redux';
import todoReducer from './reducers/todo';

const allReducers = combineReducers({
  todos: todoReducer
});

export default (state, action) => {
  if (action.type === 'GLOBAL_STORE_RESET') {
    state = undefined;
  }
  return allReducers(state, action);
};
