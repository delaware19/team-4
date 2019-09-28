import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'
import './Dashboard.css'
import placeholder from '../img/placeholder.jpg'

class Dashboard extends Component{

    state ={
        dummyId:[],
        dummyName:[],
        text: ' ',
        result: []
    }

    nextPage = ()  => {
        this.props.history.push('/profile')
      }

    handleChange = (event) => {

        const text = event.target.value.toLowerCase()
        const newResult = []
        //dummy user here is the "keyword"
        //text is the input of the searchbox

        for(let index = 0; index < this.state.dummyName.length; index++){
            if(this.state.dummyName[index].toLowerCase().includes(text)){
                newResult.push(this.state.dummyName[index])
                console.log(newResult)
            }
        }
        //put results of the search into the result[] array
        this.setState({result:newResult})
    }

    componentDidMount(){
        this._isMounted = true;


        // axios.get( 'https://jsonplaceholder.typicode.com/users',  {} )

        axios.get( '/getTemplates',  {} )
            .then( response => {
                console.log(response.data)
            } )
            .catch(error => {
                console.log(error);
            });

        // axios.get( 'https://jsonplaceholder.typicode.com/users', {} )

        //     .then( response => {
        //         console.log(response.data)
        //     } )
        //     .catch(error => {
        //         console.log(error);
        //     });

        axios.get( 'https://jsonplaceholder.typicode.com/users', {} )
            .then( response => {
                if(this._isMounted){
                    const dummyId1 = [], dummyName1 = [];
                    for (let i = 0; i < response.data.length; i++) {
                        dummyId1[i] = response.data[i].id;
                        dummyName1[i] = response.data[i].name;
                    }
                    this.setState({dummyId:dummyId1, dummyName:dummyName1});
                   
                }
            } )
            .catch(error => {
                console.log(error);
            });
        }

 
    // using placeholder for picture right now, need to find a way to link keyword to the image
      renderCategories(){
        return this.state.result.map(story => {
            return (
                <>
                <br></br>
                <Card>
                <CardImg top width="20%" src={placeholder} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Story:</CardTitle>
                  <CardSubtitle>{story}</CardSubtitle>
                  <CardText>{story.name}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              </>
            )
        })
    }


    render() {
        let resp = this.renderCategories()
        return(
            <>
            <Container>
                <Row>
                    <Col md="12">
                        <h2>This is the Dashboard</h2>  
                    </Col>
                    <Col md="4">
                        <Button color="danger" onClick={this.nextPage}>Profile</Button>
                    </Col>
                    <Col md="8">
                        <Input placeholder="search stories" onChange={this.handleChange}/>
                        {resp}
                    </Col>
                </Row>
            </Container> 

            </>
        );
    };
}
export default Dashboard;