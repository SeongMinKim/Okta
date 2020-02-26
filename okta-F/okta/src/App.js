import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit'
// import OrtherNavbar from './components/OrtherNavbar'
// import Api from './components/api'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit} />          
          {/* <Route path='/groups/:id' component={Api} /> */}
        </Switch>
      </Router>
        
    )
  }
}

export default App;