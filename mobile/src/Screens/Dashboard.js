import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody, Spinner} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'

class Dashboard extends Component{

    state ={
        dummyUser:[],
        dummyTitle:[],
        text: ' ',
        result: []
    }

    nextPage = ()  => {
        this.props.history.push('/profile')
      }

    handleChange = (event) => {
        console.log(this.state.text)

        const text = event.target.value.toLowerCase()
        const newResult = []
        //dummy user here is the "keyword"
        //text is the input of the searchbox

        for(let index = 0; index < this.state.dummyTitle.length; index++){
            if(this.state.dummyTitle[index].toLowerCase().includes(text)){
                newResult.push(this.state.dummyTitle[index])
                console.log(newResult)
            }
        }
        //put results of the search into the result[] array
        this.setState({result:newResult})
    }

    componentDidMount(){
        this._isMounted = true;

        axios.get( 'https://jsonplaceholder.typicode.com/albums', {} )
            .then( response => {
                if(this._isMounted){
                    const dummyUser1 = [], dummyTitle1 = [];
                    for (let i = 0; i < response.data.length; i++) {
                        dummyUser1[i] = response.data[i].id;
                        dummyTitle1[i] = response.data[i].title;
                    }
                    this.setState({dummyUser:dummyUser1, dummyTitle:dummyTitle1});
                   
                }
            } )
            .catch(error => {
                console.log(error);
            });
        }

   

 
      renderCategories(){
        return this.state.result.map(story => {
            return (
                <Card key={story.Id}>
                    <CardBody>
                        <CardText>{story.Id}</CardText>
                    </CardBody>
                </Card>
            )
        })
    }


    render() {
        let resp = this.state.isLoading ? <Spinner color="secondary" /> : this.renderCategories()
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
                        
                        {resp}
                        <Input placeholder="search stories" onChange={this.handleChange}/>

                        {/* <Dropdown/> */}

                        {/* <ReactSearchBox
                            placeholder="Search for Stories"
                            value="Doe"
                            data={this.data}
                            callback={record => console.log(record)}
                        /> */}
                    </Col>
                </Row>
            </Container> 

            </>
        );
    };
}
export default Dashboard;