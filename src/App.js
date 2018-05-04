import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Body/Home/Home';
import CV from './Components/Body/CV/CV';
import Portfolio from './Components/Body/Portfolio/Portfolio';
import Stuff from './Components/Body/Stuff/Stuff';
import Contact from './Components/Body/Contact/Contact';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      route: '/'
    }
  }
  selectedRoute = (r) => {
    console.log(r);
    this.setState({
      route: r
    })
  }
  displayRoute = (r) => {

  }
  
  render() {
    return (
      <Router>
      <div className="App pt-dark">

        <Header  title='AlCol' pressedButton={this.selectedRoute}/>
        
        <Route path='/' exact strict render={()=>{
          return(<Home/>)
        }}/>
        <Route path='/CV' exact strict render={()=>{
          return(<CV/>)
        }}/>
        <Route path='/Portfolio' exact strict render={()=>{
          return(<Portfolio/>)
        }}/>
        <Route path='/Stuff' exact strict render={()=>{
          return(<Stuff/>)
        }}/>
        <Route path='/Contact' exact strict render={()=>{
          return(<Contact/>)
        }}/>
      </div>
      </Router>
    );
  }
}

export default App;
