import React, { Component } from 'react';
import {Button, NavbarDivider, NavbarGroup, Popover, Menu as Menus, MenuDivider, MenuItem, Position, Icon} from '@blueprintjs/core';
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
                    <Link to="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/')} className="pt-minimal topMenuItem" icon="home" text="Home" />
                    </Link>
                    <MenuDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
                    <Link to="/CV" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/cv')} className="pt-minimal topMenuItem" icon="id-number" text="CV" />
                    </Link>
                    <MenuDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
                    <Link to="/Portfolio" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/portfolio')} className="pt-minimal topMenuItem" icon="briefcase" text="Portfolio" />
                    </Link>
                    <MenuDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
                    <Link to="/Stuff" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
                      <MenuItem onClick={() => this.props.buttonClick('/stuff')} className="pt-minimal topMenuItem" icon="lightbulb" text="Stuff" />
                    </Link>
                    <MenuDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
                    <Link to="/Contact" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
                      <MenuItem href="/Contact" onClick={() => this.props.buttonClick('/contact')} className="pt-minimal topMenuItem" icon="chat" text="Contact" />
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
            <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
              <Button onClick={() => this.props.buttonClick('/')} className="pt-minimal topMenuItem" icon={<Icon icon="home" color="white"/>} text="Home" />
            </Link>
            <NavbarDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
            <Link to="/CV" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
              <Button onClick={() => this.props.buttonClick('/cv')} className="pt-minimal topMenuItem" icon={<Icon icon="id-number" color="white"/>} text="CV" />
            </Link>
            <NavbarDivider style={{ textDecoration: 'none',borderColor:'rgba(255,255,255,0.3)'}} />
            <Link to="/Portfolio" style={{ textDecoration: 'none',borderColor:'rgba(255,255,255,0.3)'}}>
              <Button  onClick={() => this.props.buttonClick('/portfolio')} className="pt-minimal topMenuItem" icon={<Icon icon="briefcase" color="white"/>} text="Portfolio" />
            </Link>
            <NavbarDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
            <Link to="/Stuff" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
              <Button onClick={() => this.props.buttonClick('/stuff')} className="pt-minimal topMenuItem" icon={<Icon icon="lightbulb" color="white"/>} text="Stuff" />
            </Link>
            <NavbarDivider style={{borderColor:'rgba(255,255,255,0.3)'}} />
            <Link to="/Contact" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)' }}>
              <Button href="/Contact" onClick={() => this.props.buttonClick('/contact')} className="pt-minimal topMenuItem" icon={<Icon icon="chat" color="white"/>} text="Contact" />
            </Link>
          </NavbarGroup>
        </MediaQuery>
      </div>
    );
  }
}

export default Menu;
