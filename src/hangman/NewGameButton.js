import React, { PureComponent } from 'react'
import newGame from '../actions/newGame'
import { connect } from 'react-redux'
import { gameOver } from './Functions'
import './NewGameButton.css'

export class NewGameButton extends PureComponent {

  playAgain(event) {
    this.props.newGame()
  }

  render () {
    const hide = gameOver(this.props.word, this.props.guesses)

    if (hide === true)
      return (
        <div className="guess">
          <button onClick={this.playAgain.bind(this)}>Start a new game</button>
        </div>
      )

    else return null
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })
const mapDispatchToProps = { newGame }

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton)
