import React, { Component } from 'react';
import {Button, NavbarDivider, NavbarGroup, Popover, Menu as Menus, MenuDivider, MenuItem, Position} from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
class Menu extends Component {

  render() {
    return (
      <div>

        <MediaQuery maxWidth={767}>
            <NavbarGroup align='right'>
            <Popover
                content={
                  <Menus>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/')} className="pt-minimal" icon="home" text="Home" />
                    </Link>
                    <MenuDivider />
                    <Link to="/CV" style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/cv')} className="pt-minimal" icon="id-number" text="CV" />
                    </Link>
                    <MenuDivider />
                    <Link to="/Portfolio" style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/portfolio')} className="pt-minimal" icon="briefcase" text="Portfolio" />
                    </Link>
                    <MenuDivider />
                    <Link to="/Stuff" style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/stuff')} className="pt-minimal" icon="lightbulb" text="Stuff" />
                    </Link>
                    <MenuDivider />
                    <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem href="/Contact" onClick={() => this.props.buttonClick('/contact')} className="pt-minimal" icon="chat" text="Contact" />
                    </Link>
                  </Menus>
                }
                position={Position.BOTTOM_RIGHT}
            >
              <Button style={{width:'40px', height:'40px'}} onClick={() => this.props.buttonClick('/contact')}  icon="menu"/>
            </Popover>
            </NavbarGroup>
        </MediaQuery>

        <MediaQuery minWidth={768}>
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
        </MediaQuery>
      </div>
    );
  }
}

export default Menu;
