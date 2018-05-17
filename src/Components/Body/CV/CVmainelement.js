import React, { Component } from 'react';
import { div, Button, Collapse, Icon } from "@blueprintjs/core";

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
      <div className="cvMainElement" style={{marginBottom:'5px'}}>
        <div className="yearTitleContainer">
          <div className="cvYear">{this.props.year}</div>
          <div className="cvTitle">{this.props.title}</div>
        </div>
        <Button onClick={this.showDesc} style={{marginTop: '15px',color: 'rgba(0,0,0,0.45)'}}  minimal  rightIcon={<Icon icon={this.state.show ? "chevron-up":"chevron-down"} color="#594B3A"/>} text={<p style={{color:'#594B3A', fontWeight:'200'}}>Show more...</p>}/>
        <Collapse isOpen={this.state.show}><div className="cvElementContainer"><div className="cvElement">{this.props.description}</div></div></Collapse>
      </div>
    )
  }
}
export default CVjobelement;