import { newWord } from '../hangman/Functions'

export const NEW_GAME = 'NEW_GAME'

const randomWord = newWord()

export default () => ({
  type: NEW_GAME,
  payload: randomWord
})
