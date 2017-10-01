import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import submitGuess from '../actions/guess'
import { gameOver } from './Functions'
import './Guess.css'

export class Guess extends PureComponent {

  submitForm(event) {
    event.preventDefault()

    const guess = this.refs.guess.value

    this.props.submitGuess(guess)

    document.getElementById("guessForm").reset()
  }

  render() {
    const hide = gameOver(this.props.word, this.props.guesses)

    if (hide === true) return null

    else
      return(
        <div className="guess">
          <h2>Enter a letter</h2>
          <form id="guessForm" onSubmit={this.submitForm.bind(this)}>
            <div className="input">
              <input ref="guess" type="guess" />
            </div>
            <input type="submit" value="Guess!" />
          </form>
        </div>
      )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
const mapDispatchToProps = { submitGuess }

export default connect(mapStateToProps, mapDispatchToProps)(Guess)
