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
                customImages: [],
                pages: 0 
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
       this.setState({ customText: update(this.state.customText, {$push: [this.state.typeInput] })});
       console.log(this.state.customText);
       console.log(this.state.customImages);   
       this.setState({typeInput: ''}); 
       var newPages = this.state.pages+1  
       this.setState({ pages: newPages}); 
      }

    handleCustomImages(event) {
      console.log(event.target.value);
      this.setState({ customImages: update(this.state.customImages, {$push: ['IMG_DATA'] })});

    }

    handleTextInput(event) {
      this.setState({typeInput: event.target.value })
      
    }

    handleButtonVal(val) { 
      var myVal = this.state.typeInput + " " + val; 
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
          <Form>
        <input
type="file"
onSubmit = {() => this.handleCustomImages()}

/>  
<input type="submit" value="Upload" /> 
</Form>

          <br/>


<InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Custom Text</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id = "textarea" as="textarea" value = {this.state.typeInput} onChange ={this.handleTextInput} aria-label="Custom Text" />
    <InputGroup.Append>
        <Button onClick={() => this.handleCustomText()} > Add page </Button>
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


</ButtonToolbar>
        
        </InputGroup>
          <h3> Number of pages: {this.state.pages}</h3>
        
          <Button variant="primary" onClick={() => this.handleSubmit}>Preview Story</Button>
      </div>
              
        );

    }
}
export default HealthAdmin;
