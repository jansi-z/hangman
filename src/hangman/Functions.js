import image0 from '../images/hangman0.png'
import image1 from '../images/hangman1.png'
import image2 from '../images/hangman2.png'
import image3 from '../images/hangman3.png'
import image4 from '../images/hangman4.png'
import image5 from '../images/hangman5.png'
import image6 from '../images/hangman6.png'
import image7 from '../images/hangman7.png'
import image8 from '../images/hangman8.png'
import image9 from '../images/hangman9.png'

export function returnImage(index){
  const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9]
  var currentImage = images[index]
  return currentImage
}

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

  if (wrong <= 9 && answer === currentWord.split("").join(" "))
    return true
  else
    return false
}

export function isLoser(currentWord, currentGuesses){
  if (wrongGuessCount(currentWord, currentGuesses) > 8)
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
