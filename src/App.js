import React, { Component } from 'react';
import Title from './components/Title'
import Word from './hangman/Word'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="HANGMAN" />
        <Word />
      </div>
    );
  }
}

export default App;
