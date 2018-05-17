import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Footer from './Components/Footer/Footer';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      route: '/',
      moto: 'Loving mou is not a feat it is a privilege..'
    }
  }
  selectedRoute = (r) => {
    console.log(r);
    this.setState({
      route: r
    })
  }
  displayRoute = (r) => {

    
    console.log('etre3e h methodos');
    
  }
  
  render() {
    return (
      <Router>
      <div className="App">

        <Header  title='AlKol' pressedButton={this.selectedRoute}/>
        <Routes/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
