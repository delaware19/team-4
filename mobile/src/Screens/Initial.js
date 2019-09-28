import React, { Component } from 'react';
import {
    Row, Collapse, Col, Input, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
// import ReactSearchBox from 'react-search-box';
import axios from 'axios'
import './Initial.css'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import update from 'immutability-helper'


class Initial extends Component {

    styles = {
        container: {
            width: '80%'
        },
        button: {
            backgroundColor: '#006494',
            color: 'white'
        },
        textInput: {
            marginTop: '1%'
        }
    }

    nextPage = () => {
        this.props.history.push('/profile')
    }


    render() {
        //let resp = this.renderCategories()
        return (
            <>
                <div id='Initial'>
                    <body>
                        <Button style={{ color: '#fff', backgroundColor: '#5a6268' }} onClick={this.nextPage}>Login</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button style={{ color: '#fff', backgroundColor: '#5a6268' }} onClick={this.nextPage}>New Profile</Button>
                    </body>

                </div>

            </>
        );
    };
}
export default Initial;