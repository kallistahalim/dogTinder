import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar'
import UsersList from './components/user-list';
import CreateUser from './components/create-user';
import EditUser from './components/edit-user';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Navbar />
        <Route path='/cocoapp' component={Home} />
        <Route path='/create' component={CreateUser} />
        <Route path='/users' component={UsersList} />
        <Route path='/edit/:id' component={EditUser} />
      </div>
      </Router>
      
    )
  }
}


export default App;