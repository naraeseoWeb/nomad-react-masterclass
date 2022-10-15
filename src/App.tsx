import React from 'react';
import {
  Draggable,
  DragDropContext,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    setToDos((prev) => [...prev.splice(+source.index, +source.index - 1)]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={index} draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {/* 테이블의 크기 유지 시켜줌 */}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
