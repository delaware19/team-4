import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                childName: '',
                careTakers: [],
                pronoun: '',
                age: 0,
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

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.childName);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <input type="text" value={this.state.childName} onChange={this.handleChildName} />

                <input type="text" value={this.state.age} onChange={this.handleAge} />

                <select value={this.state.pronoun} onChange={this.handlePronouns}>
                    <option value="he/his">he/his</option>
                    <option value="she/her">she/her</option>
                    <option value="they/them">they/them</option>
                    <option value="third_person">third person</option>
                </select>




                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Profile;
