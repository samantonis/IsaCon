import { useMutation } from '@apollo/react-hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Delete, Edit } from 'styled-icons/typicons';
import * as mutations from '../../graphql/mutations';
import { gql } from 'apollo-boost';
import { todosDelete } from '../../store/reducers/todo';

const TodoList = ({ className, listTodos }) => {
  const dispatch = useDispatch();
  const [deleteTodo] = useMutation(
    gql`
      ${mutations.deleteTodo}
    `,
    {
      onCompleted(data) {
        dispatch(todosDelete(data));
      }
    }
  );
  const onDelete = id => {
    deleteTodo({ variables: { input: { id } } });
  };

  const data = listTodos.items;

  return data ? (
    <>
      <ul className={className}>
        {data.map(todo => (
          <li key={todo.id}>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
            <div className="actions">
              <Edit size="32" />
              <Delete onClick={() => onDelete(todo.id)} size="32" />
            </div>
          </li>
        ))}
      </ul>
    </>
  ) : null;
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
