import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const FlashCards = (props) => (
  <Card.Group>
    {props.cards.map( card => (
    <Card>
      <Card.Content>
        {/* <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        /> */}
        <Card.Description>
          {card.front}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    ))};
  </Card.Group>
)

export default FlashCards

