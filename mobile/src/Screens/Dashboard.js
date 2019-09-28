import React, {Component} from 'react';
import { Button } from 'reactstrap';

 
class Dashboard extends Component{
    state ={}


    nextPage = ()  => {
        this.props.history.push('/profile')
      }

    render() {
        return(
            <>
                <h2>This is the Dashboard</h2>   
                <Button color="danger" onClick={this.nextPage}>Profile</Button>
            </>
        );
    };
}
export default Dashboard;