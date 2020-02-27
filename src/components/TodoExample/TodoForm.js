import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Input } from '../../atoms/styled';
import { Add } from 'styled-icons/material/Add';
import * as mutations from '../../graphql/mutations';
import { gql } from 'apollo-boost';
import { todosAdd } from '../../store/reducers/todo';

const TodoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const [addTodo] = useMutation(
    gql`
      ${mutations.createTodo}
    `,
    {
      onCompleted(data) {
        dispatch(todosAdd(data));
      }
    }
  );

  const onAdd = () => {
    addTodo({
      variables: {
        input: {
          name: name,
          description: description
        }
      }
    });
  };

  return (
    <>
      <Input
        name="name"
        placeholder="name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <Input
        name="description"
        value={description}
        placeholder="description"
        onChange={event => {
          setDescription(event.target.value);
        }}
      />
      <Button onClick={onAdd}>
        <Add size="32" />
      </Button>
    </>
  );
};

export default TodoForm;
