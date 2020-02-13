import React, { useState } from 'react';
import { Button, Input } from '../../atoms/styled';
import { Add } from 'styled-icons/material/Add';


const TodoForm = ({ onCreate }) => {
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
      <Button onClick={addTodo}><Add size="32"/></Button>
    </>
  );
};

export default TodoForm;
