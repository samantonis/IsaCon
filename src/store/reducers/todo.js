import { createActions, handleActions } from 'redux-actions';

const initialState = {};

export const TODOS_FETCH = 'TODOS_FETCH';
export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_DELETE = 'TODOS_DELETE';

export const { todosFetch, todosAdd, todosDelete } = createActions(
  TODOS_FETCH,
  TODOS_ADD,
  TODOS_DELETE
);

export default handleActions(
  {
    [TODOS_FETCH]: (state, { payload }) => ({
      ...initialState,
      ...payload.listTodos
    }),
    [TODOS_ADD]: (state, { payload }) => ({
      ...initialState,
      items: [...state.items, payload.createTodo]
    }),
    [TODOS_DELETE]: (state, { payload }) => ({
      ...initialState,
      items: state.items.filter(({ id }) => id !== payload.deleteTodo.id)
    })
  },
  initialState
);
