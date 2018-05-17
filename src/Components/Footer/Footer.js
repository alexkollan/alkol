import React, { Component } from 'react';
import { Menu, MenuItem, MenuDivider, ButtonGroup, Button } from "@blueprintjs/core";
import MediaQuery from 'react-responsive';
class Footer extends Component{

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
        <div className="footer">
           <MediaQuery minWidth={768}>
            <ButtonGroup style={{marginBottom: '20px'}}>
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('fb')} text={<div className="footMenuItem"><i className="devicon-facebook-plain footIcons "></i> Facebook</div>}></Button>
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('ln')} text={<div className="footMenuItem"><i className="fa fa-linkedin footerMenuItem" aria-hidden="true"></i> LinkedIn</div>}></Button>
              {/* <AnchorButton rightIcon="caret-down">Options</AnchorButton> */}
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('gh')} text={<div className="footMenuItem"><i className="devicon-github-plain footerMenuItem"></i> Github</div>}></Button>
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('cp')} text={<div className="footMenuItem"><i className="fa fa-codepen footerMenuItem" aria-hidden="true"></i> Codepen</div>}></Button>
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('cs')} text={<div className="footMenuItem"><svg x="0px" y="0px" width="15px" height="15px" viewBox="0 0 1024 1024"><g id="Layer_1"><polyline fill="#FFFFFF" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline fill="#FFFFFF" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline fill="#FFFFFF" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg> Codesandbox</div>}></Button>
              <Button className="footerMenuItem" minimal type='button' onClick={() => this.goTo('lol')} text={<div className="footMenuItem"><i className="fa fa-code footerMenuItem" aria-hidden="true"></i> This Site :O</div>}></Button>
            </ButtonGroup>
            
            <h5><i><code>{'<Made with '}<a style={{textDecoration:'none', color:'inherit'}} href="https://reactjs.org/" target="_blank"><i className="devicon-react-original"></i>ReactJS</a>  and <a style={{textDecoration:'none', color:'inherit'}} href="http://blueprintjs.com/">@Blueprintjs</a>{' using '}<a style={{textDecoration:'none', color:'inherit'}} href="https://code.visualstudio.com/" target="_blank"><i className="devicon-visualstudio-plain"></i>{'VScode />'}</a></code></i></h5>
            <h5><i><code>{'<by Alex Kollan © 2018 />'}</code></i></h5>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
          <Menu className="footMenu">
            <MenuItem className="footerMenuItem" onClick={() => this.goTo('fb')} className="footMenuItem"  text={<div className="footMenuItem" style={{textAlign: 'center'}}><i className="devicon-facebook-plain footIcons footerMenuItem"></i> Facebook</div>} />
              <MenuDivider />
            <MenuItem className="footerMenuItem" onClick={() => this.goTo('ln')} className="footMenuItem"  text={<div className="footMenuItem" style={{textAlign: 'center'}}><i className="fa fa-linkedin footerMenuItem" aria-hidden="true"></i> LinkedIn</div>} />
              <MenuDivider />
            <MenuItem className="footerMenuItem"  onClick={() => this.goTo('gh')} className="footMenuItem"  text={<div className="footMenuItem" style={{textAlign: 'center'}}><i className="devicon-github-plain footerMenuItem"></i> Github</div>} />
              <MenuDivider />
            <MenuItem className="footerMenuItem" onClick={() => this.goTo('cp')} className="footMenuItem"  text={<div className="footMenuItem" style={{textAlign: 'center'}}><i className="fa fa-codepen footerMenuItem" aria-hidden="true"></i> Codepen</div>} />
              <MenuDivider />
            <MenuItem className="footerMenuItem" onClick={() => this.goTo('cs')} className="footMenuItem"  text={<div className="footMenuItem" style={{textAlign: 'center'}}><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 1024 1024"><g id="Layer_1"><polyline fill="#FFFFFF" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline fill="#FFFFFF" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline fill="#FFFFFF" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" stroke="#FFFFFF" strokeWidth="80" strokeMiterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg> Codesandbox</div>} />
              <MenuDivider />
            <MenuItem className="footerMenuItem" onClick={() => this.goTo('lol')} className="footMenuItem" text={<div className="footMenuItem" style={{textAlign: 'center'}}><i className="fa fa-code footerMenuItem" aria-hidden="true"></i> This Site :O</div>} />
          </Menu>
            <h5 className="footerText"><i><code >{'< Made with '}<a style={{textDecoration:'none', color:'inherit'}} href="https://reactjs.org/" target="_blank"><i className="devicon-react-original"></i>ReactJS </a> and <a style={{textDecoration:'none', color:'inherit'}} href="http://blueprintjs.com/">@Blueprintjs</a>{' using '}<a style={{textDecoration:'none', color:'inherit'}} href="https://code.visualstudio.com/" target="_blank"><i className="devicon-visualstudio-plain"></i> VScode</a></code></i></h5>
            <h5 className="footerText"><i><code >{'by Alex Kollan © 2018 />'}</code></i></h5>
          </MediaQuery>
        </div>
      )
    }
}

export default Footer;