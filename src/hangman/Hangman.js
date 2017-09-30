import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { wrongGuessCount } from './Functions'
import { isWinner } from './Functions'
import { isLoser } from './Functions'

export class Hangman extends PureComponent {
  render() {
    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const wrongGuesses = wrongGuessCount(currentWord, currentGuesses)
    const winState = isWinner(currentWord, currentGuesses)
    const loss = isLoser(currentWord, currentGuesses)

    if (winState === true) return (
      <div className="hangman">
        <h1>You win :D </h1>
      </div>
    )

    else if (loss === true) return (
      <div className="hangman">
        <h1>You lose :(</h1>
      </div>
    )

    else return (
      <div className="hangman">
        <h1>{`${wrongGuesses}/6 wrong guesses`}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Hangman)
