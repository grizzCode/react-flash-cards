import React from 'react';
import './App.css';
import FlashCards from './flashcard'

class App extends React.Component {
  state = {
    cards: [
      { front: "Card Front", back: "Card Back", show: false, study: true },
      { front: "Card Front 2", back: "Card Back 2", show: false, study: true },
      { front: "Card Front 3", back: "Card Back 3", show: false, study: true }
    ]
  }

  render() {
    return (

      <FlashCards cards={this.state.cards}/>

    );
  }
}
export default App;
