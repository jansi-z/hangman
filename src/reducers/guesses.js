import { GUESS } from '../actions/guess'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case GUESS :
      [...payload].concat(state)
    default :
      return state
  }
}
