import React from 'react'
import { Form } from 'semantic-ui-react'

class NewCard extends React.Component {
  state = {
    id: '',
    front: '',
    back: '',
    study: true
  }
  generateId = () => {
    return Math.floor(Math.random()*100)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit working')
    console.log(this.state)

    //send up to App.js state:
    //##### CODE ######

    //clear form once submitted
    this.setState({
      id: '', 
      front:'',
      back:''
    })
  }

  handleChange = (event) => {
   //remember that we get passed an event object when onClick is triggered, and we want the data in "target"
    
    //call random ID generator
    let x = this.generateId()
    this.setState({
  // The following format automatically sets what is in the [] as the key for the key : value pair. 
      id: x,
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.TextArea
            width={10}
            label='Front of Card'
            name='front'
          // placeholder='Enter Name'
          value={this.state.front}
          onChange={this.handleChange}
          />
          <Form.TextArea
            width={10}
            label='Back of Card'
            name='back'
          // placeholder='Phone'
          value={this.state.back}
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button basic color='green'>SUBMIT</Form.Button>
        <hr />
      </Form>
    )
  }

}

export default NewCard