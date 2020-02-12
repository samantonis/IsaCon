import { createActions, handleActions } from 'redux-actions';

const initialState = {};

export const TODOS_FETCH = 'TODOS_FETCH';

export const { todosFetch } = createActions(TODOS_FETCH);

export default handleActions(
  {
    [TODOS_FETCH]: (state, { payload }) => ({
      ...initialState,
      items: payload.data.listTodos.items
    })
  },
  initialState
);
