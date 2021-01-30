import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import { cars } from './demo';
//import CarItem from './CarItem';
import axios from 'axios';
import { Header, Icon, List, Button, Checkbox, Form} from 'semantic-ui-react';

// function App() {
// }

// const App: React.FC = () => {
// }

class App extends Component {

  state = {
    values : []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then(response => {
      // console.log(response);
      this.setState({
        values: response.data
      });
    });
    
    // this.setState({
    //   values: [{id: 1, name: 'Value 101'}, {id:2, name: 'Value 10222'}]
    // })

  }

  render(){
    return (
      <div>   
        {/* className="App" */}
       <Header as='h2'>
        <Icon name='users' />
        <Header.Content>
          Reactivities
          <Header.Subheader>Manage your preferences ddd</Header.Subheader>
        </Header.Content>
      </Header>

      <List>

        {this.state.values.map((value: any) => (
        <List.Item key={value.id}>{value.name}</List.Item>
            ))} 
      </List>

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      
        {/* <ul>
          {cars.map((car) => {
            //  <li>{car.color}</li> use CarIte Component instead of this
            // <CarItem car={car} />
            <li>{car.color}</li>
          })}
        </ul> */}
  
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
           <ul>
             

           </ul>

        {/* </header>  */}
        
  
      </div>
    );
  }
  
}

export default App;
