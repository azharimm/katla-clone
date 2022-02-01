export const enum LetterState {
  INITIAL = 0,
  CORRECT = 'correct',
  PRESENT = 'present',
  ABSENT = 'absent'
}

export type BoardRow = {
  letter: string, state: LetterState
}

export type BoardGame = Array<BoardRow>
