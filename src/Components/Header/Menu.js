import React, { Component } from 'react';
import {Button, NavbarDivider, NavbarGroup} from '@blueprintjs/core';
import {Link} from 'react-router-dom';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <NavbarGroup align='right'>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button onClick={() => this.props.buttonClick('/')} className="pt-minimal" icon="home" text="Home" />
          </Link>
          <NavbarDivider />
          <Link to="/CV" style={{ textDecoration: 'none', color: 'white' }}>
            <Button onClick={() => this.props.buttonClick('/cv')} className="pt-minimal" icon="id-number" text="CV" />
          </Link>
          <NavbarDivider />
          <Link to="/Portfolio" style={{ textDecoration: 'none', color: 'white' }}>
            <Button onClick={() => this.props.buttonClick('/portfolio')} className="pt-minimal" icon="briefcase" text="Portfolio" />
          </Link>
          <NavbarDivider />
          <Link to="/Stuff" style={{ textDecoration: 'none', color: 'white' }}>
            <Button onClick={() => this.props.buttonClick('/stuff')} className="pt-minimal" icon="lightbulb" text="Stuff" />
          </Link>
          <NavbarDivider />
          <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>
            <Button href="/Contact" onClick={() => this.props.buttonClick('/contact')} className="pt-minimal" icon="chat" text="Contact" />
          </Link>
        </NavbarGroup>

      </div>
    );
  }
}

export default Menu;
