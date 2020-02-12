import React, { useState } from 'react';
import { Button } from '../atoms/styled';

export const TodoForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    const input = {
      name: name,
      description: description
    };
    onCreate({ input });
  };

  return (
    <>
      <input
        name="name"
        placeholder="name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <input
        name="description"
        value={description}
        placeholder="description"
        onChange={event => {
          setDescription(event.target.value);
        }}
      />
      <Button onClick={addTodo}>Add</Button>
    </>
  );
};
