import React from 'react';
import styled from 'styled-components';
import { Delete, Edit } from 'styled-icons/typicons';

const TodoList = ({ className, error, loading, listTodos }) => {
  if (error) return <h3>Error</h3>;
  if (loading || !listTodos) return <h3>Loading...</h3>;
  return (
    <>
      <ul className={className}>
        {listTodos.items.sort().map(todo => (
          <li key={todo.id}>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
            <div className="actions">
              <Edit size="32" />
              <Delete size="32" />
            </div>
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
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.gutter};
    h4 {
      text-align: center;
      font-weight: 600;
    }
    p {
      padding: 5px;
    }
    .actions {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
