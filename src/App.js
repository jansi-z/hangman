import React, { Component } from 'react';
import Title from './components/Title'
import Hangman from './hangman/Hangman'
import Word from './hangman/Word'
import Guess from './hangman/Guess'
import NewGameButton from './hangman/NewGameButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="HANGMAN" />
        <Hangman />
        <Word />
        <Guess />
        <NewGameButton />
      </div>
    );
  }
}

export default App;
