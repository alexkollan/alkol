import React, { Component } from 'react';
import { div, Button } from "@blueprintjs/core";

class CVjobelement extends Component{
  constructor(props){
    super(props);
    this.state={
      show: false
    }
  }

  showDesc = ()=>{
    this.setState(prevState =>({
      show: !prevState.show
    }))
  }

  render(){
    return(
      <div style={{marginBottom:'5px'}}>
        <div className="yearTitleContainer">
          <div className="cvYear">{this.props.year}</div>
          <div className="cvTitle">{this.props.title}</div>
        </div>
        <Button onClick={this.showDesc} style={{marginTop: '15px',color: 'rgba(255,255,255,0.7)'}}  minimal  rightIcon={this.state.show ? "chevron-up":"chevron-down"} text="Show more..."/>
        <div className="cvElementContainer">{this.state.show ? <div className="cvElement">{this.props.description}</div>: null}</div>
      </div>
    )
  }
}
export default CVjobelement;