import React from 'react';
import styled from 'styled-components';

const TodoList = ({ className, error, loading, listTodos }) => {
  if (error) return <h3>Error</h3>;
  if (loading || !listTodos) return <h3>Loading...</h3>;
  return (
    <>
      <ul className={className}>
        {listTodos.items.sort().map(todo => (
          <li key={todo.id}>
            {todo.name}
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default styled(TodoList)`
  padding: 0;
  list-style: none;
  li {
    p {
      text-align: center;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border-radius: 10px;
    }
  }
`;
