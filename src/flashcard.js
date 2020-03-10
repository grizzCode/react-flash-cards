import React from 'react'
import { Button, Card, Checkbox, Icon } from 'semantic-ui-react'

const FlashCards = (props) => (
  <Card.Group>
    {props.cards.map(card => (
      <Card key={`card-${card.id}`}>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Checkbox toggle label='Flip Card' />

          </div>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <div className="cardText">
              {card.front}
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            {/* <Checkbox label='I know this one!'/> */}

          </div>
          <div className='iconPadding'>
            <Icon bordered name='trash alternate' />
          </div>
        </Card.Content>

      </Card>
    ))}
  </Card.Group>

)

export default FlashCards

