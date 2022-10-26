import { atom } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
}
// toDoState에게 3가지 옵션 이외의 확장성을 주기 위함
interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    doing: [],
    done: [],
  },
});
