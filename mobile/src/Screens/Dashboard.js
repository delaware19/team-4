import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
import axios from 'axios'
import './Dashboard.css'
import placeholder from '../img/placeholder.jpg'
import HamburgerMenu from 'react-hamburger-menu'

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


        axios.get( '/getTemplates',  {} )
            .then( response => {
                console.log(response.data)
                const id =[], pages=[];
                id[0] = "checkup"
                id[1] = "shots"
                pages[0] = response.data["checkup"]
                pages[1] = response.data["shots"]
                console.log(pages[0])
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
        let resp = this.renderCategories();
        return(
            <>
            <Container>
                <Row>
                    <Col md="12">
                        <div>
                        <Navbar color="light" light expand="md" id="back-color">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                        </Navbar>
                    </div>
                    </Col>
                    <Col md="4">
                        <Button color="danger" onClick={this.nextPage}>Profile</Button>
                        <br></br>
                        <br></br>
                        <Button color="danger" onClick={this.nextPage}>Profile</Button>
                        <br></br>
                        <br></br>
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