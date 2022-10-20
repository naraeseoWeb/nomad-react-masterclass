import { atom } from 'recoil';

// toDoState에게 3가지 옵션 이외의 확장성을 주기 위함
interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': ['a', 'b'],
    doing: ['c', 'd', 'e'],
    done: ['f'],
  },
});
