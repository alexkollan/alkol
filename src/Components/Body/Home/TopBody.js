import React, { Component } from 'react';
import { Card, Elevation, Button } from "@blueprintjs/core";
import myFace from '../../../images/mapaSquare.jpg';
import MediaQuery from 'react-responsive';
import css3 from '../../../images/css3.svg';
import es6 from '../../../images/es6.svg';
import html5 from '../../../images/html5.svg';
import js from '../../../images/js.svg';
import node from '../../../images/node.svg';
import npm from '../../../images/npm.svg';
import react from '../../../images/react.svg';
import redux from '../../../images/redux.svg';
import vscode from '../../../images/vscode.svg';
import webpack from '../../../images/webpack.svg';
import jquery from '../../../images/jquery.svg';

class TopBody extends Component {

    scroll =()=>{
      document.getElementById('cards').scrollIntoView();
    }
    goTo = (target) => {
      console.log(target);
      switch (target) {
        case 'html5':
          window.open('https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', '_blank');
          break;
        case 'css3':
          window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank');
          break;  
        case 'js':
          window.open('https://www.javascript.com/', '_blank');
          break;
          case 'es6':
          window.open('http://es6-features.org', '_blank');
          break;
          case 'jquery':
          window.open('https://jquery.com/', '_blank');
          break;
          case 'react':
          window.open('https://reactjs.org/', '_blank');
          break;
          case 'redux':
          window.open('https://redux.js.org/', '_blank');
          break;
          case 'node':
          window.open('https://nodejs.org/en/', '_blank');
          break;
          case 'npm':
          window.open('https://www.npmjs.com/', '_blank');
          break;
          case 'webpack':
          window.open('https://webpack.js.org/', '_blank');
          break;
          case 'vscode':
          window.open('https://code.visualstudio.com/', '_blank');
          break;
        default:
          
          break;
      }
      
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
            <p>Some of my favorite Technologies:</p>
            <div className="techContainer">
              
              <img onClick={()=>this.goTo("html5")} className="tech html5" alt="html5" src={html5}/>
              <img onClick={()=>this.goTo("css3")} className="tech css3" alt="css3" src={css3}/>
              <img onClick={()=>this.goTo("js")} className="tech js" alt="javascript" src={js}/>
              <img onClick={()=>this.goTo("es6")} className="tech es6" alt="es6" src={es6}/>
              <img onClick={()=>this.goTo("jquery")} className="tech jquery" alt="jquery" src={jquery}/>
              <img onClick={()=>this.goTo("react")} className="tech react" alt="reactjs" src={react}/>
              <img onClick={()=>this.goTo("redux")} className="tech redux" alt="redux" src={redux}/>
              <img onClick={()=>this.goTo("node")} className="tech node" alt="nodejs" src={node}/>
              <img onClick={()=>this.goTo("npm")} className="tech npm" alt="npm" src={npm}/>
              <img onClick={()=>this.goTo("webpack")} className="tech webpack" alt="webpack" src={webpack}/>
              <img onClick={()=>this.goTo("vscode")} className="tech vscode" alt="vscode" src={vscode}/>
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