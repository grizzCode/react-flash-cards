import React from 'react';
import './App.css';
import FlashCards from './flashcard'
import NewCard from './newcard';
import { Container, Button } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front: "Card Front", back: "Card Back", study: true },
      { id: 2, front: "Card Front 2", back: "Card Back 2", study: true },
      { id: 3, front: "Card Front 3", back: "Card Back 3", study: true }
    ],
    showForm: false
  }

  toggleForm = () => {
    // nice easy way to toggle element
    this.setState({
    showForm: !this.state.showForm
  })
}

  render() {
    const { showForm } = this.state
    return (
    <Container>
      <div className="top">
      <Button color='teal' onClick={this.toggleForm}>New Card</Button>
      </div>
      {showForm ? <NewCard/> : null}
      <FlashCards cards={this.state.cards}/>
    </Container>
    )
  }
}
export default App;
