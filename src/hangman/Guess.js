import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import submitGuess from '../actions/guess'
import { isWinner } from './Functions'
import { wrongGuessCount } from './Functions'
import newGame from '../actions/newGame'

export class Guess extends PureComponent {

  submitForm(event) {
    event.preventDefault()

    const guess = this.refs.guess.value

    this.props.submitGuess(guess)

    document.getElementById("guessForm").reset()
  }

  playAgain(event){
    this.props.newGame()
  }

  render() {
    const winState = isWinner(this.props.word, this.props.guesses)
    const wrongGuesses = wrongGuessCount(this.props.word, this.props.guesses)

    if (winState === true || wrongGuesses > 5) return (
      <div className="guess">
        <button onClick={this.playAgain.bind(this)}>Play again</button>
      </div>
    )

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
const mapDispatchToProps = { newGame, submitGuess }

export default connect(mapStateToProps, mapDispatchToProps)(Guess)
