// shows the current word

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function showGuess(currentWord, currentGuesses){
  var wordArray = currentWord.split("")
  var guess = wordArray.map(function(letter){
    if (currentGuesses.includes(letter) === false) return "_"
    else return letter
  })
  var showGuess = guess.join(" ")
  return showGuess
}

export class Word extends PureComponent {

  render() {

    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const playerWord = showGuess(currentWord, currentGuesses)


    // debugger;
    return(
      <h1>{ playerWord }</h1>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Word)
