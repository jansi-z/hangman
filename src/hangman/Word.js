import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess } from './Functions'


export class Word extends PureComponent {

  render() {

    const currentWord = this.props.word
    const currentGuesses = this.props.guesses
    const playerWord = showGuess(currentWord, currentGuesses)

    return(
      <h1>{ playerWord }</h1>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Word)
