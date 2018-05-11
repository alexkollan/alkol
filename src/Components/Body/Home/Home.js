import React, { Component } from 'react';
import Cards from './Cards';
import TopBody from './TopBody';

class Home extends Component {

    render() {
      return (
        <div className="homeContainer">
          <TopBody />
          <Cards />
        </div>
      );
    }
  }
  
  export default Home;