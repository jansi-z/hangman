// shows the current word

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Word extends PureComponent {
  //static propTypes etc


  render() {

    const currentWord = this.props.word
    // const currentGuesses = this.props.guesses

    debugger;
    return(
      <h1>{ currentWord }</h1>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Word)
