import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { graphqlOperation, API } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { TodoForm, TodoList } from '../components';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import * as mutations from '../graphql/mutations';
import { todosFetch } from '../store/reducers/todo';

const HomePage = () => {
  const dispatch = useDispatch();

  // fetch data REST style and store in redux as example
  useEffect(() => {
    async function fetchData() {
      const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
      dispatch(todosFetch(allTodos));
    }
    fetchData();
  }, []);

  return (
    <>
      <header>The famous todo example</header>

      <Connect mutation={graphqlOperation(mutations.createTodo)}>
        {({ mutation }) => <TodoForm onCreate={mutation} />}
      </Connect>

      <Connect
        query={graphqlOperation(queries.listTodos)}
        subscription={graphqlOperation(subscriptions.onCreateTodo)}
        onSubscriptionMsg={(prev, { onCreateTodo }) => {
          prev.listTodos.items.push(onCreateTodo);
          return prev;
        }}
      >
        {({ data: { listTodos }, loading, error }) => (
          <TodoList listTodos={listTodos} loading={loading} error={error} />
        )}
      </Connect>
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(HomePage);
