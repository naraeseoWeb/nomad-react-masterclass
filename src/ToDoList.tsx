import React, { useState } from 'react';

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo, 'todo');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} placeholder='Write a to do' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
