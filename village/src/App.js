import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import axios from 'axios';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from  './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        // this.props.history.push('/smurf-list');
      })
      .catch(err => console.log(err));
  };


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="smurf-header">Da Smurfs</h1>
          <div className="nav-links">
            <NavLink to="/smurf-form">Add smurf</NavLink>
            <NavLink exact to="/">
              Smurf List
            </NavLink>
          </div>
        </nav>

        <Route 
        exact path="/" 
        render = {(props)=> ( 
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
             />
             )}
        />

        <Route 
        exact path="/:id" 
        render = {(props)=> ( 
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
             />
             )}
        />

        <Route
          path="/smurf-form"
          render ={(props)=> 
          <SmurfForm 
          {...props}
          addSmurf= {this.addSmurf}/> 
          }
        />
      </div>
    );
  }
}

App = withRouter(App);


export default App;
