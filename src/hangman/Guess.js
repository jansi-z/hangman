import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import submitGuess from '../actions/guess'
import { isWinner } from './Functions'


export class Guess extends PureComponent {

  submitForm(event) {
    event.preventDefault()

    const guess = this.refs.guess.value

    this.props.submitGuess(guess)

    document.getElementById("guessForm").reset()
  }

  render() {
    const winState = isWinner(this.props.word, this.props.guesses)

    if (winState === true) return (
      <div className="guess">
        <button>Play again</button>
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

export default connect(mapStateToProps, { submitGuess })(Guess)
