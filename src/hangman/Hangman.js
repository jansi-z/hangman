import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { wrongGuessCount } from './Functions'
import { isWinner } from './Functions'
import { isLoser } from './Functions'
import { returnImage } from './Functions'

export class Hangman extends PureComponent {
  render() {
    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const wrongGuesses = wrongGuessCount(currentWord, currentGuesses)

    return (

        <img src={returnImage(wrongGuesses)} alt={wrongGuesses} />

    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Hangman)
