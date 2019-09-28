import React, {Component} from 'react';
import { Button, Container, Row, Col, Input, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'
import './Initial.css'
class Initial extends Component{


    nextPage = ()  => {
        this.props.history.push('/profile')
      }

      
    render() {
        //let resp = this.renderCategories()
        return(
            <>
            <div id = 'Initial'>
            <body>
                
                <h1>Initial Page</h1>
                
                <Button style  = {{backgroundColor:'#34a853'}} onClick={this.nextPage}>Login</Button>

                <Button style  = {{backgroundColor:'#34a853'}} onClick={this.nextPage}>New Profile</Button>


            </body>

            </div>

            </>
        );
    };
}
export default Initial;