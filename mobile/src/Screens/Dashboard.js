import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import ReactSearchBox from 'react-search-box';


 
class Dashboard extends Component{
    state ={}

    data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ]


    nextPage = ()  => {
        this.props.history.push('/profile')
      }

    render() {
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
                        <ReactSearchBox
                            placeholder="Search for Stories"
                            value="Doe"
                            data={this.data}
                            callback={record => console.log(record)}
                        />
                    </Col>
                </Row>
            </Container> 

            </>
        );
    };
}
export default Dashboard;