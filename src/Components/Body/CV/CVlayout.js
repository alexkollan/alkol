import React, { Component } from 'react';
// import { Text, Button, Card, Elevation, ButtonGroup, Intent, Popover, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import MediaQuery from 'react-responsive';
import data from '../../../data/data.json';
import cvPhoto from '../../../images/mapaSquare.jpg'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

let name = "Alexandros Kollan (Collin)";
let birth = "January 6 1989";
let street = data.contact.address[0];
let city = data.contact.address[1];
let country = data.contact.address[2];
let phone = data.contact.phone;
let email = data.contact.email;
let facebook = data.contact.facebook;
let linkedin = data.contact.linkedin;
let github = data.contact.github;
let codepen = data.contact.codepen;
let codesandbox = data.contact.codesandbox;

class CVlayout extends Component{

  componentWillMount() {
      
  }

  goTo = (target) => {
    console.log(target);
    switch (target) {
      case 'fb':
        window.open('https://www.facebook.com/Alex.Duelstein.Collin', '_blank');
        break;
      case 'ln':
        window.open('https://www.linkedin.com/in/alexkollan/', '_blank');
        break;  
      case 'gh':
        window.open('https://github.com/alexkollan', '_blank');
        break;
      case 'cp':
        window.open('https://codepen.io/duelstein/', '_blank');
        break;
      case 'cs':
        window.open('https://codesandbox.io/u/alexkollan', '_blank');
        break;
    
      default:
        
        break;
    }
    
  }


  render(){
    return(
      <div className="cvContainer">
      <LeftPanel buttonClick={this.goTo} 
      name={name}
      birth={birth}
      street={street}
      city={city}
      country={country}
      phone={phone}
      email={email}
      fb={facebook}
      ln={linkedin}
      gh={github}
      cp={codepen}
      cs={codesandbox}
      
      />
      <RightPanel />
      </div>
    

    )
  }
}

export default CVlayout;