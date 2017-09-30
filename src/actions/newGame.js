export const NEW_GAME = 'NEW_GAME'

const words  = ['abruptly', 'absurd', 'banjo', 'jazzy', 'wave', 'whiskey', 'doll', 'essential', 'donkey', 'weather', 'cupboard', 'arrange', 'table', 'rhyme', 'hurry']
const word = words[Math.floor(Math.random()*words.length)]


export default () => ({
  type: NEW_GAME,
  payload: word
})
