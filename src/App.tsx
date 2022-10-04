import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  // 같은 버튼 온클릭 이벤트라고 하더라도 form 내부에 있는지 여부에 따라 MouseEvent/FormEvent 차이가 남
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div>
      <Container>
        <Dummy active text='hello' />
        {/* <Dummy active={true} text='hello' /> */}
        <button onClick={onClick}>Click me</button>
      </Container>
    </div>
  );
}

export default App;
