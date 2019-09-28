import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


import axios from 'axios'

import update from 'immutability-helper'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                email: '',
                invalid: false,
            };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        if(this.state.email != "shreyshah33") {
            this.setState({invalid: true})
        } else {
            this.props.history.push('/dashboard')
        }
    }

    displayError = () => {
        if(this.state.invalid == true) {
            return (
                <p> Failed Login </p>
            )        
        }
    }

    render() {
        const styles = {
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
        return (
            <Container>
                <div style={styles.textInput}>
                    <TextField
                        id="standard-name"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        margin="normal"
                    /> <br />
                </div>
                <Button onClick={this.handleSubmit} style={styles.button}>
                    Submit
                </Button>
                {this.displayError()}
            </Container>
        );
    }
}

export default Profile;

