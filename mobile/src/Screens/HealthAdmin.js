import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, ButtonToolbar, InputGroup, Form } from 'react-bootstrap';
import '../HealthAdmin.css';


import update from 'immutability-helper'

import axios from 'axios'


class HealthAdmin extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                typeInput: '', 
                storyName: '',
                customText: [], 
                customImages: [] 
            };

        this.handleStoryName = this.handleStoryName.bind(this);
        this.handleCustomText = this.handleCustomText.bind(this);
        this.handleCustomImages = this.handleCustomImages.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        }
    
    handleStoryName(event) {
      this.setState({storyName: event.target.value });
    }
    handleCustomText(event) {
      // this.setState({ customText: update(this.state.customText, {$push: event.target.value })});  
    }

    handleCustomImages(event) {
      this.setState({ customImages: update(this.state.customImages, {$push: event.target.value })});  
    }

    handleTextInput(event) {
      this.setState({typeInput: event.target.value })
      
    }

    handleButtonVal(val) { 
      var myVal = this.state.typeInput + " " + val; 
      alert(myVal); 
      this.setState({typeInput: myVal});
      console.log(this.state.typeInput);
    }

    handleSubmit(event) {
      axios.post('http://127.0.0.1:8080/addUser', this.state.email, this.state)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

    render() {
        return (

          
          <div>
          <h3> Add a new Story </h3>

          <InputGroup>
          <FormControl
            placeholder="New Story Title"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

          <br/> 
        <input
type="file"

/>  

          <br/>


<InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Custom Text</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id = "textarea" as="textarea" onChange ={this.handleTextInput} aria-label="Custom Text" />
    <InputGroup.Append>
        <Button onClick={this.handleCustomText()}> Add page </Button>
    </InputGroup.Append>

    
  </InputGroup>
      <br/> 
        <InputGroup className="mb-3">


        <ButtonToolbar>

<Button variant="secondary" onClick={() => this.handleButtonVal("$$CHILD$$")}>Child Name</Button>
<Button variant="secondary" onClick={() => this.handleButtonVal("$$CARETAKER$$")}>Caretaker</Button>
<Button variant="secondary" onClick={() => this.handleButtonVal("$$GENDER$$")}>Gender</Button>
<Button variant="secondary" onClick={() => this.handleButtonVal("$$AGE$$")}> Age</Button>
<Button variant="secondary" onClick={() => this.handleButtonVal("$$RACE$$")}>Race</Button>
<Button variant="secondary" onClick={() => this.handleButtonVal("$$FAVTOY$$")}>Favorite Toy</Button>

<Button variant="secondary" onClick={() => console.log(this.state.customText)}>Favorite Toy</Button>

</ButtonToolbar>
        
        </InputGroup>
      
        
      </div>
              
        );

    }
}
export default HealthAdmin;
