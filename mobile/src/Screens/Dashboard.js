import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'

class Dashboard extends Component{

    state ={
        dummyUser:[],
        dummyTitle:[],
        text: ' ',
        result: []
    }

    handleChange = (event) => {
        console.log(this.state.text)

        const text = event.target.value.toLowerCase()
        const newResult = []
        //dummy user here is the "keyword"
        //text is the input of the searchbox

        for(let index = 0; index < this.state.dummyUser.length; index++){
            if(this.state.dummyUser[index].toLowerCase().includes(text)){
                newResult.push(this.state.dummyUser[index])
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
                    this.setState({ dummyUser: response.data[0].Id, dummyTitle: response.data[0].title})
                    console.log(this.state.dummyUser)
                }
            } )
            .catch(error => {
                console.log(error);
            });
        }

    // data = [
    //     {
    //       key: 'john',
    //       value: 'John Doe',
    //     },
    //     {
    //       key: 'jane',
    //       value: 'Jane Doe',
    //     },
    //     {
    //       key: 'mary',
    //       value: 'Mary Phillips',
    //     },
    //     {
    //       key: 'robert',
    //       value: 'Robert',
    //     },
    //     {
    //       key: 'karius',
    //       value: 'Karius',
    //     },
    //   ]


    nextPage = ()  => {
        this.props.history.push('/profile')
      }


      
    //   renderCategories(){
    //     return this.state.result.map(story => {
    //         return (
    //             <Card key={category.categories.name}>
    //                 <CardBody>
    //                     <CardText>{category.categories.name}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     })
    // }


    render() {
        // let resp = this.state.isLoading ? <Spinner color="secondary" /> : this.renderCategories()
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
                        
                        {/* {resp} */}
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