import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'

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

        axios.get( 'http://127.0.0.1:8080/getTemplates',  {} )
            .then( response => {
                console.log(response.data)
            } )
            .catch(error => {
                console.log(error);
            });

        // axios.get( 'https://jsonplaceholder.typicode.com/users', {} )
        //     .then( response => {
        //         if(this._isMounted){
        //             const dummyId1 = [], dummyName1 = [];
        //             for (let i = 0; i < response.data.length; i++) {
        //                 dummyId1[i] = response.data[i].id;
        //                 dummyName1[i] = response.data[i].name;
        //             }
        //             this.setState({dummyId:dummyId1, dummyName:dummyName1});
                   
        //         }
        //     } )
        //     .catch(error => {
        //         console.log(error);
        //     });
        }

 
      renderCategories(){
        return this.state.result.map(story => {
            console.log(story[0])
            return (
                <Card>
                <CardImg top width="50%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>{story}</CardSubtitle>
                  <CardText>{story.name}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
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