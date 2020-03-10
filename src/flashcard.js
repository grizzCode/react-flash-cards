import React from 'react'
import { Button, Card, Checkbox } from 'semantic-ui-react'

const FlashCards = (props) => (
  <Card.Group>
    {props.cards.map( card => (
    <Card key={`card-${card.id}`}>
         <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Front
          </Button>
          <Button basic color='red'>
            Back
          </Button>
        </div>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          {card.front}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Checkbox toggle label='I know this one!'/>
          
          
          {/* <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button> */}
        </div>
      </Card.Content>
    </Card>
    ))};
  </Card.Group>
)

export default FlashCards

