import { LetterState, BoardGame, BoardRow } from './types'

export function saveToLocalStorage(data: string) {
    localStorage.setItem('katla-clone', data);
}

export function getLocalData() {
    const data = localStorage.getItem('katla-clone');
    let boardData: Array<BoardGame>;
    let index = 0;
    if(!data) {
      boardData = Array.from({ length: 6 }, () =>
        Array.from({ length: 5 }, () => ({
          letter: '',
          state: LetterState.INITIAL
        }))
      )
    } else {
      const parse = JSON.parse(data);
      boardData = parse['board'];
      index = parse['currentRowIndex']
    }
  
    return {boardData, index}
}