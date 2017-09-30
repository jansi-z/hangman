import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

function wrongGuessCount(currentWord, currentGuesses) {
  return currentGuesses.reduce(function(sum, guess) {
    return sum + (currentWord.indexOf(guess, 0) === -1)
  }, 0);
}

export class Hangman extends PureComponent {
  render() {
    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const wrongGuesses = wrongGuessCount(currentWord, currentGuesses)

    return(
      <div className="hangman">
        <h1>{`${wrongGuesses}/6 wrong guesses`}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Hangman)
