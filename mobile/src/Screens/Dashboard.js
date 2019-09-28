import React, {Component} from 'react';
import { Button } from 'reactstrap';
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
            <h2>This is the Dashboard</h2>   
            <Button color="danger" onClick={this.nextPage}>Profile</Button>
            <ReactSearchBox
                placeholder="Placeholder"
                value="Doe"
                data={this.data}
                callback={record => console.log(record)}
            />
            </>
        );
    };
}
export default Dashboard;