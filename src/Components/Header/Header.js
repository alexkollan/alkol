import React, { Component } from 'react';
import {Navbar} from '@blueprintjs/core';
import Menu from './Menu'
import Title from './Title'
class Header extends Component {
    constructor(props){
        super(props);
    }
    handleButtonClick=(btn)=>{
      this.props.pressedButton(btn)
    }

    render() {
      return (
        <div>
          <Navbar className="pt-dark">
            <Title title={this.props.title}/>
            <Menu buttonClick={this.handleButtonClick}/>
          </Navbar>
        </div>
      );
    }
  }

export default Header;