import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                childName: '',
                careTakers: [],
                pronoun: '',
                age: 0,
                cats: [{name:"", age:""}],

            };

        this.handleChildName = this.handleChildName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handlePronouns = this.handlePronouns.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleRace(event) {
        this.setState({ race: this.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.childName);
        event.preventDefault();
    }

    render() {
        let {cats} = this.state
        return (

            <FormControl>
                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.childName}
                    onChange={this.handleChildName}
                    margin="normal"
                />


                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.age}
                    onChange={this.handleAge}
                    margin="normal"
                />

                <button>Add new cat</button>
                {
                    cats.map((val, idx) => {
                        let catId = `cat-${idx}`, ageId = `age-${idx}`
                        return (
                            <div key={idx}>
                                <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                                <input
                                    type="text"
                                    name={catId}
                                    data-id={idx}
                                    id={catId}
                                    className="name"
                                />
                                <label htmlFor={ageId}>Age</label>
                                <input
                                    type="text"
                                    name={ageId}
                                    data-id={idx}
                                    id={ageId}
                                    className="age"
                                />
                            </div>
                        )
                    })
                }

                <Select
                    value={this.state.pronoun}
                    onChange={this.handlePronouns}
                >
                    <MenuItem value={'he/his'}>he/his</MenuItem>
                    <MenuItem value={'she/hers'}>she/hers</MenuItem>
                    <MenuItem value={'they/them'}>they/them</MenuItem>
                    <MenuItem value={'thirdperson'}>third person</MenuItem>
                </Select>

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


            </FormControl>



            // <form onSubmit={this.handleSubmit}>


            //     <input type="text" value={this.state.childName} onChange={this.handleChildName} />

            //     <input type="text" value={this.state.age} onChange={this.handleAge} />

            //     <select value={this.state.pronoun} onChange={this.handlePronouns}>
            //         <option value="he/his">he/his</option>
            //         <option value="she/her">she/her</option>
            //         <option value="they/them">they/them</option>
            //         <option value="third_person">third person</option>
            //     </select>




            //     <input type="submit" value="Submit" />
            // </form>
        );
    }
}
export default Profile;
