import React, { Component } from 'react';
import Title from './components/Title'
import Word from './hangman/Word'
import Guess from './hangman/Guess'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="HANGMAN" />
        <Word />
        <Guess />
      </div>
    );
  }
}

export default App;
