import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess } from './Functions'
import { isWinner } from './Functions'
import { isLoser } from './Functions'

export class Word extends PureComponent {

  render() {

    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const playerWord = showGuess(currentWord, currentGuesses)
    const win = isWinner(currentWord, currentGuesses)
    const loss = isLoser(currentWord, currentGuesses)

    function singleGuess(guess) {
      return guess + " "
    }

    if (win === true || loss === true) return (
      <div className="console">
        <h1>Game over!</h1>
      </div>
    )
    
    else return (
      <div className="console">
        <h1>{ playerWord }</h1>
        <h2>You guessed: { currentGuesses.map(singleGuess) }</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Word)
