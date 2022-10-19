import React from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import Board from './Components/Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    /*     setToDos((oldToDos) => {
      const todosCopy = [...oldToDos];
      // 1) Delete item on source.index
      todosCopy.splice(source.index, 1);
      // 2) Put back the item on the destination.index
      todosCopy.splice(destination?.index, 0, draggableId);
      return todosCopy;
    }); */
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
