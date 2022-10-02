import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
`;

const Circle = styled(Box)`
  border-radius: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor='teal' />
      <Circle bgColor='tomato' />
    </Father>
  );
}

export default App;
