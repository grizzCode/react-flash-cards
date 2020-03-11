import React from 'react';
import './App.css';
import FlashCards from './flashcard'
import NewCard from './newcard';
import { Container, Button } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front: "Card Front", back: "Card Back", study: true, flipped: false },
      { id: 2, front: "Card Front 2", back: "Card Back 2", study: true , flipped: false },
      { id: 3, front: "Card Front 3", back: "Card Back 3", study: true , flipped: true }
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

  flipCard = (id) => {
    let { cards } = this.state
   

    //locate object:
    let arrFlip = cards.map(card => {
      if (card.id === id) {
        return {id: card.id, front: card.front, back: card.back, study: card.study, flipped: card.flipped = !card.flipped}
      }
      return card
    });
    this.setState({
      cards: arrFlip
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
      <FlashCards cards={this.state.cards} deleteCard={this.deleteCard} flipCard={this.flipCard}/>
    </Container>
    )
  }
}
export default App;
