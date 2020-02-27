import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { TodoForm, TodoList } from '../../components';
import * as queries from '../../graphql/queries';
import { todosFetch } from '../../store/reducers/todo';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const TodoExample = ({ todos }) => {
  const dispatch = useDispatch();

  const { loading, error } = useQuery(
    gql`
      ${queries.listTodos}
    `,
    {
      onCompleted(data) {
        dispatch(todosFetch(data));
      }
    }
  );

  if (error) return <h3>Error</h3>;
  if (loading || !todos) return <h3>Loading...</h3>;

  return (
    <>
      <h3>The famous todo example</h3>
      <TodoForm />
      <TodoList listTodos={todos} loading={loading} error={error} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoExample);
