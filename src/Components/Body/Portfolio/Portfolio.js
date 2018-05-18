import React, { Component} from 'react';
import { Card, Button, Menu, MenuItem, MenuDivider, Icon, Popover, Elevation, ButtonGroup,NavbarDivider} from "@blueprintjs/core";
import ainb from '../../../images/ainb.png';
import alkol from '../../../images/alkol.png';
import codepen from '../../../images/codepen.png';
import github from '../../../images/github.png';
import MediaQuery from 'react-responsive';

class Portfolio extends Component {
    state={
      img: github
    }
    goTo = (target) => {
      console.log(target);
      switch (target) {
        case ainb:
          window.open('http://ainb.gr/', '_blank');
          break;
        case alkol:
          // window.open('https://www.linkedin.com/in/alexkollan/', '_blank');
          break;  
        case codepen:
          window.open('https://codepen.io/duelstein/', '_blank');
          break;
        case github:
          window.open('https://github.com/alexkollan', '_blank');
          break;
        default:
          
          break;
      }
      
    }
    render() {
      return (
        <div>
          <MediaQuery minWidth={1201}>
            <Menu className="portfolioMenu">

                <MenuItem onClick={()=>this.setState({img:github})}  icon={<Icon icon={<i className="devicon-github-plain"></i>} color="#77654A"/>}  text="Github" />
             
                <MenuDivider/> 
       
                <MenuItem onClick={()=>this.setState({img:codepen})} icon={<Icon icon={<i className="fa fa-codepen"></i>} color="#77654A"/>}  text="CodePen" />
           
                <MenuDivider/> 
    
                <MenuItem onClick={()=>this.setState({img:ainb})} icon={<Icon icon={<i className="fa fa-wordpress"></i>} color="#77654A"/>}  text="Associates in Business (ainb.gr)" />
            
                <MenuDivider/> 
     
                <MenuItem onClick={()=>this.setState({img:alkol})} icon={<Icon icon={<i className="devicon-react-original"></i>} color="#77654A"/>}  text="AlKol" />
                
            </Menu>
            </MediaQuery>
            <MediaQuery maxWidth={1200}>
              <ButtonGroup className="portfolioMenu">
            
                    <Button minimal onClick={()=>this.setState({img:github})}  icon={<Icon icon={<i className="devicon-github-plain"></i>} color="#77654A"/>} text="Github" />
                    <NavbarDivider style={{borderColor:'#77654A'}} />
                    <Button minimal onClick={()=>this.setState({img:codepen})}  icon={<Icon icon={<i className="fa fa-codepen"></i>} color="#77654A"/>} text="Codepen" />
                    <NavbarDivider style={{borderColor:'#77654A'}} />
                    <Button minimal onClick={()=>this.setState({img:ainb})}  icon={<Icon icon={<i className="fa fa-wordpress"></i>} color="#77654A"/>} text="Associates in Business" />
                    <NavbarDivider style={{borderColor:'#77654A'}} />
                    <Button minimal onClick={()=>this.setState({img:alkol})} icon={<Icon icon={<i className="devicon-react-original"></i>} color="#77654A"/>} text="Alkol" />
              
              </ButtonGroup>
            </MediaQuery>
            <h4 style={{marginTop:'20px', color:'#47341B'}}>Click the preview to visit!</h4>
            <Card onClick={()=>this.goTo(this.state.img)} interactive={true} elevation={Elevation.ONE} className="portfolioContent">
              <img className="portfolioImg" src={this.state.img} alt="Smiley face"/>
            </Card>
        </div>
      );
    }
  }
  
  export default Portfolio;