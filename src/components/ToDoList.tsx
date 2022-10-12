import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Categories, categoryState, toDoSelector } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  // console.log(toDos, 'toDos');

  return (
    <div>
      <Header>
        <h1>To Do List</h1>
        <hr />
      </Header>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

const Header = styled.div`
  line-height: 60px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export default ToDoList;
