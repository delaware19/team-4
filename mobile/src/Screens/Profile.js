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
                childName: '',
                careTakers: [],
                pronoun: 'he/his',
                age: 0,
                race: 'Caucasian'
            };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleChildName = this.handleChildName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handlePronouns = this.handlePronouns.bind(this);
        this.handleRace = this.handleRace.bind(this);

        this.handleCareTaker1 = this.handleCareTaker1.bind(this);
        this.handleCareTaker2 = this.handleCareTaker2.bind(this);
        this.handleCareTaker3 = this.handleCareTaker3.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChildName(event) {
        this.setState({ childName: event.target.value });
    }

    handleAge(event) {
        this.setState({ age: event.target.value });
    }

    handlePronouns(event) {
        this.setState({ pronoun: event.target.value });
    }

    handleCareTaker1(event) {
        this.setState({ careTakers: update(this.state.careTakers, { 0: { $set: event.target.value } }) });
    }

    handleCareTaker2(event) {
        this.setState({ careTakers: update(this.state.careTakers, { 1: { $set: event.target.value } }) });
    }

    handleCareTaker3(event) {
        this.setState({ careTakers: update(this.state.careTakers, { 2: { $set: event.target.value } }) });
    }

    handleRace(event) {
        this.setState({ race: event.target.value });
    }

    handleSubmit(event) {
        axios.post('/addUser',
            {
                email: this.state.email,
                toPost: {
                    ChildName: this.state.childName,
                    CareTaker: this.state.careTakers,
                    Gender: this.state.pronoun,
                    Age: this.state.age,
                    Race: this.state.race
                }
            }
        ).then(function (response) {
            console.log(this.state.email);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    backPage = () => {
        this.props.history.goBack()
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
            <Container style={styles.container}>

                <div style={{marginTop: '3%'}}>

                    <Button style={styles.button} onClick={this.backPage}>
                        Back
                    </Button>
                </div>
            

                <div style={{ float: 'left', width: '50%' }}>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleEmail}
                            margin="normal"
                        /> <br />
                    </div>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Child's Name"
                            value={this.state.childName}
                            onChange={this.handleChildName}
                            margin="normal"
                        /> <br />
                    </div>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Primary Caretaker"
                            value={this.state.careTaker1}
                            onChange={this.handleCareTaker1}
                            margin="normal"
                        /> <br />
                    </div>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Secondary Caretaker"
                            value={this.state.careTaker2}
                            onChange={this.handleCareTaker2}
                            margin="normal"
                        /> <br />
                    </div>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Tertiary Caretaker"
                            value={this.state.careTaker3}
                            onChange={this.handleCareTaker3}
                            margin="normal"
                        /> <br />
                    </div>

                    <div style={styles.textInput}>
                        <TextField
                            id="standard-name"
                            label="Age"
                            value={this.state.age}
                            onChange={this.handleAge}
                            margin="normal"
                        /> <br />
                        <br />
                    </div>

                </div>

                <div style={{ float: 'right', width: '50%', marginTop: '3%' }}>
                    <div style={styles.textInput}>
                        <div style={styles.right}>
                            <InputLabel> Gender </InputLabel>
                            <Select
                                value={this.state.pronoun}
                                onChange={this.handlePronouns}
                            >
                                <MenuItem value={'he/his'}>he/his</MenuItem>
                                <MenuItem value={'she/hers'}>she/hers</MenuItem>
                                <MenuItem value={'they/them'}>they/them</MenuItem>
                                <MenuItem value={'thirdperson'}>third person</MenuItem>
                            </Select>

                            <br />
                            <br />
                        </div>

                        <div style={styles.textInput}>
                            <InputLabel> Race </InputLabel>
                            <Select
                                value={this.state.race}
                                onChange={this.handleRace}
                            >
                                <MenuItem value={'Caucasian'}>Caucasian</MenuItem>
                                <MenuItem value={'Black'}>Black</MenuItem>
                                <MenuItem value={'Asian'}>Asian</MenuItem>
                                <MenuItem value={'Latino'}>Latino</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>

                            </Select>

                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                    <Button onClick={this.handleSubmit} style={styles.button}>
                        Submit
                </Button> <br />
                </div>
            </Container >
        );
    }
}

export default Profile;

const styles = {
    textInput: {
        backgroundColor: 'red'
    }
}