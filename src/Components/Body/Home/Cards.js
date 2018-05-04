import React, { Component } from 'react';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import {Link} from 'react-router-dom';

class Cards extends Component {
    constructor(props){
      super(props);
    }
    render() {
      let cv = '<CV />';
      let portfolio = '<Portfolio />';
      let stuff = '<Stuff />';
      let contact = '<Contact me />';
      return (
        <div >
          <div className="cardContainer">
            <Link className="cardHolder" to="/CV" style={{ textDecoration: 'none'}}>
              <Card style={{backgroundColor: '#0E5A8A'}} className="card" interactive={true} elevation={Elevation.TOW}>
                <h3>You can check my <h1><code>{cv}</code></h1></h3>
                <Icon icon="id-number" iconSize={100} color='#E1E8ED'/>
              </Card>
            </Link>
            <Link className="cardHolder" to="/Portfolio" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{backgroundColor: '#008075'}} className="card" interactive={true} elevation={Elevation.TOW}>
                <h3>You can check my <h1><code>{portfolio}</code></h1></h3>
                <Icon icon="briefcase" iconSize={100} color='#E1E8ED'/>
              </Card>
            </Link>
          </div>
          <div className="cardContainer">
            <Link className="cardHolder" to="/Stuff" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{backgroundColor: '#0A6640'}} className="card" interactive={true} elevation={Elevation.TOW}>              
                <h3>You can check some <h1><code>{stuff}</code></h1></h3>
                <Icon icon="lightbulb" iconSize={100} color='#E1E8ED'/>
              </Card>
            </Link>
            <Link className="cardHolder" to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{backgroundColor: '#106BA3'}} className="card" interactive={true} elevation={Elevation.TOW}>              
                <h3>You can <h1><code>{contact}</code></h1></h3>
                <Icon icon="chat" iconSize={100} color='#E1E8ED'/>            
              </Card>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Cards;