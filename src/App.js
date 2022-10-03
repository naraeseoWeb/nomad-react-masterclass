import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;
// Emoji라는 스타일드 컴포넌트와 실제 적용된 html이 다를 때 스타일이 적용되지 않는데,
// 이런 경우 Box 컴포넌트 안에 직접 Emoji의 태그를 넣으면 실행 됨
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  // 직접 Emoji 태그 넣기
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Father as='header'>
      <Box>
        <Emoji>😆</Emoji>
      </Box>
      <Emoji>😆</Emoji>
    </Father>
  );
}

export default App;
