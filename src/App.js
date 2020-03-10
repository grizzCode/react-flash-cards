import React from 'react';
import './App.css';
import FlashCards from './flashcard'

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front: "Card Front", back: "Card Back", show: false, study: true },
      { id: 2, front: "Card Front 2", back: "Card Back 2", show: false, study: true },
      { id: 3, front: "Card Front 3", back: "Card Back 3", show: false, study: true }
    ]
  }

  render() {
    return (

      <FlashCards cards={this.state.cards}/>

    );
  }
}
export default App;
