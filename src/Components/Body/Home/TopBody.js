import React, { Component } from 'react';
import { Card, Elevation, Button } from "@blueprintjs/core";
import myFace from '../../../images/mapaSquare.jpg';
import MediaQuery from 'react-responsive';

class TopBody extends Component {

    scroll =()=>{
      document.getElementById('cards').scrollIntoView();
    }
    render() {
        let name = '<Alex />'
      return (

        <div >
           
           <Card   className="cardTop" interactive={false} elevation={Elevation.ZERO}>
            <div className="topContainer">
              <img className="myFace" src={myFace} alt="Pic of my face." />
              <div className="greetText">
                <h1>Hey y'all! My name is <code>{name}</code></h1><br/>
                <h4>Welcome to my all around site, <br/>where you can get to know me better ;)</h4>
              </div>
            </div>
            <MediaQuery maxWidth={767}>
              <div>
                <Button onClick={this.scroll} large minimal fill text={<i className="fa fa-chevron-down scrollBtn" aria-hidden="true"></i>}/>
              </div>
            </MediaQuery>
            </Card>
        </div>
      );
    }
  }
  
  export default TopBody;