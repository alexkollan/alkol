import React, { Component } from 'react';
import { Text, Button,Menu, MenuDivider } from "@blueprintjs/core";



class LeftPanel extends Component{
    render(){
        return(
            <div className="leftPanel">
              <div className="imgContainer"></div>
              <div style={{paddingTop: '3px', borderTop: '1px solid rgba(191, 204, 214, 0.5)'}}><h5>{this.props.name}</h5></div>
              <div style={{paddingBottom: '5px', borderBottom: '1px solid rgba(191, 204, 214, 0.5)'}}><i className="fa fa-birthday-cake iconColor"/>&emsp;{this.props.birth}</div>
                <Menu className="contactDetails">
                  <Text className="contactText"> <span>&emsp;&nbsp;&nbsp;{this.props.street},<br/><i className="fa fa-map-marker iconColor"/>&nbsp;&nbsp;&nbsp;{this.props.city},<br/>&emsp;&nbsp;&nbsp;{this.props.country}</span></Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="fa fa-phone iconColor"/>&nbsp;&nbsp;{this.props.phone}</Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="fa fa-at iconColor"/>&nbsp;&nbsp;{this.props.email}</Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="fa fa-facebook-f iconColor"/><span><Button minimal onClick={() => this.props.buttonClick('fb')} text={this.props.fb}></Button></span></Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="fa fa-linkedin iconColor"/><span><Button minimal onClick={() => this.props.buttonClick('ln')} text={this.props.ln}></Button></span></Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="devicon-github-plain iconColor"/><span><Button minimal onClick={() => this.props.buttonClick('gh')} text={this.props.gh}></Button></span></Text>
                  <MenuDivider />
                  <Text className="contactText"><i className="fa fa-codepen iconColor"/><span><Button minimal onClick={() => this.props.buttonClick('cp')} text={this.props.cp}></Button></span></Text>
                  <MenuDivider />
                  <Text className="contactText"><svg x="0px" y="0px" width="18px" height="18px" viewBox="-100 -50 1024 1024"><g id="Layer_1"><polyline fill="#BFCCD6" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline fill="#BFCCD6" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline fill="#BFCCD6" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" stroke="#BFCCD6" strokeWidth="80" strokeMiterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" stroke="#BFCCD6" strokeWidth="80" strokeMiterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" stroke="#BFCCD6" strokeWidth="80" strokeMiterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg><span><Button minimal onClick={() => this.props.buttonClick('cs')} text={this.props.cs}></Button></span></Text>
                  
                </Menu>
            </div>
        )
    }
}

export default LeftPanel;