export function wrongGuessCount(currentWord, currentGuesses) {
    return currentGuesses.reduce(function(sum, guess) {
      return sum + (currentWord.indexOf(guess, 0) === -1)
    }, 0);
}

export function showGuess(currentWord, currentGuesses){
  var wordArray = currentWord.split("")
  var guess = wordArray.map(function(letter){
    if (currentGuesses.includes(letter) === false) return "_"
    else return letter
  })
  var showGuess = guess.join(" ")
  return showGuess
}

export function isWinner(currentWord, currentGuesses) {
  var wrong = wrongGuessCount(currentWord, currentGuesses)
  var answer = showGuess(currentWord, currentGuesses)

  if (wrong <= 6 && answer === currentWord.split("").join(" "))
    return true
  else
    return false
}

export function isLoser(currentWord, currentGuesses){
  if (wrongGuessCount(currentWord, currentGuesses) > 5)
    return true
  else
    return
}

export function gameOver(currentWord, currentGuesses){
  if (isWinner(currentWord, currentGuesses) || isLoser(currentWord, currentGuesses))
    return true
  else
    return false
}

export function newWord(){
  var words  = ['abruptly', 'absurd', 'banjo', 'jazzy', 'wave', 'whiskey', 'doll', 'essential', 'donkey', 'weather', 'cupboard', 'arrange', 'table', 'rhyme', 'hurry']
  var randomWord = words[Math.floor(Math.random()*words.length)]
  return randomWord
}
