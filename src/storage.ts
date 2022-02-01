import { LetterState, BoardGame, localStorageKey } from './types'

export const initData = Array.from({ length: 6 }, () =>
	Array.from({ length: 5 }, () => ({
	letter: '',
	state: LetterState.INITIAL
	}))
)

export function saveToLocalStorage(key: localStorageKey, data: string) {
    localStorage.setItem(key, data);
}

export function getLocalBoardData() {
    const data = localStorage.getItem('katla-clone');
    let boardData: Array<BoardGame>;
    let index = 0;
    if(!data) {
      boardData = initData;
    } else {
      const parse = JSON.parse(data);
      boardData = parse['board'];
      index = parse['currentRowIndex']
    }
  
    return {boardData, index}
}

export function getLocalDayData() {
	const data = localStorage.getItem('katla-day');
	if(!data) return data;
	return JSON.parse(data);
}