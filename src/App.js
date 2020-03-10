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
  newCard = (card) => {
    //called by handleSubmit function in form
    console.log(card)
    let newArr = [card, ...this.state.cards]
    
    this.setState({
      cards: newArr
    });
  }

  deleteCard = (id) => {
    let { cards } = this.state
    let filteredArr = cards.filter(card => card.id !== id);
    
    this.setState({
      cards: filteredArr
    });
  }

  render() {
    const { showForm } = this.state
    return (
    <Container>
      <div className="top">
      <Button color='teal' onClick={this.toggleForm}>New Card</Button>
      </div>
      {showForm ? <NewCard addCard={this.newCard}/> : null}
      <FlashCards cards={this.state.cards} deleteCard={this.deleteCard}/>
    </Container>
    )
  }
}
export default App;
