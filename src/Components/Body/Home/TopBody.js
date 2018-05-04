import React, { Component } from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import myFace from '../../../images/mapaSquare.jpg';

class TopBody extends Component {
    constructor(props){
      super(props);
    }
    render() {
        let name = '<Alex />'
      return (

        <div >
           
           <Card style={{backgroundColor: '#182026'}} className="cardTop" interactive={false} elevation={Elevation.ZERO}>
            <div className="topContainer">
              <img className="myFace" src={myFace} />
              <div className="greetText">
                <h1>Hey y'all! My name is <code>{name}</code></h1><br/>
                <h4 style={{color: '#A7B6C2'}}>Welcome to my all around site, <br/>where you can get to know me better ;)</h4>
              </div>
            </div>
            </Card>
        </div>
      );
    }
  }
  
  export default TopBody;