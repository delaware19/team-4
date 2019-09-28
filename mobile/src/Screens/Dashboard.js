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
import shots from '../img/shots.jpg'
import placeholder from '../img/placeholder.jpg'
import HamburgerMenu from 'react-hamburger-menu'

class Dashboard extends Component{

    state ={
        dummyId:[],
        dummyInfo:[],
        text: ' ',
        result: []
    }

    

    nextPage = ()  => {
        this.props.history.push('/profile')
      }

      profile = ()  => {
        this.props.history.push('/profile')
      }

    example = (story) => {
        console.log("HERERER");
        if(story==="shots"){
           this.props.history.push('/carouselshots');
        }
        else if (story==="checkup"){
            this.props.history.push('/carousel');
        }
    }
      

      handleChange = (event) => {
        const text = event.target.value.toLowerCase()
        const newResult = []
        //dummy user here is the "keyword"
        //text is the input of the searchbox
        for(let index = 0; index < this.state.dummyId.length; index++){
            if(this.state.dummyId[index].toLowerCase().includes(text)){
                newResult.push(this.state.dummyId[index])
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
                id[2] = "appointment"
                pages[0] = response.data["checkup"]
                pages[1] = response.data["shots"]
                console.log(pages[0])
                this.setState({ dummyId: id, dummyInfo: pages })
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
                  <Button id="resbut" onClick =  {() => {this.example(story)}}>
                  {story} 
                  </Button>
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
                        <NavbarBrand href="/">Dashboard</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                            <Button id="navbut" color="danger" onClick={this.profile}>Children's Profile</Button>
                            </NavItem>
                            <NavItem>
                            <Button id="navbut" color="danger" onClick={this.nextPage}>Account</Button>
                            </NavItem>
                            <Button id="navbut" color="danger" onClick={this.nextPage}>Logout</Button>
                            </Nav>
                        </Collapse>
                        </Navbar>
                    </div>
                    </Col>
                    <Col md="4">
                        
                        <br></br>
                        <br></br>
                       
                        <br></br>
                        <br></br>
                        
                    </Col>
                    <Col md="12">
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