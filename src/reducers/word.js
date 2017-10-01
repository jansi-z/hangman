import { NEW_GAME } from '../actions/newGame'
import { newWord } from '../hangman/Functions'

const word = newWord()

export default (state = word, { type, payload } = {}) => {
  switch (type) {

    case NEW_GAME :
      return payload

    default :
      return state
  }
}
