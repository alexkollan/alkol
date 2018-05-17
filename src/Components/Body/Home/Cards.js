import React, { Component } from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import {Link} from 'react-router-dom';

class Cards extends Component {

    render() {
      let cv = '<CV />';
      let portfolio = '<Portfolio />';
      let stuff = '<Stuff />';
      let contact = '<Contact me />';
      return (
        <div id='cards'>
          <div className="cardContainer">
            <Link className="cardHolder" to="/CV" style={{ textDecoration: 'none', color: 'white'}}>
              <Card style={{ backgroundColor: '#005B4B'}} className="card" interactive={true} elevation={Elevation.ONE}>
                <h3>You can check my </h3><h1><code>{cv}</code></h1>
                <i className="fa fa-user-circle homeIcons"></i>  
              </Card>
            </Link>
            <Link className="cardHolder" to="/Portfolio" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{ backgroundColor: '#4B8178'}} className="card" interactive={true} elevation={Elevation.ONE}>
                <h3>You can check my </h3><h1><code>{portfolio}</code></h1>
                <i className="fa fa-files-o homeIcons"></i>  
              </Card>
            </Link>
          </div>
          <div className="cardContainer">
            <Link className="cardHolder" to="/Stuff" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{ backgroundColor: '#4B8178'}} className="card" interactive={true} elevation={Elevation.ONE}>              
                <h3>You can check some</h3> <h1><code>{stuff}</code></h1>
                <i className="fa fa-podcast homeIcons"></i>  
              </Card>
            </Link>
            <Link className="cardHolder" to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>
              <Card style={{ backgroundColor: '#005B4B'}} className="card" interactive={true} elevation={Elevation.ONE}>              
                <h3>You can </h3><h1><code>{contact}</code></h1>
                <i className="fa fa-envelope homeIcons"></i>          
              </Card>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Cards;